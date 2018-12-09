<template>
    <div class="player-stats" v-if="currentGame">

        <div class="player-stats-content">
            <b-card no-body class="player-stats-card">
                <div class="card-lives">
                    <div class="row">
                        <div class="col-8">
                            Lives: {{ playerData.lives }}
                        </div>

                        <div class="col-4 buy-life" v-if="playerData.lives > 0">
                            <b-badge v-on:click="buyHealth()" href="#" variant="danger">Buy Life</b-badge>
                        </div>
                    </div>
                </div>
            </b-card>

            <b-card no-body class="player-stats-card">
                Gold: {{ playerData.gold }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Level: {{ playerData.level }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Score: {{ playerData.score }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Turn: {{ playerData.turn }}
            </b-card>
        </div>
    </div>

    <div class="player-stats" v-else>
        <div class="player-stats-content">
            <b-card no-body class="player-stats-card">
                Lives: {{ b_playerData.lives }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Gold: {{ b_playerData.gold }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Level: {{ b_playerData.level }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Score: {{ b_playerData.score }}
            </b-card>

            <b-card no-body class="player-stats-card">
                Turn: {{ b_playerData.turn }}
            </b-card>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "player-stats",
        computed: {
            ...mapGetters({
                playerData: 'playerData',
                healingPotion: 'healingPotion',
                currentGame: 'currentGame',
                b_playerData: 'b_playerData'
            })
        },

        methods: {
            ...mapActions({
                buyItem: 'buyItem'
            }),

            buyHealth: function(){
                this.$store.dispatch('buyItem', {id:'hpot', cost:50});
            },
        }
    }
</script>


<style scoped>
    .player-stats {
        padding: 1em 1em;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
    }

    .player-stats-card {
        padding: 0.3em 0.3em;
        color: #060f13;
        background-color: #f2f2f2;
        margin-bottom: 0.3em;
        text-align: left !important;
        font-size: 0.9em;
    }

    .buy-life {
        text-align: center;
    }
</style>