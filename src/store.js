import Vue from 'vue'
import Vuex from 'vuex'
import gameData from './store/frontend-modules/gameData'
import playerData from './store/frontend-modules/playerData'
import questData from './store/frontend-modules/questData'
import shopData from './store/frontend-modules/shopData'
import backendData from './store/frontend-modules/backendData'

Vue.use(Vuex)

export const store = new Vuex.Store({

    modules: [
        gameData,
        playerData,
        questData,
        shopData,
        backendData
    ],
})
