<template>
    <div class="b-gameover-content">
        <b-card header="YOU DIED!">
            <p class="card-text">
                Gameover :(, You spent all your lives. If you want you can start new game by pressing "New Game" button.

                <hr>
                <div class="stats">
                    <b-badge variant="success">Successful Missions: {{ b_gameData.win }}</b-badge>
                    <b-badge variant="danger">Unsuccesful Missions: {{ b_gameData.lost }}</b-badge>
                    <b-badge variant="dark">Amount of money you spent: {{ b_gameData.moneySpent }}</b-badge>
                    <b-badge variant="dark">Amount of money you won: {{ b_gameData.moneyWon }}</b-badge>
                </div>
            </p>
        </b-card>

    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        name: 'b-gameover-content',

        computed: {
            ...mapGetters({
                b_gameData: 'b_gameData'
            })
        }
    }
</script>

<style scoped>

    .b-gameover-content {
        margin-top: 1em;
    }

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