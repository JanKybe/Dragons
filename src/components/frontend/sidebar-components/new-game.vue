<template>
    <div class="new-game">
        <div class="row">
            <div class="col">
                <button class="sidebar-btn">New Game</button>
            </div>

            <div class="col">

                <div v-if="currentPage">
                    <button v-on:click="changePage()" class="sidebar-btn">Shop</button>
                </div>

                <div v-else>
                    <button v-on:click="changePage()" class="sidebar-btn">Quests</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import {mapGetters, mapMutations } from 'vuex'

    export default {

        name: 'new-game',

        computed: {
            ...mapGetters([
                'currentPage'
            ])
        },

        methods: {
            ...mapMutations([
                'setCurrentPage'
            ]),

            changePage: function(){
                this.$store.commit('setCurrentPage', !this.currentPage);
            }
        }
    }

</script>

<style scoped>
    .new-game {
        padding: 1em;
    }

    .sidebar-btn {
        width: 100%;
        background-color: #f2f2f2;
        border: 1px solid rgba(0, 0, 0, 0.125);
        cursor: pointer;
        border-radius: 0.25rem;
    }

    .sidebar-btn:hover {
        background-color: white;
    }


</style>