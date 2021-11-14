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
        select:[],               // 0
        orgType:[],              // 1
        region: '',              // 2

        rekv: {                 // 3
           full_name: '',
           short_name: '',
           ur_address: '',
           fakt_address: '',
           inn: '',
           kpp: '',
           ogrn: '',
           okpo: '',
           okfs: '',
           okogu: '',
           okopf: '',
           uc_date: '',
           dolgnost: '',
           fio: '',
           ot_date: '',
           site: '',
        },



    },
    mutations: {
        clearStore  (state) {
            state.select = [];      // 0
            state.orgType = [];     // 1
            state.region = '';      // 2

                                    // 3
            state.rekv = {
                full_name: '',
                short_name: '',
                ur_address: '',
                fakt_address: '',
                inn: '',
                kpp: '',
                ogrn: '',
                // okved: '',
                // ras_okved: '',
                okpo: '',
                okfs: '',
                okogu: '',
                okopf: '',
                uc_date: '',
                dolgnost: '',
                fio: '',
                ot_date: '',
                site: '',
            };

        },

        setSelect (state, value) { state.select = value; },                         // 0
        setOrgType (state, value) { state.orgType = value; },                       // 1
        setRegion (state, value) { state.region = value; } ,                        // 2
        set_rekv_full_name (state, value) { state.rekv.full_name = value; } ,       // 3
        set_rekv_short_name (state, value) { state.rekv.short_name = value; } ,
        set_rekv_ur_address (state, value) { state.rekv.ur_address = value; } ,
        set_rekv_fakt_address (state, value) { state.rekv.fakt_address = value; } ,
        set_rekv_inn (state, value) { state.rekv.inn = value; } ,
        set_rekv_kpp (state, value) { state.rekv.kpp = value; } ,
        set_rekv_ogrn (state, value) { state.rekv.ogrn = value; } ,
        set_rekv_okpo (state, value) { state.rekv.okpo = value; } ,
        set_rekv_okfs (state, value) { state.rekv.okfs = value; } ,
        set_rekv_okogu (state, value) { state.rekv.okogu = value; } ,
        set_rekv_okopf (state, value) { state.rekv.okopf = value; } ,
        set_rekv_uc_date (state, value) { state.rekv.uc_date = value; } ,
        set_rekv_dolgnost (state, value) { state.rekv.dolgnost = value; } ,
        set_rekv_fio (state, value) { state.rekv.fio = value; } ,
        set_rekv_ot_date (state, value) { state.rekv.ot_date = value; } ,
        set_rekv_site (state, value) { state.rekv.site = value; } ,

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
