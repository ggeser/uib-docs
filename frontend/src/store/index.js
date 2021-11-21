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
        q0select:[],               // 0
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
                module: { name: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки', hidden: true, help: '', },
                alll: { id: 'val-01-0', checked: false, indet: false,},
                col1: { id: 'val-01-1', checked: false, indet: false,},
                col2: { id: 'val-01-2', checked: false, indet: false,},
                col3: { id: 'val-01-3', checked: false, indet: false,},
                col4: { id: 'val-01-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Паспортные данные', hidden: true, help: '', },
                alll: { id: 'val-02-0', checked: false, indet: false,},
                col1: { id: 'val-02-1', checked: false, indet: false,},
                col2: { id: 'val-02-2', checked: false, indet: false,},
                col3: { id: 'val-02-3', checked: false, indet: false,},
                col4: { id: 'val-02-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Семейное положение', hidden: true, help: '', },
                alll: { id: 'val-03-0', checked: false, indet: false,},
                col1: { id: 'val-03-1', checked: false, indet: false,},
                col2: { id: 'val-03-2', checked: false, indet: false,},
                col3: { id: 'val-03-3', checked: false, indet: false,},
                col4: { id: 'val-03-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Социальное положение', hidden: false, help: 'Налоговые льготы, выплачиваемые пособия, степендиии и т.д.', },
                alll: { id: 'val-04-0', checked: false, indet: false,},
                col1: { id: 'val-04-1', checked: false, indet: false,},
                col2: { id: 'val-04-2', checked: false, indet: false,},
                col3: { id: 'val-04-3', checked: false, indet: false,},
                col4: { id: 'val-04-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Имущественное положение', hidden: false, help: 'Наличие недвижимости, ТС и прочее', },
                alll: { id: 'val-05-0', checked: false, indet: false,},
                col1: { id: 'val-05-1', checked: false, indet: false,},
                col2: { id: 'val-05-2', checked: false, indet: false,},
                col3: { id: 'val-05-3', checked: false, indet: false,},
                col4: { id: 'val-05-4', checked: false, indet: false,},
            },

            {
                module: { name: 'Документы об образовании', hidden: true, help: '', },
                alll: { id: 'val-06-0', checked: false, indet: false,},
                col1: { id: 'val-06-1', checked: false, indet: false,},
                col2: { id: 'val-06-2', checked: false, indet: false,},
                col3: { id: 'val-06-3', checked: false, indet: false,},
                col4: { id: 'val-06-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Профессия', hidden: true, help: '', },
                alll: { id: 'val-07-0', checked: false, indet: false,},
                col1: { id: 'val-07-1', checked: false, indet: false,},
                col2: { id: 'val-07-2', checked: false, indet: false,},
                col3: { id: 'val-07-3', checked: false, indet: false,},
                col4: { id: 'val-07-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Сведения о доходах', hidden: false, help: 'Справка 2 НДФЛ', },
                alll: { id: 'val-08-0', checked: false, indet: false,},
                col1: { id: 'val-08-1', checked: false, indet: false,},
                col2: { id: 'val-08-2', checked: false, indet: false,},
                col3: { id: 'val-08-3', checked: false, indet: false,},
                col4: { id: 'val-08-4', checked: false, indet: false,},
            },
            {
                module: { name: 'ИНН', hidden: true, help: '', },
                alll: { id: 'val-09-0', checked: false, indet: false,},
                col1: { id: 'val-09-1', checked: false, indet: false,},
                col2: { id: 'val-09-2', checked: false, indet: false,},
                col3: { id: 'val-09-3', checked: false, indet: false,},
                col4: { id: 'val-09-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Данные медицинского полиса', hidden: true, help: '', },
                alll: { id: 'val-10-0', checked: false, indet: false,},
                col1: { id: 'val-10-1', checked: false, indet: false,},
                col2: { id: 'val-10-2', checked: false, indet: false,},
                col3: { id: 'val-10-3', checked: false, indet: false,},
                col4: { id: 'val-10-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Страховое свидетельство', hidden: true, help: '', },
                alll: { id: 'val-11-0', checked: false, indet: false,},
                col1: { id: 'val-11-1', checked: false, indet: false,},
                col2: { id: 'val-11-2', checked: false, indet: false,},
                col3: { id: 'val-11-3', checked: false, indet: false,},
                col4: { id: 'val-11-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Специальные персональные данные', hidden: false, help: 'Это данные о состоянии здоровья, рассовая принадлежность, политические и религиозные взгляды. Данные по которым можно составить представление о человеке', },
                alll: { id: 'val-12-0', checked: false, indet: false,},
                col1: { id: 'val-12-1', checked: false, indet: false,},
                col2: { id: 'val-12-2', checked: false, indet: false,},
                col3: { id: 'val-12-3', checked: false, indet: false,},
                col4: { id: 'val-12-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Биометрические персональные данные', hidden: true, help: '', },
                alll: { id: 'val-13-0', checked: false, indet: false,},
                col1: { id: 'val-13-1', checked: false, indet: false,},
                col2: { id: 'val-13-2', checked: false, indet: false,},
                col3: { id: 'val-13-3', checked: false, indet: false,},
                col4: { id: 'val-13-4', checked: false, indet: false,},
            },
        ],



        q5select: [],                                                                // 5

                                                                                     // 6
        q6Selected: [],
        q6Items: [
            {
                module: { name: 'Сбор', hidden: false, help: 'Любой факт передачи данных от субъекта персональных данных передающихся компании', },
                alll: { id: 'val-01-0', checked: false, indet: false,},
                col1: { id: 'val-01-1', checked: false, indet: false,},
                col2: { id: 'val-01-2', checked: false, indet: false,},
                col3: { id: 'val-01-3', checked: false, indet: false,},
                col4: { id: 'val-01-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Запись', hidden: false, help: 'Внесение персональных данных в Информационную Систему компании', },
                alll: { id: 'val-02-0', checked: false, indet: false,},
                col1: { id: 'val-02-1', checked: false, indet: false,},
                col2: { id: 'val-02-2', checked: false, indet: false,},
                col3: { id: 'val-02-3', checked: false, indet: false,},
                col4: { id: 'val-02-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Систематизация', hidden: false, help: 'Действия, направленные на объединение и расположение персональных данных в определенной последовательности', },
                alll: { id: 'val-03-0', checked: false, indet: false,},
                col1: { id: 'val-03-1', checked: false, indet: false,},
                col2: { id: 'val-03-2', checked: false, indet: false,},
                col3: { id: 'val-03-3', checked: false, indet: false,},
                col4: { id: 'val-03-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Накопление', hidden: false, help: 'Действия по систематизации персональных данных путем их внесения в базу, содержащую персональные данные', },
                alll: { id: 'val-04-0', checked: false, indet: false,},
                col1: { id: 'val-04-1', checked: false, indet: false,},
                col2: { id: 'val-04-2', checked: false, indet: false,},
                col3: { id: 'val-04-3', checked: false, indet: false,},
                col4: { id: 'val-04-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Хранение', hidden: false, help: 'Действия по обеспечению целостности, конфиденциальности и доступности персональных данных', },
                alll: { id: 'val-05-0', checked: false, indet: false,},
                col1: { id: 'val-05-1', checked: false, indet: false,},
                col2: { id: 'val-05-2', checked: false, indet: false,},
                col3: { id: 'val-05-3', checked: false, indet: false,},
                col4: { id: 'val-05-4', checked: false, indet: false,},
            },

            {
                module: { name: 'Уточнение (обновление, изменение)', hidden: false, help: 'Внесение изменений персональных данных', },
                alll: { id: 'val-06-0', checked: false, indet: false,},
                col1: { id: 'val-06-1', checked: false, indet: false,},
                col2: { id: 'val-06-2', checked: false, indet: false,},
                col3: { id: 'val-06-3', checked: false, indet: false,},
                col4: { id: 'val-06-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Извлечение', hidden: false, help: 'Изъятие из Информационной системы персональных данных', },
                alll: { id: 'val-07-0', checked: false, indet: false,},
                col1: { id: 'val-07-1', checked: false, indet: false,},
                col2: { id: 'val-07-2', checked: false, indet: false,},
                col3: { id: 'val-07-3', checked: false, indet: false,},
                col4: { id: 'val-07-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Передача (предоставление, доступ)', hidden: false, help: 'Предоставление данных организациями с которыми взаимодействуете для исполнения обязательств перед субъектом персональных данных(оказание услуги, выплата зарплаты и т. д.)\n', },
                alll: { id: 'val-08-0', checked: false, indet: false,},
                col1: { id: 'val-08-1', checked: false, indet: false,},
                col2: { id: 'val-08-2', checked: false, indet: false,},
                col3: { id: 'val-08-3', checked: false, indet: false,},
                col4: { id: 'val-08-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Распространение', hidden: false, help: 'Предоставление данных неопределенному кругу лиц', },
                alll: { id: 'val-09-0', checked: false, indet: false,},
                col1: { id: 'val-09-1', checked: false, indet: false,},
                col2: { id: 'val-09-2', checked: false, indet: false,},
                col3: { id: 'val-09-3', checked: false, indet: false,},
                col4: { id: 'val-09-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Обезличивание', hidden: false, help: 'Представляют собой действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту персональных данных', },
                alll: { id: 'val-10-0', checked: false, indet: false,},
                col1: { id: 'val-10-1', checked: false, indet: false,},
                col2: { id: 'val-10-2', checked: false, indet: false,},
                col3: { id: 'val-10-3', checked: false, indet: false,},
                col4: { id: 'val-10-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Блокирование', hidden: false, help: 'Временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных)', },
                alll: { id: 'val-11-0', checked: false, indet: false,},
                col1: { id: 'val-11-1', checked: false, indet: false,},
                col2: { id: 'val-11-2', checked: false, indet: false,},
                col3: { id: 'val-11-3', checked: false, indet: false,},
                col4: { id: 'val-11-4', checked: false, indet: false,},
            },
            {
                module: { name: 'Удаление (уничтожение)', hidden: false, help: 'Действия, в результате которых невозможно восстановить содержание персональных данных в информационной системе персональных данных или в результате которых уничтожаются материальные носители персональных данных', },
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

        trans:[],                                                                       // 11

        q12nextTodoId: 1,                                                               // 12
        q12items: [{
            id: "0",
            address: '',
            zod: null,
            options: [
                { text: 'Да',    value: 'val0' },
                { text: 'Нет',   value: 'val1' },
            ],
        }],

        q13nextTodoId: 1,                                                                // 13
        q13items: [{
            id: "0",
            name: '',
            zod: null,
            options: [
                { text: 'Да',    value: 'val1' },
                { text: 'Нет',   value: 'val2' },
            ],
        }],

    },
    mutations: {
        clearStore  (state) {
            state.q0select = [];      // 0
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
                    module: { name: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки', hidden: true, help: '', },
                    alll: { id: 'val-01-0', checked: false, indet: false,},
                    col1: { id: 'val-01-1', checked: false, indet: false,},
                    col2: { id: 'val-01-2', checked: false, indet: false,},
                    col3: { id: 'val-01-3', checked: false, indet: false,},
                    col4: { id: 'val-01-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Паспортные данные', hidden: true, help: '', },
                    alll: { id: 'val-02-0', checked: false, indet: false,},
                    col1: { id: 'val-02-1', checked: false, indet: false,},
                    col2: { id: 'val-02-2', checked: false, indet: false,},
                    col3: { id: 'val-02-3', checked: false, indet: false,},
                    col4: { id: 'val-02-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Семейное положение', hidden: true, help: '', },
                    alll: { id: 'val-03-0', checked: false, indet: false,},
                    col1: { id: 'val-03-1', checked: false, indet: false,},
                    col2: { id: 'val-03-2', checked: false, indet: false,},
                    col3: { id: 'val-03-3', checked: false, indet: false,},
                    col4: { id: 'val-03-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Социальное положение', hidden: false, help: 'Налоговые льготы, выплачиваемые пособия, степендиии и т.д.', },
                    alll: { id: 'val-04-0', checked: false, indet: false,},
                    col1: { id: 'val-04-1', checked: false, indet: false,},
                    col2: { id: 'val-04-2', checked: false, indet: false,},
                    col3: { id: 'val-04-3', checked: false, indet: false,},
                    col4: { id: 'val-04-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Имущественное положение', hidden: false, help: 'Наличие недвижимости, ТС и прочее', },
                    alll: { id: 'val-05-0', checked: false, indet: false,},
                    col1: { id: 'val-05-1', checked: false, indet: false,},
                    col2: { id: 'val-05-2', checked: false, indet: false,},
                    col3: { id: 'val-05-3', checked: false, indet: false,},
                    col4: { id: 'val-05-4', checked: false, indet: false,},
                },

                {
                    module: { name: 'Документы об образовании', hidden: true, help: '', },
                    alll: { id: 'val-06-0', checked: false, indet: false,},
                    col1: { id: 'val-06-1', checked: false, indet: false,},
                    col2: { id: 'val-06-2', checked: false, indet: false,},
                    col3: { id: 'val-06-3', checked: false, indet: false,},
                    col4: { id: 'val-06-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Профессия', hidden: true, help: '', },
                    alll: { id: 'val-07-0', checked: false, indet: false,},
                    col1: { id: 'val-07-1', checked: false, indet: false,},
                    col2: { id: 'val-07-2', checked: false, indet: false,},
                    col3: { id: 'val-07-3', checked: false, indet: false,},
                    col4: { id: 'val-07-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Сведения о доходах', hidden: false, help: 'Справка 2 НДФЛ', },
                    alll: { id: 'val-08-0', checked: false, indet: false,},
                    col1: { id: 'val-08-1', checked: false, indet: false,},
                    col2: { id: 'val-08-2', checked: false, indet: false,},
                    col3: { id: 'val-08-3', checked: false, indet: false,},
                    col4: { id: 'val-08-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'ИНН', hidden: true, help: '', },
                    alll: { id: 'val-09-0', checked: false, indet: false,},
                    col1: { id: 'val-09-1', checked: false, indet: false,},
                    col2: { id: 'val-09-2', checked: false, indet: false,},
                    col3: { id: 'val-09-3', checked: false, indet: false,},
                    col4: { id: 'val-09-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Данные медицинского полиса', hidden: true, help: '', },
                    alll: { id: 'val-10-0', checked: false, indet: false,},
                    col1: { id: 'val-10-1', checked: false, indet: false,},
                    col2: { id: 'val-10-2', checked: false, indet: false,},
                    col3: { id: 'val-10-3', checked: false, indet: false,},
                    col4: { id: 'val-10-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Страховое свидетельство', hidden: true, help: '', },
                    alll: { id: 'val-11-0', checked: false, indet: false,},
                    col1: { id: 'val-11-1', checked: false, indet: false,},
                    col2: { id: 'val-11-2', checked: false, indet: false,},
                    col3: { id: 'val-11-3', checked: false, indet: false,},
                    col4: { id: 'val-11-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Специальные персональные данные', hidden: false, help: 'Это данные о состоянии здоровья, рассовая принадлежность, политические и религиозные взгляды. Данные по которым можно составить представление о человеке', },
                    alll: { id: 'val-12-0', checked: false, indet: false,},
                    col1: { id: 'val-12-1', checked: false, indet: false,},
                    col2: { id: 'val-12-2', checked: false, indet: false,},
                    col3: { id: 'val-12-3', checked: false, indet: false,},
                    col4: { id: 'val-12-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Биометрические персональные данные', hidden: true, help: '', },
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
                    module: { name: 'Сбор', hidden: false, help: 'Любой факт передачи данных от субъекта персональных данных передающихся компании', },
                    alll: { id: 'val-01-0', checked: false, indet: false,},
                    col1: { id: 'val-01-1', checked: false, indet: false,},
                    col2: { id: 'val-01-2', checked: false, indet: false,},
                    col3: { id: 'val-01-3', checked: false, indet: false,},
                    col4: { id: 'val-01-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Запись', hidden: false, help: 'Внесение персональных данных в Информационную Систему компании', },
                    alll: { id: 'val-02-0', checked: false, indet: false,},
                    col1: { id: 'val-02-1', checked: false, indet: false,},
                    col2: { id: 'val-02-2', checked: false, indet: false,},
                    col3: { id: 'val-02-3', checked: false, indet: false,},
                    col4: { id: 'val-02-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Систематизация', hidden: false, help: 'Действия, направленные на объединение и расположение персональных данных в определенной последовательности', },
                    alll: { id: 'val-03-0', checked: false, indet: false,},
                    col1: { id: 'val-03-1', checked: false, indet: false,},
                    col2: { id: 'val-03-2', checked: false, indet: false,},
                    col3: { id: 'val-03-3', checked: false, indet: false,},
                    col4: { id: 'val-03-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Накопление', hidden: false, help: 'Действия по систематизации персональных данных путем их внесения в базу, содержащую персональные данные', },
                    alll: { id: 'val-04-0', checked: false, indet: false,},
                    col1: { id: 'val-04-1', checked: false, indet: false,},
                    col2: { id: 'val-04-2', checked: false, indet: false,},
                    col3: { id: 'val-04-3', checked: false, indet: false,},
                    col4: { id: 'val-04-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Хранение', hidden: false, help: 'Действия по обеспечению целостности, конфиденциальности и доступности персональных данных', },
                    alll: { id: 'val-05-0', checked: false, indet: false,},
                    col1: { id: 'val-05-1', checked: false, indet: false,},
                    col2: { id: 'val-05-2', checked: false, indet: false,},
                    col3: { id: 'val-05-3', checked: false, indet: false,},
                    col4: { id: 'val-05-4', checked: false, indet: false,},
                },

                {
                    module: { name: 'Уточнение (обновление, изменение)', hidden: false, help: 'Внесение изменений персональных данных', },
                    alll: { id: 'val-06-0', checked: false, indet: false,},
                    col1: { id: 'val-06-1', checked: false, indet: false,},
                    col2: { id: 'val-06-2', checked: false, indet: false,},
                    col3: { id: 'val-06-3', checked: false, indet: false,},
                    col4: { id: 'val-06-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Извлечение', hidden: false, help: 'Изъятие из Информационной системы персональных данных', },
                    alll: { id: 'val-07-0', checked: false, indet: false,},
                    col1: { id: 'val-07-1', checked: false, indet: false,},
                    col2: { id: 'val-07-2', checked: false, indet: false,},
                    col3: { id: 'val-07-3', checked: false, indet: false,},
                    col4: { id: 'val-07-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Передача (предоставление, доступ)', hidden: false, help: 'Предоставление данных организациями с которыми взаимодействуете для исполнения обязательств перед субъектом персональных данных(оказание услуги, выплата зарплаты и т. д.)\n', },
                    alll: { id: 'val-08-0', checked: false, indet: false,},
                    col1: { id: 'val-08-1', checked: false, indet: false,},
                    col2: { id: 'val-08-2', checked: false, indet: false,},
                    col3: { id: 'val-08-3', checked: false, indet: false,},
                    col4: { id: 'val-08-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Распространение', hidden: false, help: 'Предоставление данных неопределенному кругу лиц', },
                    alll: { id: 'val-09-0', checked: false, indet: false,},
                    col1: { id: 'val-09-1', checked: false, indet: false,},
                    col2: { id: 'val-09-2', checked: false, indet: false,},
                    col3: { id: 'val-09-3', checked: false, indet: false,},
                    col4: { id: 'val-09-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Обезличивание', hidden: false, help: 'Представляют собой действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту персональных данных', },
                    alll: { id: 'val-10-0', checked: false, indet: false,},
                    col1: { id: 'val-10-1', checked: false, indet: false,},
                    col2: { id: 'val-10-2', checked: false, indet: false,},
                    col3: { id: 'val-10-3', checked: false, indet: false,},
                    col4: { id: 'val-10-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Блокирование', hidden: false, help: 'Временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных)', },
                    alll: { id: 'val-11-0', checked: false, indet: false,},
                    col1: { id: 'val-11-1', checked: false, indet: false,},
                    col2: { id: 'val-11-2', checked: false, indet: false,},
                    col3: { id: 'val-11-3', checked: false, indet: false,},
                    col4: { id: 'val-11-4', checked: false, indet: false,},
                },
                {
                    module: { name: 'Удаление (уничтожение)', hidden: false, help: 'Действия, в результате которых невозможно восстановить содержание персональных данных в информационной системе персональных данных или в результате которых уничтожаются материальные носители персональных данных', },
                    alll: { id: 'val-12-0', checked: false, indet: false,},
                    col1: { id: 'val-12-1', checked: false, indet: false,},
                    col2: { id: 'val-12-2', checked: false, indet: false,},
                    col3: { id: 'val-12-3', checked: false, indet: false,},
                    col4: { id: 'val-12-4', checked: false, indet: false,},
                },
            ];

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

            state.trans = [];                                                   // 11

            state.q12nextTodoId= 1;                                             // 12
            state.q12items= [{
                id: "0",
                address: '',
                zod: null,
                options: [
                    { text: 'Да',    value: 'val0' },
                    { text: 'Нет',   value: 'val1' },
                ],
            }];


            state.q13nextTodoId= 1;                                              // 13                                                                 // 13
            state.q13items = [{
                id: "0",
                name: '',
                zod: null,
                options: [
                    { text: 'Да',    value: 'val1' },
                    { text: 'Нет',   value: 'val2' },
                ],
            }];
        },



        setq0select (state, value) { state.q0select = value; },                         // 0
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
        setTrans (state, value) { state.trans = value; },                                       // 11
        setq12nextTodoId (state, value) { state.q12nextTodoId = value; },                       // 12
        setq12items (state, value) { state.q12items = value; },                                 // 12
        setq13items (state, value) { state.q13items = value; },                                 // 13
        setq13nextTodoId (state, value) { state.q13nextTodoId = value; },                       // 13

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
