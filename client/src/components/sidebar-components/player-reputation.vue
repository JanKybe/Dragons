<template>
    <div class="player-reputation">
        <div class="player-reputation-content">
            <b-card no-body class="player-reputation-card ">
                <b>People:</b> {{ people }}
            </b-card>

            <b-card no-body class="player-reputation-card">
                <b>State:</b> {{ state }}
            </b-card>

            <b-card no-body class="player-reputation-card">
                <b>Underworld:</b> {{ underworld }}
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "player-stats",

        data: function() {
            return {
                people: '',
                state: '',
                underworld: ''
            }
        },

        props: [
            'reputation'
        ],

        watch: {
            reputation: function(){
                this.updateRepPeople();
                this.updateRepState();
                this.updateRepUnderWorld();
            }
        },

        methods: {

            updateRepPeople: function(){

                if ( this.reputation.people < 0 && this.reputation.people > -3 ){
                    this.people = 'Bad'
                } else if ( this.reputation.people < -3  && this.reputation.people > -5 ){
                    this.people = 'Awful'
                } else if ( this.reputation.people < -5 ){
                    this.people = 'Terrible'
                } else if ( this.reputation.people < 3 && this.reputation.people > 1) {
                    this.people = "Good"
                } else if ( this.reputation.people > 3  && this.reputation.people < 5) {
                    this.people = "Great"
                } else if ( this.reputation.people > 5 ) {
                    this.people = "Excellent"
                } else {
                    this.people = "Neutral"
                }
            },

            updateRepState: function() {
                if ( this.reputation.state < 0 && this.reputation.state > -3 ){
                    this.state = 'Bad'
                } else if ( this.reputation.state < -3  && this.reputation.state > -5 ){
                    this.state = 'Awful'
                } else if ( this.reputation.state < -5 ){
                    this.state = 'Terrible'
                } else if ( this.reputation.state < 3 && this.reputation.state > 1) {
                    this.state = "Good"
                } else if ( this.reputation.state > 3  && this.reputation.state < 5) {
                    this.state = "Great"
                } else if ( this.reputation.state > 5 ) {
                    this.state = "Excellent"
                } else {
                    this.state = "Neutral"
                }
            },

            updateRepUnderWorld: function() {
                if ( this.reputation.underworld < 0 && this.reputation.underworld > -3 ){
                    this.underworld = 'Bad'
                } else if ( this.reputation.underworld < -3  && this.reputation.underworld > -5 ){
                    this.underworld = 'Awful'
                } else if ( this.reputation.underworld < -5 ){
                    this.underworld = 'Terrible'
                } else if ( this.reputation.underworld < 3 && this.reputation.underworld > 1) {
                    this.underworld = "Good"
                } else if ( this.reputation.underworld > 3  && this.reputation.underworld < 5) {
                    this.underworld = "Great"
                } else if ( this.reputation.underworld > 5 ) {
                    this.underworld = "Excellent"
                } else {
                    this.underworld = "Neutral"
                }
            }
        },

        mounted() {
            this.updateRepPeople();
            this.updateRepState();
            this.updateRepUnderWorld();
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
        display: inline-block;
        padding: 0.3em 0.3em;
        color: #060f13;
        background-color: #f2f2f2;
        margin: 0.2em;
        text-align: left !important;
        font-size: 0.9em;
    }

</style>