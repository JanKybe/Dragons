<template>
        <div class="quest-item">

            <b-card no-body class="quest-card text-center">

                <QuestStats
                        :probability="questData.probability"
                        :reward="questData.reward">

                </QuestStats>

                <div class="quest-message">
                    {{ questData.message }}
                </div>
                <div class="quest-start" @click="startQuest({adId: questData.adId, reward: questData.reward})">
                    Start Quest >
                </div>

            </b-card>
        </div>
</template>

<script>

    import QuestStats from '@/components/quest-components/quest-item-stats'

    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'quest-item',
        props: ['questData'],

        components: {
            QuestStats
        },

        methods: {
            ...mapActions({
               startQuest: 'startQuest' 
            }),

            startQuest: async function (data) {
                await this.$store.dispatch('startQuest', data);
            },
        }
    }
</script>

<style scoped>

    .quest-card {
        background-color: #f8f9fa;
        color: black;
    }

    .quest-message {
        height: 5em;
        margin: 1em;
        font-size: 0.95em;
    }

    .quest-start {
        height: 2.5em;
        background-color: white;
        line-height: 2.5em;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        cursor: pointer;
    }

    .quest-start:hover {
        background-color: #2c2c2c;
        color: whitesmoke;
    }
</style>