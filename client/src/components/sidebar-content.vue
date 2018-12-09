<template>
    <div class="sidebar-content">
        <new-game/>
        <stats/>

        <div v-if="currentGame">
            <reputation
                :reputation="repData"
            />
        </div>
        
        <div v-else>
            <reputation
                :reputation="b_repData"
            />
        </div>
    </div>
</template>


<script>

    import NewGame from '@/components/sidebar-components/sidebar-buttons'
    import Stats from '@/components/sidebar-components/player-stats'
    import Reputation from '@/components/sidebar-components/player-reputation'

    import { mapGetters } from 'vuex'

    export default {

        name: 'sidebar-content',
        components: {
            Stats,
            Reputation,
            NewGame
        },

        computed: {
            ...mapGetters({
                repData: 'repData',
                b_repData: 'b_repData',
                currentGame: 'currentGame'
            })
        }
    }
</script>

<style scoped>
    .sidebar-content {
        background-color: #FFF;
        border-right: 1px solid rgba(0, 0, 0, 0.125);
    }
</style>