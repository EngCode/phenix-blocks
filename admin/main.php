<!-- Phenix Admin -->
<div class="pdx-30 pdy-50">
    <!-- Page Title -->
    <h1 class="weight-bold h2 mb-30 tx-uppercase">Phenix Admin Page</h1>

    <!-- Setting Wrapper -->
    <div class="pd-30 radius-md bg-white px-tabs" data-active="0" data-navigation=".tabs-navigation">
        <!-- Tabs Navigation -->
        <ul class="tabs-navigation reset-list flexbox">
            <li data-tab="pds-optimization" class="pdy-10 pdx-15">Optimization</li>
            <li data-tab="pds-guten-blocks" class="pdy-10 pdx-15">Default Blocks</li>
        </ul>
        <!-- Panels Group -->
        <div class="tabs-panels">
            <!-- Panel -->
            <div class="tab-panel bg-white pd-20 mb-30" id="pds-optimization">This Tab Number 1 with ID of #tab-1</div>
            <!-- Panel -->
            <div class="tab-panel bg-white pd-20 mb-30" id="pds-guten-blocks">This Tab Number 2 with ID of #tab-2</div>
            <!-- // Panel -->
        </div>
        <!-- // Panels Group -->
    </div>
    <!-- // Setting Wrapper -->
</div>
<!-- // Phenix Admin -->

<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //====> Tabs <====//
        Phenix('.px-tabs').tabs();
    });
</script>
