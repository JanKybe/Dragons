<template>
    <div class="Quests">
        <div v-for="Quest in questData">
            <QuestCard v-bind:quest-data='Quest'></QuestCard>
        </div>
    </div>
</template>

<script>

    import QuestCard from '@/components/frontend/QuestCard'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Quests',

        components: {
          QuestCard
        },

        computed: {
            ...mapGetters([
                'questData'
            ])
        },

    }
</script>

<style scoped>
    .Quests {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        margin: 12px 12em;
        max-height: 40rem;

    }


</style>