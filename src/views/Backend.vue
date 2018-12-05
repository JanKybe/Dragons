<template>
    <div class="backend animated fadeIn">
        <Header/>

        <div class="backend-content">
            <Sidebar/>
        </div>

    </div>
</template>


<script>
    import Header from '@/components/frontend/header-content'
    import Sidebar from '@/components/frontend/sidebar-content'
    //import Game from '@/components/frontend/game-content'


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
            Header,
            Sidebar
        },

        mounted() {
            this.$store.dispatch('b_startGame')
            this.$store.commit('setCurrentGame', false)
        }

    }
</script>

<style scoped>

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
</style>