<?php

// Prevent loading this file directly and/or if the class is already defined
if (!defined( 'ABSPATH' ) || class_exists( 'WPGitHubUpdater' ) || class_exists( 'PDS_GitHub_Updater'))
	return;

/**
 *
 *
 * @version 1.6
 * @author Joachim Kudish <info@jkudish.com>
 * @link http://jkudish.com
 * @package PDS_GitHub_Updater
 * @license http://www.gnu.org/copyleft/gpl.html GNU Public License
 * @copyright Copyright (c) 2011-2013, Joachim Kudish
 *
 * GNU General Public License, Free Software Foundation
 * <http://creativecommons.org/licenses/GPL/2.0/>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */
class PDS_GitHub_Updater {
	//===> Define Data <===//
	var $config;
	var $missing_config;
	const VERSION = 1.6;
	private $github_data;

	//=====> Constructor <====//
	public function __construct($config = array()) {
        //===> Define Defaults <===//
		$defaults = array(
            'sslverify' => true,
			'access_token' => '',
            'readme' => 'README.md',
			'slug' => plugin_basename( __FILE__ ),
            'github_url' => 'https://github.com'.$config['github_user'].'/'.$config['github_repo'],
            'api_url' => 'https://api.github.com/repos/'.$config['github_user'].'/'.$config['github_repo'],
            'raw_url' => 'https://raw.github.com/'.$config['github_user'].'/'.$config['github_repo'].'/main',
            'zip_url' => 'https://github.com/'.$config['github_user'].'/'.$config['github_repo'].'/zipball/main',
			'proper_folder_name' => dirname(plugin_basename(__FILE__)),
		);

        //===> Get Config <===//
		$this->config = wp_parse_args($config, $defaults);
        //===> Set Options <===//
		$this->set_defaults();

        //===> Check for Site Update Plugins <===//
		add_filter( 'pre_set_site_transient_update_plugins', array( $this, 'api_check'));
		//===> Hook into the plugin details screen <===//
		add_filter( 'plugins_api', array($this, 'get_plugin_info'), 10, 3);
		add_filter( 'upgrader_post_install', array($this, 'upgrader_post_install' ), 10, 3);
		//===> set timeout for the request to github <===//
		add_filter( 'http_request_timeout', array($this, 'http_request_timeout'));
		//===> set sslverify for zip download <===//
		add_filter( 'http_request_args', array($this, 'http_request_sslverify'), 10, 2);
	}

	//====> Check wether or not the transients need to be overruled <====//
	public function overrule_transients() {
		return (defined('WP_GITHUB_FORCE_UPDATE') && WP_GITHUB_FORCE_UPDATE);
	}

	//====> Set Default Values <===//
	public function set_defaults() {
        //===> Add Access Token to the Zip URL <===//
		if (!empty($this->config['access_token'])) {
			//===> Download the Zip File and Extract it <===//
			extract(parse_url($this->config['zip_url']));

            //===> Define Access Data <===//
			$zip_url = $scheme . '://api.github.com/repos' . $path;
			$zip_url = add_query_arg(array('access_token' => $this->config['access_token']), $zip_url);
			$this->config['zip_url'] = $zip_url;
		}

        //===> Get the Plugin Version <===//
		if (!isset( $this->config['new_version'])) $this->config['new_version'] = $this->get_new_version();

        //===> Check the Last Update Date <===//
		if (!isset( $this->config['last_updated'])) $this->config['last_updated'] = $this->get_date();

        //===> Check the Description <===//
		if (!isset( $this->config['description'])) $this->config['description'] = $this->get_description();

        //===> Get the Plugin Data <===//
		$plugin_data = $this->get_plugin_data();

        //===> Check the Plugin Primary Data <===//
		if (!isset($this->config['plugin_name'])) $this->config['plugin_name'] = $plugin_data['Name'];
		if (!isset($this->config['version'])) $this->config['version'] = $plugin_data['Version'];
		if (!isset($this->config['author'])) $this->config['author'] = $plugin_data['Author'];
		if (!isset($this->config['homepage'])) $this->config['homepage'] = $plugin_data['PluginURI'];
		if (!isset($this->config['readme'])) $this->config['readme'] = 'README.md';
	}

	//===> Callback fn for the http_request_timeout filter <===//
	public function http_request_timeout() { return 2; }

	//===> Callback fn for the http_request_args filter <===//
	public function http_request_sslverify($args, $url) {
		if ($this->config[ 'zip_url' ] == $url)
			$args[ 'sslverify' ] = $this->config['sslverify'];
		return $args;
	}

	//===> Get New Version from GitHub <===//
	public function get_new_version() {
        //===> Get the New Version <===//
		$version = get_site_transient(md5($this->config['slug']).'_new_version');

        //===> Check if the Version is already stored <===//
		if ($this->overrule_transients() || (!isset( $version ) || !$version || '' == $version)) {
            //===> Get the GitHub Data <===//
			$raw_response = $this->remote_get(trailingslashit($this->config['raw_url']) . basename( $this->config['slug']));
            //===> Check Raw Response for Version Error <===//
			if (is_wp_error($raw_response)) $version = false;

            //===> Check the Raw Response for Version Data <===//
			if (is_array($raw_response) && !empty($raw_response['body'])) {
				preg_match( '/.*Version\:\s*(.*)$/mi', $raw_response['body'], $matches );
			}
            
            //===> Check if the Version is New or not <===//
			if (empty($matches[1])) $version = false;
			else $version = $matches[1];

			//===> Older Readme Fallback <===//
			if ( false === $version ) {
                //===> Get the Readme <===//
				$raw_response = $this->remote_get( trailingslashit( $this->config['raw_url'] ) . $this->config['readme'] );
                
                //===> Check Raw Response for Version Error <===//
				if (is_wp_error($raw_response)) return $version;
                
                //===> Check the Raw Response for Version Data <===//
				preg_match( '#^\s*`*~Current Version\:\s*([^~]*)~#im', $raw_response['body'], $__version );
                
                //===> Check if the Version is New or not <===//
				if (isset($__version[1])) {
					$version_readme = $__version[1];
					if (-1 == version_compare( $version, $version_readme)) $version = $version_readme;
				}
			}

			//===> Refresh Every 24h <===//
			if (false !== $version) set_site_transient( md5($this->config['slug']).'_new_version', $version, 60*60*24);
		}

        //===> Return the Version <===//
		return $version;
	}

