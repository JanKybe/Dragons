<template>
    <div class='b-game-content'>
        <bWelcome/>

        <div v-if="b_playerData.turn > 0 && b_playerData.lives > 0">
            <bTurn/>    
        </div>

        <div v-else-if="b_playerData.lives === 0">
            <bGameOver/>
        </div>
    </div>
</template>

<script>

import bWelcome from '@/components/frontend/b-game-components/b-welcome-message'
import bTurn from '@/components/frontend/b-game-components/b-game-turn-data'
import bGameOver from '@/components/frontend/b-game-components/b-gameover-content'

import { mapGetters } from 'vuex'

export default {

    name: 'b-game-content',

    components: {
            bWelcome,
            bTurn,
            bGameOver
    },

    computed: {
            ...mapGetters({
                b_playerData: 'b_playerData'
            })
        }
}
</script>
