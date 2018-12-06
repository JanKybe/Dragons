<template>
    <div class="header-content">
        <headerLogo/>
        <actionBar/>
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
    .header-content {
        display: flex;
        background-color: #2b2b2b;
        color: white;
        align-items: center;
        font-size: 1.5em;
        text-transform: uppercase;
    }
</style>