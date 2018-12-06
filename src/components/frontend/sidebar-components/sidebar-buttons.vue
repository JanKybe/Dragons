<template>
    <div class="sidebar-buttons" v-if="currentGame">
        <div class="row">
            <div class="col">
                <button v-on:click="startGame()" class="sidebar-btn">New Game</button>
            </div>

            <div class="col" v-if="playerData.lives > 0">

                <div v-if="currentPage">
                    <button v-on:click="changePage()" class="sidebar-btn">Shop</button>
                </div>

                <div v-if="!currentPage">
                    <button v-on:click="changePage()" class="sidebar-btn">Quests</button>
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar-buttons" v-else>
        <div class="row">
            <div class="col">
                <button v-on:click="b_startGame()" class="sidebar-btn">New Game</button>
            </div>

            <div class="col" v-if="b_playerData.lives > 0">
                <button v-on:click="b_startTurn()" class="sidebar-btn">Start Turn</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {

        name: 'sidebar-buttons',
        
        computed: {
            ...mapGetters({
                currentPage: 'currentPage',
                currentGame: 'currentGame',
                b_playerData: 'b_playerData',
                playerData: 'playerData'
            })
        },

        methods: {
            ...mapMutations([
                'setCurrentPage'
            ]),

            ...mapActions({
                startGame: 'startGame',
                b_startGame: 'b_startGame',
                b_startTurn: 'b_startTurn'
            }),

            startGame: async function () {
                await this.$store.dispatch('startGame');
            },

            changePage: function(){
                this.$store.commit('setCurrentPage', !this.currentPage);
            },

            b_startGame: async function () {
                await this.$store.dispatch('b_startGame');
            },

            b_startTurn: async function () {
                await this.$store.dispatch('b_startTurn');
            }
        }
    }

</script>

<style scoped>
    .sidebar-buttons {
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