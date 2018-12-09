<template>
    <div class="header-content">
        <header-logo/>

        <div class="action">
            <action-bar/>
        </div>
    </div>
</template>

<script>

    import actionBar from '@/components/header-components/actionbar-content.vue'
    import headerLogo from '@/components/header-components/header-logo-content.vue'

    export default {

        name: 'header-content',

        components: {
            actionBar,
            headerLogo
        }
    }

</script>

<style scoped>

    @media (max-width: 845px) {
        .header-content {
            display: flex;
            background-color: #2b2b2b;
            color: white;
            align-items: center;
            font-size: 1.5em;
            text-transform: uppercase;
        }

        .action {
            position: fixed !important;
            z-index: 9999;
            bottom: 0;
            width: 100%;
        }
    }

    @media screen and (min-width: 845px ) and (max-width: 1400px) {
        .header-content {
            display: flex;
            background-color: #2b2b2b;
            color: white;
            align-items: center;
            font-size: 1.5em;
            text-transform: uppercase;
        }

        .action {
            position: fixed !important;
            z-index: 9999;
            bottom: 0;
            width: 100%;
        }
    }

    @media (min-width: 1401px) {
        .header-content {
            display: flex;
            background-color: #2b2b2b;
            color: white;
            align-items: center;
            font-size: 1.5em;
            text-transform: uppercase;
        }
    }
</style>