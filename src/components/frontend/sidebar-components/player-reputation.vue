<template>
    <div class="player-reputation">
        <div class="player-reputation-content">
            <b-card no-body class="player-reputation-card">
                People: {{ repData.people }}
            </b-card>

            <b-card no-body class="player-reputation-card">
                State: {{ repData.state }}
            </b-card>

            <b-card no-body class="player-reputation-card">
                Underworld: {{ repData.underworld }}
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
                'repData'
            ])
        }
    }
</script>


<style scoped>

    .player-reputation {
        padding: 1em 1em;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .player-reputation-card {
        padding: 0.3em 0.3em;
        color: #060f13;
        background-color: #f2f2f2;
        margin-bottom: 0.3em;
        text-align: left !important;
        font-size: 0.9em;
    }

</style>