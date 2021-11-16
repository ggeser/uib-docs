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
        q1select:[],               // 0
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


        q4Selected: [],         // 4
        q4Items : [
            {
                module: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки',
                alll: { id: 'val-01-0', checked: false, indet: false,},
                col1: { id: 'val-01-1', checked: false, indet: false,},
                col2: { id: 'val-01-2', checked: false, indet: false,},
                col3: { id: 'val-01-3', checked: false, indet: false,},
                col4: { id: 'val-01-4', checked: false, indet: false,},
            },
            {
                module: 'Паспортные данные',
                alll: { id: 'val-02-0', checked: false, indet: false,},
                col1: { id: 'val-02-1', checked: false, indet: false,},
                col2: { id: 'val-02-2', checked: false, indet: false,},
                col3: { id: 'val-02-3', checked: false, indet: false,},
                col4: { id: 'val-02-4', checked: false, indet: false,},
            },
            {
                module: 'Семейное положение',
                alll: { id: 'val-03-0', checked: false, indet: false,},
                col1: { id: 'val-03-1', checked: false, indet: false,},
                col2: { id: 'val-03-2', checked: false, indet: false,},
                col3: { id: 'val-03-3', checked: false, indet: false,},
                col4: { id: 'val-03-4', checked: false, indet: false,},
            },
            {
                module: 'Социальное положение',
                alll: { id: 'val-04-0', checked: false, indet: false,},
                col1: { id: 'val-04-1', checked: false, indet: false,},
                col2: { id: 'val-04-2', checked: false, indet: false,},
                col3: { id: 'val-04-3', checked: false, indet: false,},
                col4: { id: 'val-04-4', checked: false, indet: false,},
            },
            {
                module: 'Имущественное положение',
                alll: { id: 'val-05-0', checked: false, indet: false,},
                col1: { id: 'val-05-1', checked: false, indet: false,},
                col2: { id: 'val-05-2', checked: false, indet: false,},
                col3: { id: 'val-05-3', checked: false, indet: false,},
                col4: { id: 'val-05-4', checked: false, indet: false,},
            },

            {
                module: 'Документы об образовании',
                alll: { id: 'val-06-0', checked: false, indet: false,},
                col1: { id: 'val-06-1', checked: false, indet: false,},
                col2: { id: 'val-06-2', checked: false, indet: false,},
                col3: { id: 'val-06-3', checked: false, indet: false,},
                col4: { id: 'val-06-4', checked: false, indet: false,},
            },
            {
                module: 'Профессия',
                alll: { id: 'val-07-0', checked: false, indet: false,},
                col1: { id: 'val-07-1', checked: false, indet: false,},
                col2: { id: 'val-07-2', checked: false, indet: false,},
                col3: { id: 'val-07-3', checked: false, indet: false,},
                col4: { id: 'val-07-4', checked: false, indet: false,},
            },
            {
                module: 'Сведения о доходах',
                alll: { id: 'val-08-0', checked: false, indet: false,},
                col1: { id: 'val-08-1', checked: false, indet: false,},
                col2: { id: 'val-08-2', checked: false, indet: false,},
                col3: { id: 'val-08-3', checked: false, indet: false,},
                col4: { id: 'val-08-4', checked: false, indet: false,},
            },
            {
                module: 'ИНН',
                alll: { id: 'val-09-0', checked: false, indet: false,},
                col1: { id: 'val-09-1', checked: false, indet: false,},
                col2: { id: 'val-09-2', checked: false, indet: false,},
                col3: { id: 'val-09-3', checked: false, indet: false,},
                col4: { id: 'val-09-4', checked: false, indet: false,},
            },
            {
                module: 'Данные медицинского полиса',
                alll: { id: 'val-10-0', checked: false, indet: false,},
                col1: { id: 'val-10-1', checked: false, indet: false,},
                col2: { id: 'val-10-2', checked: false, indet: false,},
                col3: { id: 'val-10-3', checked: false, indet: false,},
                col4: { id: 'val-10-4', checked: false, indet: false,},
            },
            {
                module: 'Страховое свидетельство',
                alll: { id: 'val-11-0', checked: false, indet: false,},
                col1: { id: 'val-11-1', checked: false, indet: false,},
                col2: { id: 'val-11-2', checked: false, indet: false,},
                col3: { id: 'val-11-3', checked: false, indet: false,},
                col4: { id: 'val-11-4', checked: false, indet: false,},
            },
            {
                module: 'Специальные персональные данные',
                alll: { id: 'val-12-0', checked: false, indet: false,},
                col1: { id: 'val-12-1', checked: false, indet: false,},
                col2: { id: 'val-12-2', checked: false, indet: false,},
                col3: { id: 'val-12-3', checked: false, indet: false,},
                col4: { id: 'val-12-4', checked: false, indet: false,},
            },
            {
                module: 'Биометрические персональные данные',
                alll: { id: 'val-13-0', checked: false, indet: false,},
                col1: { id: 'val-13-1', checked: false, indet: false,},
                col2: { id: 'val-13-2', checked: false, indet: false,},
                col3: { id: 'val-13-3', checked: false, indet: false,},
                col4: { id: 'val-13-4', checked: false, indet: false,},
            },
        ],

        // q4Items: this.q4Items_0,

        q5select: [],                                                                   // 5

                                                                                     // 6
        q6Selected: [],
        q6Items: [
            {
                module: 'Сбор',
                alll: { id: 'val-01-0', checked: false, indet: false,},
                col1: { id: 'val-01-1', checked: false, indet: false,},
                col2: { id: 'val-01-2', checked: false, indet: false,},
                col3: { id: 'val-01-3', checked: false, indet: false,},
                col4: { id: 'val-01-4', checked: false, indet: false,},
            },
            {
                module: 'Запись',
                alll: { id: 'val-02-0', checked: false, indet: false,},
                col1: { id: 'val-02-1', checked: false, indet: false,},
                col2: { id: 'val-02-2', checked: false, indet: false,},
                col3: { id: 'val-02-3', checked: false, indet: false,},
                col4: { id: 'val-02-4', checked: false, indet: false,},
            },
            {
                module: 'Систематизация',
                alll: { id: 'val-03-0', checked: false, indet: false,},
                col1: { id: 'val-03-1', checked: false, indet: false,},
                col2: { id: 'val-03-2', checked: false, indet: false,},
                col3: { id: 'val-03-3', checked: false, indet: false,},
                col4: { id: 'val-03-4', checked: false, indet: false,},
            },
            {
                module: 'Накопление',
                alll: { id: 'val-04-0', checked: false, indet: false,},
                col1: { id: 'val-04-1', checked: false, indet: false,},
                col2: { id: 'val-04-2', checked: false, indet: false,},
                col3: { id: 'val-04-3', checked: false, indet: false,},
                col4: { id: 'val-04-4', checked: false, indet: false,},
            },
            {
                module: 'Хранение',
                alll: { id: 'val-05-0', checked: false, indet: false,},
                col1: { id: 'val-05-1', checked: false, indet: false,},
                col2: { id: 'val-05-2', checked: false, indet: false,},
                col3: { id: 'val-05-3', checked: false, indet: false,},
                col4: { id: 'val-05-4', checked: false, indet: false,},
            },

            {
                module: 'Уточнение (обновление, изменение)',
                alll: { id: 'val-06-0', checked: false, indet: false,},
                col1: { id: 'val-06-1', checked: false, indet: false,},
                col2: { id: 'val-06-2', checked: false, indet: false,},
                col3: { id: 'val-06-3', checked: false, indet: false,},
                col4: { id: 'val-06-4', checked: false, indet: false,},
            },
            {
                module: 'Извлечение',
                alll: { id: 'val-07-0', checked: false, indet: false,},
                col1: { id: 'val-07-1', checked: false, indet: false,},
                col2: { id: 'val-07-2', checked: false, indet: false,},
                col3: { id: 'val-07-3', checked: false, indet: false,},
                col4: { id: 'val-07-4', checked: false, indet: false,},
            },
            {
                module: 'Передача (предоставление, доступ)',
                alll: { id: 'val-08-0', checked: false, indet: false,},
                col1: { id: 'val-08-1', checked: false, indet: false,},
                col2: { id: 'val-08-2', checked: false, indet: false,},
                col3: { id: 'val-08-3', checked: false, indet: false,},
                col4: { id: 'val-08-4', checked: false, indet: false,},
            },
            {
                module: 'Распространение',
                alll: { id: 'val-09-0', checked: false, indet: false,},
                col1: { id: 'val-09-1', checked: false, indet: false,},
                col2: { id: 'val-09-2', checked: false, indet: false,},
                col3: { id: 'val-09-3', checked: false, indet: false,},
                col4: { id: 'val-09-4', checked: false, indet: false,},
            },
            {
                module: 'Обезличивание',
                alll: { id: 'val-10-0', checked: false, indet: false,},
                col1: { id: 'val-10-1', checked: false, indet: false,},
                col2: { id: 'val-10-2', checked: false, indet: false,},
                col3: { id: 'val-10-3', checked: false, indet: false,},
                col4: { id: 'val-10-4', checked: false, indet: false,},
            },
            {
                module: 'Блокирование',
                alll: { id: 'val-11-0', checked: false, indet: false,},
                col1: { id: 'val-11-1', checked: false, indet: false,},
                col2: { id: 'val-11-2', checked: false, indet: false,},
                col3: { id: 'val-11-3', checked: false, indet: false,},
                col4: { id: 'val-11-4', checked: false, indet: false,},
            },
            {
                module: 'Удаление (уничтожение)',
                alll: { id: 'val-12-0', checked: false, indet: false,},
                col1: { id: 'val-12-1', checked: false, indet: false,},
                col2: { id: 'val-12-2', checked: false, indet: false,},
                col3: { id: 'val-12-3', checked: false, indet: false,},
                col4: { id: 'val-12-4', checked: false, indet: false,},
            },
        ],

        q7select: [],                                                                   // 7
        q9select: [],                                                                   // 9
                                                                                        // 10
        q10items: [
            { text: '' },  // fio
            { text: ''} ,  // phone
            { text: '' },  // address
            { text: '' },  // eemail
        ],

    },
    mutations: {
        clearStore  (state) {
            state.q1select = [];      // 0
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

                        //4
            state.q4Items = [
                {
                    module: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки',
                    alll: { id: 'val-01-0', checked: false, indet: false,},
                    col1: { id: 'val-01-1', checked: false, indet: false,},
                    col2: { id: 'val-01-2', checked: false, indet: false,},
                    col3: { id: 'val-01-3', checked: false, indet: false,},
                    col4: { id: 'val-01-4', checked: false, indet: false,},
                },
                {
                    module: 'Паспортные данные',
                    alll: { id: 'val-02-0', checked: false, indet: false,},
                    col1: { id: 'val-02-1', checked: false, indet: false,},
                    col2: { id: 'val-02-2', checked: false, indet: false,},
                    col3: { id: 'val-02-3', checked: false, indet: false,},
                    col4: { id: 'val-02-4', checked: false, indet: false,},
                },
                {
                    module: 'Семейное положение',
                    alll: { id: 'val-03-0', checked: false, indet: false,},
                    col1: { id: 'val-03-1', checked: false, indet: false,},
                    col2: { id: 'val-03-2', checked: false, indet: false,},
                    col3: { id: 'val-03-3', checked: false, indet: false,},
                    col4: { id: 'val-03-4', checked: false, indet: false,},
                },
                {
                    module: 'Социальное положение',
                    alll: { id: 'val-04-0', checked: false, indet: false,},
                    col1: { id: 'val-04-1', checked: false, indet: false,},
                    col2: { id: 'val-04-2', checked: false, indet: false,},
                    col3: { id: 'val-04-3', checked: false, indet: false,},
                    col4: { id: 'val-04-4', checked: false, indet: false,},
                },
                {
                    module: 'Имущественное положение',
                    alll: { id: 'val-05-0', checked: false, indet: false,},
                    col1: { id: 'val-05-1', checked: false, indet: false,},
                    col2: { id: 'val-05-2', checked: false, indet: false,},
                    col3: { id: 'val-05-3', checked: false, indet: false,},
                    col4: { id: 'val-05-4', checked: false, indet: false,},
                },

                {
                    module: 'Документы об образовании',
                    alll: { id: 'val-06-0', checked: false, indet: false,},
                    col1: { id: 'val-06-1', checked: false, indet: false,},
                    col2: { id: 'val-06-2', checked: false, indet: false,},
                    col3: { id: 'val-06-3', checked: false, indet: false,},
                    col4: { id: 'val-06-4', checked: false, indet: false,},
                },
                {
                    module: 'Профессия',
                    alll: { id: 'val-07-0', checked: false, indet: false,},
                    col1: { id: 'val-07-1', checked: false, indet: false,},
                    col2: { id: 'val-07-2', checked: false, indet: false,},
                    col3: { id: 'val-07-3', checked: false, indet: false,},
                    col4: { id: 'val-07-4', checked: false, indet: false,},
                },
                {
                    module: 'Сведения о доходах',
                    alll: { id: 'val-08-0', checked: false, indet: false,},
                    col1: { id: 'val-08-1', checked: false, indet: false,},
                    col2: { id: 'val-08-2', checked: false, indet: false,},
                    col3: { id: 'val-08-3', checked: false, indet: false,},
                    col4: { id: 'val-08-4', checked: false, indet: false,},
                },
                {
                    module: 'ИНН',
                    alll: { id: 'val-09-0', checked: false, indet: false,},
                    col1: { id: 'val-09-1', checked: false, indet: false,},
                    col2: { id: 'val-09-2', checked: false, indet: false,},
                    col3: { id: 'val-09-3', checked: false, indet: false,},
                    col4: { id: 'val-09-4', checked: false, indet: false,},
                },
                {
                    module: 'Данные медицинского полиса',
                    alll: { id: 'val-10-0', checked: false, indet: false,},
                    col1: { id: 'val-10-1', checked: false, indet: false,},
                    col2: { id: 'val-10-2', checked: false, indet: false,},
                    col3: { id: 'val-10-3', checked: false, indet: false,},
                    col4: { id: 'val-10-4', checked: false, indet: false,},
                },
                {
                    module: 'Страховое свидетельство',
                    alll: { id: 'val-11-0', checked: false, indet: false,},
                    col1: { id: 'val-11-1', checked: false, indet: false,},
                    col2: { id: 'val-11-2', checked: false, indet: false,},
                    col3: { id: 'val-11-3', checked: false, indet: false,},
                    col4: { id: 'val-11-4', checked: false, indet: false,},
                },
                {
                    module: 'Специальные персональные данные',
                    alll: { id: 'val-12-0', checked: false, indet: false,},
                    col1: { id: 'val-12-1', checked: false, indet: false,},
                    col2: { id: 'val-12-2', checked: false, indet: false,},
                    col3: { id: 'val-12-3', checked: false, indet: false,},
                    col4: { id: 'val-12-4', checked: false, indet: false,},
                },
                {
                    module: 'Биометрические персональные данные',
                    alll: { id: 'val-13-0', checked: false, indet: false,},
                    col1: { id: 'val-13-1', checked: false, indet: false,},
                    col2: { id: 'val-13-2', checked: false, indet: false,},
                    col3: { id: 'val-13-3', checked: false, indet: false,},
                    col4: { id: 'val-13-4', checked: false, indet: false,},
                },
            ];

            state.q4Selected = [];                                              // 4

            state.q5select = [];                                                // 5

                                                                                // 6
            state.q6Items= [
                {
                    module: 'Сбор',
                    alll: { id: 'val-01-0', checked: false, indet: false,},
                    col1: { id: 'val-01-1', checked: false, indet: false,},
                    col2: { id: 'val-01-2', checked: false, indet: false,},
                    col3: { id: 'val-01-3', checked: false, indet: false,},
                    col4: { id: 'val-01-4', checked: false, indet: false,},
                },
                {
                    module: 'Запись',
                    alll: { id: 'val-02-0', checked: false, indet: false,},
                    col1: { id: 'val-02-1', checked: false, indet: false,},
                    col2: { id: 'val-02-2', checked: false, indet: false,},
                    col3: { id: 'val-02-3', checked: false, indet: false,},
                    col4: { id: 'val-02-4', checked: false, indet: false,},
                },
                {
                    module: 'Систематизация',
                    alll: { id: 'val-03-0', checked: false, indet: false,},
                    col1: { id: 'val-03-1', checked: false, indet: false,},
                    col2: { id: 'val-03-2', checked: false, indet: false,},
                    col3: { id: 'val-03-3', checked: false, indet: false,},
                    col4: { id: 'val-03-4', checked: false, indet: false,},
                },
                {
                    module: 'Накопление',
                    alll: { id: 'val-04-0', checked: false, indet: false,},
                    col1: { id: 'val-04-1', checked: false, indet: false,},
                    col2: { id: 'val-04-2', checked: false, indet: false,},
                    col3: { id: 'val-04-3', checked: false, indet: false,},
                    col4: { id: 'val-04-4', checked: false, indet: false,},
                },
                {
                    module: 'Хранение',
                    alll: { id: 'val-05-0', checked: false, indet: false,},
                    col1: { id: 'val-05-1', checked: false, indet: false,},
                    col2: { id: 'val-05-2', checked: false, indet: false,},
                    col3: { id: 'val-05-3', checked: false, indet: false,},
                    col4: { id: 'val-05-4', checked: false, indet: false,},
                },

                {
                    module: 'Уточнение (обновление, изменение)',
                    alll: { id: 'val-06-0', checked: false, indet: false,},
                    col1: { id: 'val-06-1', checked: false, indet: false,},
                    col2: { id: 'val-06-2', checked: false, indet: false,},
                    col3: { id: 'val-06-3', checked: false, indet: false,},
                    col4: { id: 'val-06-4', checked: false, indet: false,},
                },
                {
                    module: 'Извлечение',
                    alll: { id: 'val-07-0', checked: false, indet: false,},
                    col1: { id: 'val-07-1', checked: false, indet: false,},
                    col2: { id: 'val-07-2', checked: false, indet: false,},
                    col3: { id: 'val-07-3', checked: false, indet: false,},
                    col4: { id: 'val-07-4', checked: false, indet: false,},
                },
                {
                    module: 'Передача (предоставление, доступ)',
                    alll: { id: 'val-08-0', checked: false, indet: false,},
                    col1: { id: 'val-08-1', checked: false, indet: false,},
                    col2: { id: 'val-08-2', checked: false, indet: false,},
                    col3: { id: 'val-08-3', checked: false, indet: false,},
                    col4: { id: 'val-08-4', checked: false, indet: false,},
                },
                {
                    module: 'Распространение',
                    alll: { id: 'val-09-0', checked: false, indet: false,},
                    col1: { id: 'val-09-1', checked: false, indet: false,},
                    col2: { id: 'val-09-2', checked: false, indet: false,},
                    col3: { id: 'val-09-3', checked: false, indet: false,},
                    col4: { id: 'val-09-4', checked: false, indet: false,},
                },
                {
                    module: 'Обезличивание',
                    alll: { id: 'val-10-0', checked: false, indet: false,},
                    col1: { id: 'val-10-1', checked: false, indet: false,},
                    col2: { id: 'val-10-2', checked: false, indet: false,},
                    col3: { id: 'val-10-3', checked: false, indet: false,},
                    col4: { id: 'val-10-4', checked: false, indet: false,},
                },
                {
                    module: 'Блокирование',
                    alll: { id: 'val-11-0', checked: false, indet: false,},
                    col1: { id: 'val-11-1', checked: false, indet: false,},
                    col2: { id: 'val-11-2', checked: false, indet: false,},
                    col3: { id: 'val-11-3', checked: false, indet: false,},
                    col4: { id: 'val-11-4', checked: false, indet: false,},
                },
                {
                    module: 'Удаление (уничтожение)',
                    alll: { id: 'val-12-0', checked: false, indet: false,},
                    col1: { id: 'val-12-1', checked: false, indet: false,},
                    col2: { id: 'val-12-2', checked: false, indet: false,},
                    col3: { id: 'val-12-3', checked: false, indet: false,},
                    col4: { id: 'val-12-4', checked: false, indet: false,},
                },
            ],

            state.q6Selected = [];                                              // 6

            state.q7select = [];                                                // 7
            state.q9select = [];                                                // 9
                                                                                // 10
            state.q10items = [
                { text: '' },  // fio
                { text: ''} ,  // phone
                { text: '' },  // address
                { text: '' },  // eemail
            ];
        },



        setq1select (state, value) { state.q1select = value; },                         // 0
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

        setQ4Items (state, {items, selected}) {                                                 // 4
            state.q4Items = items;
            state.q4Selected = selected;
        },

        setq5select (state, value) { state.q5select = value; },                                 // 5

        setQ6Items (state, {items, selected}) {                                                 // 6
            state.q6Items = items;
            state.q6Selected = selected;
        },

        setq7select (state, value) { state.q7select = value; },                                 // 7
        setq9select (state, value) { state.q9select = value; },                                 // 9
        setq10items (state, value) { state.q10items = value; },                                 // 10
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
