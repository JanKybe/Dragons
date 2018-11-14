<template>
    <div class="frontend">
        <Header/>

        <div class="frontend-content">
            <Sidebar/>
            <Game/>
        </div>

    </div>
</template>


<script>
    import Header from '@/components/frontend/header-content'
    import Sidebar from '@/components/frontend/sidebar-content'
    import Game from '@/components/frontend/game-content'


    import {mapActions} from 'vuex'

    export default {
        name: 'Frontend',

        methods: {
            ...mapActions([
                'startGame'
            ]),

            startGame: async function () {
                await this.$store.dispatch('startGame');
            }
        },

        components: {
            Header,
            Sidebar,
            Game
        },

        mounted() {
            this.startGame();
        }

    }
</script>

<style scoped>

    .frontend {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 80px auto;

        width: 100%;
        height: 100%;
    }

    .frontend-content {
        display: grid;
        grid-template-columns: 17% 83%;
    }
</style>