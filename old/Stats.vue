<template>
    <div class="Stats">
        <div class="stats-header">
            <h4>Dragons of Mugloar</h4>
        </div>

        <div class="stats-content">
            <div class="stats-badge">
                <b>Lives: </b>
                {{ playerData.lives }}
            </div>

            <div class="stats-badge">
                <b>Gold: </b>
                {{ playerData.gold }}
            </div>

            <div class="stats-badge">
                <b>Level: </b>
                {{ playerData.level }}
            </div>

            <div class="stats-badge">
                <b>Score: </b>
                {{ playerData.score }}
            </div>

            <div class="stats-badge">
                <b>Turn: </b>
                {{ playerData.turn }}
            </div>
        </div>

    </div>
</template>


<script>
    import {mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Stats',


        computed: {
            ...mapGetters([
                'playerData',
                'repData'
            ])
        }
    }
</script>

<style scoped>

    .stats-header {
        background-color: #383939;
        text-align: left;
        color: whitesmoke;
        padding: 0.5em 0.5em;
    }

    .stats-content {
        background-color: whitesmoke;
        padding: 1em 1em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .stats-badge {
        max-width: 6rem;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        padding: 0.3em 0.3em;
        display: inline;
        margin: 0.2em 0.2em;
        background-color: #fdfdfd;
    }

</style>