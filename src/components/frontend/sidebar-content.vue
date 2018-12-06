<template>
    <div class="sidebar-content">
        <NewGame/>
        <Stats/>
        <Reputation/>
    </div>
</template>


<script>

    import NewGame from '@/components/frontend/sidebar-components/sidebar-buttons'
    import Stats from '@/components/frontend/sidebar-components/player-stats'
    import Reputation from '@/components/frontend/sidebar-components/player-reputation'

    export default {

        name: 'sidebar-content',
        components: {
            Stats,
            Reputation,
            NewGame
        }
    }
</script>

<style scoped>
    .sidebar-content {
        background-color: #FFF;
        border-right: 1px solid rgba(0, 0, 0, 0.125);
    }
</style>