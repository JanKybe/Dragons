<template>
    <div class="gameover-content">
        <b-card header="YOU DIED!">
            <p class="card-text">
                Gameover :(, You spent all your lives. If you want you can start new game by pressing "New Game" button.

                <hr>
                <div class="stats">
                    <b-badge variant="success">Successful Missions: {{ playerHistory.quest_won }}</b-badge>
                    <b-badge variant="danger">Unsuccesful Missions: {{ playerHistory.quest_lost }}</b-badge>
                    <b-badge variant="dark">Amount of money you spent: {{ playerHistory.gold_spent }}</b-badge>
                    <b-badge variant="dark">Amount of money you won: {{ playerHistory.gold_won }}</b-badge>
                </div>
            </p>
        </b-card>
    </div>    
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        name: 'gameover-content',

        computed: {
            ...mapGetters({
                playerHistory: 'playerHistory'
            })
        }
    }
</script>

<style scoped>

    .stats {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .badge {
        margin: 0.2em;
    }

    .card-header {
        background-color: #2b2b2b;
        color: white;
        text-transform: uppercase;
        font-weight: 700;
    }
</style>