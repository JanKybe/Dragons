<template>
    <div class="game-content" v-if="currentGame">

        <div v-if="playerData.lives > 0">
            <Quests/>
            <Shop/>
        </div>

        <div v-else>
            <gOver/>
        </div>
    </div>

    <div class="game-content" v-else>
        <bContent/>
    </div>
</template>

<script>

    import Quests from '@/components/frontend/quest-components/quest-content'
    import Shop from '@/components/frontend/shop-components/shop-content'
    import bContent from '@/components/frontend/b-game-components/b-game-content'
    import gOver from '@/components/frontend/gameover-content'

    import { mapGetters } from 'vuex'

    export default {

        name: 'game-content',

        components: {
            Quests,
            Shop,
            bContent,
            gOver
        },

        computed: {
            ...mapGetters({
                currentPage: 'currentPage',
                currentGame: 'currentGame',
                playerData: 'playerData'
            })
        }

    }
</script>

<style scoped>
    .game-content {
        padding: 1em;
    }

</style>