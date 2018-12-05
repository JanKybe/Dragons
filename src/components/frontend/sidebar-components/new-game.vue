<template>
    <div class="new-game" v-if="currentGame">
        <div class="row">
            <div class="col">
                <button v-on:click="startGame()" class="sidebar-btn">New Game</button>
            </div>

            <div class="col">

                <div v-if="currentPage == 1">
                    <button v-on:click="changePage(2)" class="sidebar-btn">Shop</button>
                </div>

                <div v-if="currentPage == 2">
                    <button v-on:click="changePage(1)" class="sidebar-btn">Quests</button>
                </div>
            </div>
        </div>
    </div>

    <div class="new-game" v-else>
        <div class="row">
            <div class="col">
                <button v-on:click="" class="sidebar-btn">New Game</button>
            </div>

            <div class="col">
                <button v-on:click="" class="sidebar-btn">Start Turn</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {

        name: 'new-game',
        
        computed: {
            ...mapGetters({
                currentPage: 'currentPage',
                currentGame: 'currentGame'
            })
        },

        methods: {
            ...mapMutations([
                'setCurrentPage'
            ]),

            ...mapActions([
                'startGame'
            ]),

            startGame: async function () {
                await this.$store.dispatch('startGame');
            },

            changePage: function(page_number){
                console.log(page_number);
                this.$store.commit('setCurrentPage', page_number);
            }
        }
    }

</script>

<style scoped>
    .new-game {
        padding: 1em;
    }

    .sidebar-btn:focus {
        outline: 0;
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