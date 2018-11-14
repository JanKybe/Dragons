<template>
    <div class="QuestCard h-75">
       <!-- <b-card
                v-bind:img-src="image"
                img-alt="Image"
                img-top

                class="h-100"
                style="max-width: 17rem;">

            <div class="card-content">
                <p class="card-text">{{ questData.message }}</p>

                <div class="card-badges">
                    <b-badge style="margin-right: 6px;" variant="warning">Reward: {{ questData.reward }}</b-badge>
                    <b-badge v-bind:variant="variant">{{ questData.probability }}</b-badge>
                </div>

                <div class="card-button">
                    <b-button variant="secondary">Start Quest</b-button>
                </div>


            </div>
        </b-card>-->

        <b-card
            class="h-75"
        >
            <p class="card-text">
                {{ questData.message }}
            </p>

            <b-badge style="margin-right: 6px;" variant="warning">Reward: {{ questData.reward }}</b-badge>
            <b-badge v-bind:variant="variant">{{ questData.probability }}</b-badge>
        </b-card>
    </div>
</template>

<script>

    export default {

        name: "QuestCard",
        props: ['questData'],

        data: function () {
            return {
                variant: "danger",
                image: "http://46.101.191.134:8080/easy.png"
            }
        },

        methods: {

            questVariant: function () {

                switch(this.questData.probability){

                    case "Piece of cake":
                        this.variant = "success";
                }
            }

        },

        mounted() {
            this.questVariant();

        }
    }

</script>

<style scoped>
    .card-content {
        display: grid;
        grid-template-rows: 7em 2em 2em;
    }


</style>


