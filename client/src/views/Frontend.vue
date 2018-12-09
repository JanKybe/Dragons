<template>
    <div class="frontend">
        <header-content/>

        <div class="frontend-content">
            <sidebar-content/>
            <game-content/>
        </div>
    </div>
</template>


<script>
    import HeaderContent from '@/components/header-content'
    import SidebarContent from '@/components/sidebar-content'
    import GameContent from '@/components/game-content'


    import { mapActions, mapMutations } from 'vuex'

    export default {
        name: 'Frontend',

        methods: {
            ...mapActions({
                startGame: 'startGame'
            }),

            ...mapMutations({
                setCurrentGame: 'setCurrentGame'
            }),

            startGame: async function () {
                await this.$store.commit('setCurrentGame', true);
                await this.$store.dispatch('startGame');
            }
        },

        components: {
            HeaderContent,
            SidebarContent,
            GameContent
        },

        mounted() {
            this.startGame();
        }

    }
</script>

<style scoped>

    @media (max-width: 845px) {
        .frontend {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 80px auto;

            width: 100%;
            height: 100%;
        }

        .frontend-content {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto auto;
        }
    }

     @media screen and (min-width: 846px ) and (max-width: 1400px) {
        .frontend {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 80px auto;

            width: 100%;
            height: 100%;
        }

        .frontend-content {
            display: grid;
            grid-template-columns: 30% 70%;
        }

    }

    @media (min-width: 1401px) {
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
    }
</style>