<template>
    <div class="player-stats">

        <div class="player-stats-content">
            <b-card no-body class="player-stats-card">
                <div class="card-lives">
                    <div class="row">
                        <div class="col-8">
                            Lives: {{ playerData.lives }}
                        </div>

                        <div class="col-4 buy-life">
                            <b-badge href="#" variant="danger">Buy Life</b-badge>
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
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "player-stats",
        computed: {
            ...mapGetters([
                'playerData',
                'healingPotion'
            ])
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