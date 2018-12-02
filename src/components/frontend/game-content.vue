<template>
    <div class="game-content">

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
</template>

<script>

    import Quests from '@/components/frontend/quest-components/quest-content'
    import Shop from '@/components/frontend/shop-components/shop-content'

    import { mapGetters } from 'vuex'

    export default {

        name: 'game-content',

        components: {
            Quests,
            Shop
        },

        computed: {
            ...mapGetters([
                'currentPage'
            ])
        }

    }
</script>

<style scoped>
    .game-content {
        padding: 1em;
    }

</style>