<template>
    <b-list-group class="quest-item-stats" flush>
        <b-list-group-item class="card-header">{{ probability }}</b-list-group-item>
        <b-list-group-item>
            <div class="row">
                <div class="col">
                    <b-badge variant="light">Reward: {{ reward }}</b-badge>
                </div>

                <div class="col">
                    <b-badge variant="light">{{ recommended_level }}</b-badge>
                </div>
            </div>
        </b-list-group-item>
    </b-list-group>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'quest-item-stats',

        data: function () {
            return {
                difficulty_level: '',
                recommended_level: ''
            }
        },

        props: [
            'probability',
            'reward'
        ],

        watch: {
            probability: function(){
                this.difficulty();
            }
        },

        computed: {
            ...mapGetters({
                playerData: 'playerData'
            }),

        },

        methods: {

            difficulty: function () {

                switch (this.probability) {
                    case "Walk in the park":
                    case "Piece of cake":
                    case "Quite likely":
                    case "Sure thing":
                        this.difficulty_level = 'easy';
                        this.recommended_level = 'Level: 0 - 5';
                        break;

                    case "Playing with fire":
                    case "Hmmm....":
                    case "Gamble":
                    case "Rather detrimental":
                        this.recommended_level = 'Level: 5 - 7';
                        this.difficulty_level = 'normal';

                        break;

                    case "Risky":
                    case "Suicide mission":
                    case "Impossible":
                        this.recommended_level = 'Level: 7 >';
                        this.difficulty_level = 'hard';

                        break;
                }
            }
        },

        mounted() {
            this.difficulty();
        }
    }

</script>

<style scoped>

    .badge-light {
        border: 1px solid #2b2b2b;
        color: #2b2b2b;
    }

    .card-header {
        background-image: url("https://i.imgur.com/j1JuKa6.jpg");
        color: whitesmoke;
        text-transform: uppercase;
        background-position: 13% 37%;
        font-weight: 700;
    }

</style>