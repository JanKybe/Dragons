<template>
    <div class="header-content">
        <header-logo/>

        <div class="action">
            <action-bar/>
        </div>
    </div>
</template>

<script>

    import actionBar from '@/components/frontend/header-components/actionbar-content.vue'
    import headerLogo from '@/components/frontend/header-components/header-logo-content.vue'

    export default {

        name: 'header-content',

        components: {
            actionBar,
            headerLogo
        }
    }

</script>

<style scoped>

    @media (max-width: 767px) {
        .header-content {
            display: flex;
            background-color: #2b2b2b;
            color: white;
            align-items: center;
            font-size: 1em;
            text-transform: uppercase;
        }

        .action {
            position: fixed !important;
            z-index: 9999;
            bottom: 0;
            width: 100%;
        }
    }

    @media screen and (min-width: 768px ) and (max-width: 1100px) {
        .header-content {
            display: flex;
            background-color: #2b2b2b;
            color: white;
            align-items: center;
            font-size: 1.5em;
            text-transform: uppercase;
        }
    }

    @media (min-width: 1101px) {
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