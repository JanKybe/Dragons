<template>
    <div class="game-content" v-if="currentGame">

        <div v-if="currentPage == 1">
            <Quests/>
        </div>

        <div v-if="currentPage == 2">
            <Shop/>
        </div>

        <div v-if="currentPage == 3">
            Gameover State
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

    import { mapGetters } from 'vuex'

    export default {

        name: 'game-content',

        components: {
            Quests,
            Shop,
            bContent
        },

        computed: {

            ...mapGetters({
                currentPage: 'currentPage',
                currentGame: 'currentGame'
            })
        }

    }
</script>

<style scoped>
    .game-content {
        padding: 1em;
    }

</style>