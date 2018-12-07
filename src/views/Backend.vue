<template>
    <div class="backend animated fadeIn">
        <header-content/>

        <div class="backend-content">
            <sidebar-content/>
            <game-content/>
        </div>

    </div>
</template>


<script>
    import HeaderContent from '@/components/frontend/header-content'
    import SidebarContent from '@/components/frontend/sidebar-content'
    import GameContent from '@/components/frontend/game-content'


    import { mapMutations, mapActions } from 'vuex'

    export default {
        name: 'Backend',

        methods: {
            ...mapActions({
                b_startGame: 'b_startGame'
            }),

            ...mapMutations({
                setCurrentGame: 'setCurrentGame'
            })
        },

        components: {
            HeaderContent,
            SidebarContent,
            GameContent
        },

        mounted() {
            this.$store.dispatch('b_startGame')
            this.$store.commit('setCurrentGame', false)
        }

    }
</script>

<style scoped>

    @media (max-width: 767px) {
        .backend {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 80px auto;

            width: 100%;
            height: 100%;
        }

        .backend-content {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto auto;
        }
    }

     @media screen and (min-width: 768px ) and (max-width: 1100px) {
        .backend {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 80px auto;

            width: 100%;
            height: 100%;
        }

        .backend-content {
            display: grid;
            grid-template-columns: 30% 70%;
        }

    }

    @media (min-width: 1101px) {
        .backend {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 80px auto;

            width: 100%;
            height: 100%;
        }

        .backend-content {
            display: grid;
            grid-template-columns: 17% 83%;
        }
    }
</style>