<template>
    <b-list-group class="quest-item-stats" flush>
        <b-list-group-item v-bind:class="difficulty_level">{{ probability }}</b-list-group-item>
        <b-list-group-item>
            <div class="row">
                <div class="col">
                    <b-badge variant="light">Reward: {{ reward }}</b-badge>
                </div>

                <div class="col">
                    <b-badge variant="light">{{ recommended_level_text }}</b-badge>
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
                recommended_level: '',
                recommended_level_text: ''
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
                        this.difficulty_level = 'easy';
                        this.recommended_level = 'easy';
                        this.recommended_level_text = 'Level: 0 - 3';

                        break;

                    case "Quite likely":
                    case "Sure thing":
                    case "Hmmm....":
                        this.difficulty_level = 'normal';
                        this.recommended_level_text = 'Level: 3 - 5';

                        if ( this.playerData.level === 2 ){
                            this.recommended_level = 'normal'
                        } else if ( this.playerData.level < 3 ) {
                            this.recommended_level = 'very-hard'
                        }

                        break;

                    case "Playing with fire":
                    case "Gamble":
                    case "Rather detrimental":
                        this.recommended_level_text = 'Level: 5 - 7';
                        this.difficulty_level = 'hard';

                        if ( this.playerData.level === 4 ){
                            this.recommended_level = 'normal'
                        } else if ( this.playerData.level < 5 ) {
                            this.recommended_level = 'very-hard'
                        }

                        break;

                    case "Risky":
                    case "Suicide mission":
                    case "Impossible":
                        this.recommended_level_text = 'Level: 7 >';
                        this.difficulty_level = 'very-hard';

                        if ( this.playerData.level === 6 ){
                            this.recommended_level = 'normal'
                        } else if ( this.playerData.level < 7 ) {
                            this.recommended_level = 'very-hard'
                        }

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
        border: 1px solid #2c2c2c;
    }

    .test {
        background-color: #2c2c2c;
        color: whitesmoke;
    }

    .easy {
        background-color: darkgreen;
        color: whitesmoke;
    }

    .normal {
        background-color: #c78a07;
        color: whitesmoke;
    }

    .hard {
        background-color: darkslateblue;
        color: whitesmoke;
    }

    .very-hard {
        background-color: darkred;
        color: whitesmoke;
    }

</style>