	//===> Interact with GitHub <===//
	public function remote_get($query) {
        //===> Add Access Token to the URL if not set <===//
		if (!empty( $this->config['access_token'])) $query = add_query_arg(array('access_token' => $this->config['access_token']), $query);
        //===> Get the Data <===//
		$raw_response = wp_remote_get( $query, array('sslverify' => $this->config['sslverify']));
        //===> Return the Data <===//
		return $raw_response;
	}

	//===> Get GitHub Data from the specified repository <===//
	public function get_github_data() {
        //===> Get the GitHub Data <===//
		if (isset( $this->github_data ) &&!empty( $this->github_data)) {
			$github_data = $this->github_data;
		} else {
            //===> Define the Data <===//
			$github_data = get_site_transient( md5($this->config['slug']).'_github_data' );

            //===> Check if the Data is already stored <===//
			if ($this->overrule_transients() || (!isset( $github_data ) ||!$github_data || '' == $github_data)) {
                //===> Get the GitHub Stored Data <===//
				$github_data = $this->remote_get( $this->config['api_url']);
                //===> Check if the Data is an Error <===//
				if (is_wp_error($github_data)) return false;
                //===> Decode the Data <===//
				$github_data = json_decode( $github_data['body'] );
				//===> Refresh Every 24h <===//
				set_site_transient(md5($this->config['slug']).'_github_data', $github_data, 60*60*24);
			}

			//===> Store the data in this class instance for future calls <===//
			$this->github_data = $github_data;
		}
        //===> Return the Data <===//
		return $github_data;
	}

	//===> Get Update Date <===//
	public function get_date() {
		$_date = $this->get_github_data();
		return (!empty( $_date->updated_at)) ? date( 'Y-m-d', strtotime( $_date->updated_at)) : false;
	}

	//===> Get plugin description <===//
	public function get_description() {
		$_description = $this->get_github_data();
		return (!empty( $_description->description)) ? $_description->description : false;
	}

	//===> Get Plugin data <===//
	public function get_plugin_data() {
		include_once ABSPATH.'/wp-admin/includes/plugin.php';
		$data = get_plugin_data( WP_PLUGIN_DIR.'/'.$this->config['slug'] );
		return $data;
	}

	//===> Hook into the plugin update check and connect to GitHub <===//
	public function api_check( $transient ) {
		//===> Check if the transient contains the 'checked' information <===//
		if (empty( $transient->checked)) return $transient;

		//===> check the version and decide if it's new <===//
		$update = version_compare( $this->config['new_version'], $this->config['version'] );

        //===> if has a new Version <===//
		if (1 === $update) {
            //===> Get the GitHub Data <===//
			$response = new stdClass;
			$response->new_version = $this->config['new_version'];
			$response->slug = $this->config['proper_folder_name'];
			$response->url = add_query_arg( array( 'access_token' => $this->config['access_token'] ), $this->config['github_url'] );
			$response->package = $this->config['zip_url'];

			//===> If response is false, don't alter the transient <===//
			if (false !== $response ) $transient->response[ $this->config['slug'] ] = $response;
		}

        //===> Return the Transient <===//
		return $transient;
	}


	//===> Get Plugin info <===//
	public function get_plugin_info( $false, $action, $response ) {
		//===> Check if this call API is for the right plugin <===//
		if (!isset( $response->slug ) || $response->slug != $this->config['slug']) return false;
        //===> Define the Response <===//
		$response->slug = $this->config['slug'];
		$response->plugin_name  = $this->config['plugin_name'];
		$response->version = $this->config['new_version'];
		$response->author = $this->config['author'];
		$response->homepage = $this->config['homepage'];
		$response->requires = $this->config['requires'];
		$response->tested = $this->config['tested'];
		$response->downloaded   = 0;
		$response->last_updated = $this->config['last_updated'];
		$response->sections = array( 'description' => $this->config['description'] );
		$response->download_link = $this->config['zip_url'];
        //===> Return the Response <===//
		return $response;
	}

	//===> Upgrader/Updater <===//
	public function upgrader_post_install( $true, $hook_extra, $result ) {
        //===> Define WordPress Filesystem, pass credentials on mount <===//
		global $wp_filesystem;

		//===> Move & Activate the Plugin <===//
		$proper_destination = WP_PLUGIN_DIR.'/'.$this->config['proper_folder_name'];
		$wp_filesystem->move( $result['destination'], $proper_destination );
		$result['destination'] = $proper_destination;
		$activate = activate_plugin( WP_PLUGIN_DIR.'/'.$this->config['slug'] );

		//===> Output the update message <===//
		$fail  = __( 'The plugin has been updated, but could not be reactivated. Please reactivate it manually.', 'github_plugin_updater' );
		$success = __( 'Plugin reactivated successfully.', 'github_plugin_updater' );
		echo is_wp_error( $activate ) ? $fail : $success;
		return $result;
	}
}