/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from '../select';
import PhenixNumber from "../number";
import OptionControl from '../switch';

//===> Component <===//
export default class AnimationsSet extends Component {
    render () {
        //===> Properties <===//
        const PhenixBlocks = window.PhenixBlocks.dataLists;
        const {attributes, options, mainSetter} = this.props;

        //===> Define Controls Options <===//
        const entrance_animations = PhenixBlocks.animations.entrance;
        const exit_animations = PhenixBlocks.animations.exit;

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Layout Group <===*/}
            <div className={`row gpx-10`}>
                {/*===> Animation Name <===*/}
                <div className='col-12 mb-5'>
                    <PhenixSelect name="animation-name" className="mb-15" placeholder={__("None", "pds-blocks")} search={true} label={__("Entrances Animation", "pds-blocks")} value={attributes.style?.animation?.name} onChange={mainSetter} options={entrance_animations} />
                </div>
                {attributes.style?.animation?.hasExit ?
                    <div className='col-12 mb-5'>
                        <PhenixSelect name="exit" className="mb-15" placeholder={__("None", "pds-blocks")} search={true} label={__("Exit Animation", "pds-blocks")} value={attributes.style?.animation?.exit} onChange={mainSetter} options={exit_animations} />
                    </div>
                :null}
                {!attributes.style?.animation?.group ? <>
                    {/*===> Column <===*/}
                    <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-duration" label={__("Speed", "pds-blocks")} value={attributes.style?.animation?.duration || 1000} onChange={mainSetter} min={0} max={15000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-delay" label={__("Delay", "pds-blocks")} value={attributes.style?.animation?.delay || 0} onChange={mainSetter} min={0} max={3000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-offset" label={__("Offset", "pds-blocks")} value={attributes.style?.animation?.offset || 0} onChange={mainSetter} min={0} max={3000} steps={1}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-inset" label={__("Inset", "pds-blocks")} value={attributes.style?.animation?.inset || 0} onChange={mainSetter} min={0} max={3000} steps={1}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12'>
                        <OptionControl name={`animation-reverse`} value="end" checked={attributes.style?.animation?.reverse} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Revers Flow", "pds-blocks")}</OptionControl>
                        <OptionControl name={`animation-scrollTrigger`} value="boolean" checked={attributes.style?.animation?.scrollTrigger} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Scroll Trigger", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> .End Columns. <===*/}
                </>: null}
                {/*===> . Columns. <===*/}
                <div className='col-7 col mb-10'>
                    <OptionControl name={`animation-group`} value="boolean" checked={attributes.style?.animation?.group} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Use as Group", "pds-blocks")}</OptionControl>
                </div>
                {/*===> . Columns. <===*/}
                <div className='col-5 col mb-10'>
                    <OptionControl name={`hasExit`} value="boolean" checked={attributes.style?.animation?.hasExit} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Has Exit", "pds-blocks")}</OptionControl>
                </div>
                {/*===> .End Columns. <===*/}
            </div>
            {/*===> // Layout Group <===*/}
        </>
    }
}