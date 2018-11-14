<template>
    <div class="Shop">
        {{ shopData }}
    </div>
</template>

<script>
    import {mapGetters } from 'vuex'

    export default {
        name: 'Shop',

        computed: {
            ...mapGetters([
                'shopData'
            ])
        },

    }
</script>