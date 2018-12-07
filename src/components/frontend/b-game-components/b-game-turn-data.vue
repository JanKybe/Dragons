<template>
    <div class="b-game-turn-data animated fadeIn" v-if="b_turnData.type === 'quest'">
        <div class="turn-card">
            <b-card :header="b_turnData.questData.probability">
            <p class="card-text">
                {{ b_turnData.questData.message }}
            </p>
        </b-card>
        </div>

        <div class="turn-success" v-if="b_turnData.success">
            <b-card header="This turn was successful">
                <p class="card-text">
                    {{ b_turnData.message }}
                </p>
            </b-card>
        </div>

        <div class="turn-success" v-else>
            <b-card header="This turn was unsuccessful">
                <p class="card-text">
                    {{ b_turnData.message }}
                </p>
            </b-card>
        </div>
    </div>

    <div class="b-game-turn-data animated fadeIn" v-else>
        <div class="turn-card">
            <b-card :header="b_turnData.item">
            <p class="card-text">
                Server decided to buy item, because quest success rate is higher when you buy items or healing potion.
            </p>
        </b-card>
        </div>

        <div class="turn-success" v-if="b_turnData.success">
            <b-card header="This turn was successful">
            <p class="card-text">
                Server successfully bought item.
            </p>
        </b-card>
        </div>

        <div class="turn-success" v-else>
            <b-card header="This turn was unsuccessful">
                <p class="card-text">
                    Server tried to bought item and failed.
                </p>
            </b-card>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'b-game-turn-data',

        computed: {
            ...mapGetters({
                b_turnData: 'b_turnData'
            })
        }
    }
</script>

<style scoped>

    @media (max-width: 767px) {
        .b-game-turn-data {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            grid-row-gap: 0.6em;
            margin-top: 1em;
        }
    }

     @media screen and (min-width: 768px ) and (max-width: 1100px) {
        .b-game-turn-data {
            display: grid;
            grid-template-columns: 30% 69.4%;
            grid-column-gap: 0.6em;
            margin-top: 1em;
        }

    }

    @media (min-width: 1101px) {
        .b-game-turn-data {
            display: grid;
            grid-template-columns: 30% 69.4%;
            grid-column-gap: 0.6em;
            margin-top: 1em;
        }
    }

    .card {
        height: 15em;
    }

    .card-header {
        background-color: #2b2b2b;
        color: white;
        text-transform: uppercase;
        font-weight: 700;
    }

    .turn-card .card-header  {
        background-image: url("/assets/b_header.png");
        color: #2b2b2b;
        text-transform: uppercase;
        background-position: 13% 37%;
        font-weight: 700;
    }
</style>