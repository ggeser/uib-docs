import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        select:[],             // 0
        orgType:[],            // 1
        region: '',            // 2

    },
    mutations: {
        clearStore  (state) {
            state.select = [];
            state.orgType = [];
            state.region = '';

        },

        setSelect (state, value) { state.select = value; },               // 0
        setOrgType (state, value) { state.orgType = value; },             // 1
        setRegion (state, value) { state.region = value; } ,              // 2

    },

    modules: {
        app,
        appConfig,
        verticalMenu,
        'app-ecommerce': ecommerceStoreModule,
    },
    strict: process.env.DEV,

    plugins: [createPersistedState()],
})
