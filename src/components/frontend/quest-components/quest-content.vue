<template>
    <div class="quest-content h-100 w-100">

        <div v-for="item in questData">
            <QuestItem
                v-bind:quest-data="item">
            </QuestItem>
        </div>
    </div>
</template>

<script>

    import QuestItem from '@/components/frontend/quest-components/quest-item'
    import { mapGetters } from 'vuex'


    export default {
        name: 'quest-content',
        components: {
            QuestItem
        },

        computed: {
            ...mapGetters([
                'questData'
            ])
        }
    }
</script>

<style scoped>
    .quest-content {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(2, auto);
        grid-row-gap: 0.6em;
        grid-column-gap: 0.6em;
    }
</style>