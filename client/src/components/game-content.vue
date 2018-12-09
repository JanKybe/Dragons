<template>
    <div class="game-content" v-if="currentGame">
        <div v-if="playerData.lives > 0">
            <quests/>
            <shop/>
        </div>

        <div v-else-if="gameOver">
            <g-over/>
        </div>
    </div>

    <div class="game-content" v-else>
        <b-content/>
    </div>
</template>

<script>

    import Quests from '@/components/quest-components/quest-content'
    import Shop from '@/components/shop-components/shop-content'
    import bContent from '@/components/b-game-components/b-game-content'
    import gOver from '@/components/gameover-content'

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
                playerData: 'playerData',
                gameOver: 'gameOver'
            })
        }

    }
</script>

<style scoped>
    .game-content {
        padding: 1em;
    }

</style>