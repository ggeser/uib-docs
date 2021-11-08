<template>
    <b-row>
        <b-col
            cols="12"
            class="mb-2"
        >
            <h5 class="mb-0">
                Категории обрабатываемых персональных данных.
            </h5>
            <small class="text-muted">Выберите необходимые категории.</small>
        </b-col>

        <b-col
            cols="12"
            class="mb-2"
        >

            <b-form>
<!--                <div class="margin-window">-->
                <div>
                    <validation-provider
                        #default="{ errors }"
                        name="First Name"
                        rules="required"
                    >

                        <b-table
                            striped
                            responsive
                            :fields="fields"
                            :items="items"
                            class="mytable"
                            fixed="false"
                        >
                            <!-- A virtual column -->
<!--                            <template #cell(index)="data">-->
<!--                                {{ data.index + 1 }}-->
<!--                            </template>-->

                            <template #cell(module)="data">
<!--                                <span class="text-nowrap">-->
<!--                                <span class="myclass3">-->
                                    {{ data.value }}
<!--                                 </span>-->
                            </template>
                            <template #cell()="data">
                                <b-form-checkbox
                                    v-model="data.value.checked"
                                    :value="data.value.id"
                                    :id="data.value.id"
                                    :ref="data.value.id"
                                    :checked="data.value.checked"
                                    :indeterminate="indeterminate"
                                    @change=switchCheckbox(data.value.id)
                                />
                            </template>
                        </b-table>

                        <b-form-checkbox
                            v-model="chk1"
                            :value="test"
                            :indeterminate="indeterminate"
                        />
<!--                        <b-form-checkbox-->
<!--                            v-model="chk2"-->
<!--                            :value="test"-->
<!--                            :checked=checked(1)-->
<!--                            :indeterminate="indeterminate"-->
<!--                        />-->

                        <b-button
                            variant="primary"
                            type="submit"
                            @click="mycheck"
                        >
                            mycheck
                        </b-button>

                        <validation-provider
                            name="Краткое название"
                            rules="required"
                        >
                            <div v-if="true">

                                <!--                            type="hidden"-->
                                <input

                                    id="short-name"
                                    v-model="selected"
                                />
                            </div>
                        </validation-provider>


                        <div v-if="(selected.length >= 1) || ( errors[0]  == null) ">
                            <br>
                        </div>
                        <div v-else>
                            <small class="text-danger">
                                Пожалуйста выберите один пункт или больше
                            </small>
                        </div>
                    </validation-provider>
                </div>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import Cleave from 'vue-cleave-component'
import vSelect from 'vue-select'
import {ValidationProvider, ValidationObserver, localize} from 'vee-validate'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BFormCheckboxGroup, BFormValidFeedback, BFormCheckbox, BTable,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import router from "@/router";
import useUsersList from "@/views/apps/user/users-list/useUsersList";
import {ref} from "@vue/composition-api";
import {useInputImageRenderer} from "@core/comp-functions/forms/form-utils";
import {avatarText} from "@core/utils/filter";


// export const validatorPositive = value => {
//     if (value >= 0) {
//         return true
//     }
//     return false
// }
//
// export const positive = extend('positive', {
//     validate: validatorPositive,
//     message: 'Please enter positive number!',
// })



export default {

    components: {
        ValidationProvider,
        ValidationObserver,
        FormWizard,
        TabContent,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        vSelect,
        Cleave,
        BFormInvalidFeedback,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,
        BFormCheckboxGroup, BFormValidFeedback, BFormCheckbox, BTable,
    },
    setup() {
        const fields = [

            // { key: 'index', label: '№' } ,// A virtual column that doesn't exist in items
            { key: 'module', label: 'Модуль' },
            { key: 'alll', label: 'V' },
            { key: 'col1', label: 'Согласие на обработку персональных данных клиента' },
            { key: 'col2', label: 'Согласие на обработку персональных данных работника' },
            { key: 'col3', label: 'Согласие на распространение персональных данных клиента' },
            { key: 'col4', label: 'Согласие на распространение персональных данных работника' },
        ]

        const items = [
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
        ]

        return {
            items,
            fields,
        }
    },
    data() {
        return {
            chk1: true,
            chk2: "",

            // fields: [
            //
            //     // { key: 'index', label: '№' } ,// A virtual column that doesn't exist in items
            //     { key: 'module', label: 'Модуль' },
            //     { key: 'alll', label: 'V' },
            //     { key: 'col1', label: 'Согласие на обработку персональных данных клиента' },
            //     { key: 'col2', label: 'Согласие на обработку персональных данных работника' },
            //     { key: 'col3', label: 'Согласие на распространение персональных данных клиента' },
            //     { key: 'col4', label: 'Согласие на распространение персональных данных работника' },
            // ],
            //
            // items : [
            //     {
            //         module: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки',
            //         alll: { id: 'val-01-0', checked: false },
            //         col1: { id: 'val-01-1', checked: false },
            //         col2: { id: 'val-01-2', checked: false },
            //         col3: { id: 'val-01-3', checked: false },
            //         col4: { id: 'val-01-4', checked: false },
            //     },
            //     {
            //         module: 'Паспортные данные',
            //         alll: { id: 'val-02-0', checked: false },
            //         col1: { id: 'val-02-1', checked: false },
            //         col2: { id: 'val-02-2', checked: false },
            //         col3: { id: 'val-02-3', checked: false },
            //         col4: { id: 'val-02-4', checked: false },
            //     },
            //     {
            //         module: 'Семейное положение',
            //         alll: { id: 'val-03-0', checked: false },
            //         col1: { id: 'val-03-1', checked: false },
            //         col2: { id: 'val-03-2', checked: false },
            //         col3: { id: 'val-03-3', checked: false },
            //         col4: { id: 'val-03-4', checked: false },
            //     },
            //     {
            //         module: 'Социальное положение',
            //         alll: { id: 'val-04-0', checked: false },
            //         col1: { id: 'val-04-1', checked: false },
            //         col2: { id: 'val-04-2', checked: false },
            //         col3: { id: 'val-04-3', checked: false },
            //         col4: { id: 'val-04-4', checked: false },
            //     },
            //     {
            //         module: 'Имущественное положение',
            //         alll: { id: 'val-05-0', checked: false },
            //         col1: { id: 'val-05-1', checked: false },
            //         col2: { id: 'val-05-2', checked: false },
            //         col3: { id: 'val-05-3', checked: false },
            //         col4: { id: 'val-05-4', checked: false },
            //     },
            //
            //     {
            //         module: 'Документы об образовании',
            //         alll: { id: 'val-06-0', checked: false },
            //         col1: { id: 'val-06-1', checked: false },
            //         col2: { id: 'val-06-2', checked: false },
            //         col3: { id: 'val-06-3', checked: false },
            //         col4: { id: 'val-06-4', checked: false },
            //     },
            //     {
            //         module: 'Профессия',
            //         alll: { id: 'val-07-0', checked: false },
            //         col1: { id: 'val-07-1', checked: false },
            //         col2: { id: 'val-07-2', checked: false },
            //         col3: { id: 'val-07-3', checked: false },
            //         col4: { id: 'val-07-4', checked: false },
            //     },
            //     {
            //         module: 'Сведения о доходах',
            //         alll: { id: 'val-08-0', checked: false },
            //         col1: { id: 'val-08-1', checked: false },
            //         col2: { id: 'val-08-2', checked: false },
            //         col3: { id: 'val-08-3', checked: false },
            //         col4: { id: 'val-08-4', checked: false },
            //     },
            //     {
            //         module: 'ИНН',
            //         alll: { id: 'val-09-0', checked: false },
            //         col1: { id: 'val-09-1', checked: false },
            //         col2: { id: 'val-09-2', checked: false },
            //         col3: { id: 'val-09-3', checked: false },
            //         col4: { id: 'val-09-4', checked: false },
            //     },
            //     {
            //         module: 'Данные медицинского полиса',
            //         alll: { id: 'val-10-0', checked: false },
            //         col1: { id: 'val-10-1', checked: false },
            //         col2: { id: 'val-10-2', checked: false },
            //         col3: { id: 'val-10-3', checked: false },
            //         col4: { id: 'val-10-4', checked: false },
            //     },
            //     {
            //         module: 'Страховое свидетельство',
            //         alll: { id: 'val-11-0', checked: false },
            //         col1: { id: 'val-11-1', checked: false },
            //         col2: { id: 'val-11-2', checked: false },
            //         col3: { id: 'val-11-3', checked: false },
            //         col4: { id: 'val-11-4', checked: false },
            //     },
            //     {
            //         module: 'Специальные персональные данные',
            //         alll: { id: 'val-12-0', checked: false },
            //         col1: { id: 'val-12-1', checked: false },
            //         col2: { id: 'val-12-2', checked: false },
            //         col3: { id: 'val-12-3', checked: false },
            //         col4: { id: 'val-12-4', checked: false },
            //     },
            //     {
            //         module: 'Биометрические персональные данные',
            //         alll: { id: 'val-13-0', checked: false },
            //         col1: { id: 'val-13-1', checked: false },
            //         col2: { id: 'val-13-2', checked: false },
            //         col3: { id: 'val-13-3', checked: false },
            //         col4: { id: 'val-13-4', checked: false },
            //     },
            // ],


            indeterminate: true,
            selected: [],

            // value: [],
            // options: [
            //     { text: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки',  value: 'val1' },
            //     { text: 'Паспортные данные',  value: 'val2' },
            //     { text: 'Семейное положение',  value: 'val3' },
            //     { text: 'Социальное положение',  value: 'val4' },
            //     { text: 'Имущественное положение',  value: 'val5' },
            //     { text: 'Документы об образовании',  value: 'val6' },
            //     { text: 'Профессия',  value: 'val7' },
            //     { text: 'Сведения о доходах',  value: 'val8' },
            //     { text: 'ИНН',  value: 'val9' },
            //     { text: 'Данные медицинского полиса',  value: 'val10' },
            //     { text: 'Страховое свидетельство',  value: 'val11' },
            //     { text: 'Специальные персональные данные',  value: 'val12' },
            //     { text: 'Биометрические персональные данные',  value: 'val13' },
            // ],

            required,
        }
    },
    computed: {
        state() {
            return this.selected.length >= 1
        },

        mychecked(nom) {
            let arr=[
                {chk1: this.chk1},
                {chk2: this.chk2},
            ]
            return arr[nom];
        }
        // valueAsArray() {
        //     // returns either an arrau with ['foo'] or an empty array []
        //     return [this.selected].filter(v => !!v)
        // }

    },
    methods: {
        mycheck() {
            // alert(this.items[1].read)
            // alert(this.selected)
            // this.indeterminate = !this.indeterminate;

            this.items[12].alll.checked = this.items[12].alll.id;
        },

        switchCheckbox(id_str) {
            // alert(this.$refs["val-01-1"].id)
            // alert(el)
            // this.$refs.val_01_1.id.checked=true;
            // this.selected.push('val-01-1')
            // this.selected = this.selected.unique();
            // this.selected.unique();



            // if(this.selected.indexOf('val-01-1') === -1 && el !== 'val-01-1'){
            //     this.selected.push('val-01-1');
            // }

            // this.$refs["val-01-1"].checked = true;

            // alert(this.selected);

            if( id_str[7] === '0' ){

                let curPref = "val-" + id_str[4] + id_str[5] + "-";
                let curInd = "";

                if( this.selected.indexOf(id_str) !== -1 ) {    //включили галку в левом столбце

                    for (let i = 1; i <= 4; i++) {
                        curInd = curPref + i;
                        if (this.selected.indexOf(curInd) === -1) {
                            this.selected.push(curInd);
                        }
                    }
                }
                else {                                      //выключили галку в левом столбце
                    for (let i = 1; i <= 4; i++) {
                        curInd = curPref + i;
                        let pos = this.selected.indexOf(curInd);
                        if (pos !== -1) {
                            this.selected.splice(pos,1);
                        }
                    }
                }

            }
        },
    },
}
</script>

<style scoped>
.margin-window
{
    margin-left: 1.0rem;
}
.myclass
{
    /*width: 800px;*/
    /*min-width: 800px;*/
    /*max-width: 8080px;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
}
.myclass2
{
    /*width: auto;*/
    /*min-width: 800px;*/
    /*max-width: 8080px;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
}
.myclass3
{
    margin: 0;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;

    /*width: auto;*/
    /*min-width: 800px;*/
    /*max-width: 8080px;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
}

/*!*.mytable>tbody>tr>td, .mytable>tbody>tr>th, .mytable>tfoot>tr>td, .mytable>tfoot>tr>th, .mytable>thead>tr>td, .mytable>thead>tr>th {*!*/
/*table.mytable>tbody>tr>td, table.mytable>tbody>tr>th, table.mytable>tfoot>tr>td, table.mytable>tfoot>tr>th, table.mytable>thead>tr>td, table.mytable>thead>tr>th, table.mytable>td{*/
/*!*.mytable tbody tr td, .mytable tbody tr th, .mytable tfoot tr td, .mytable tfoot tr th, .mytable thead tr td, .mytable thead tr th {*!*/

/*    padding-top: 0.1rem !important;*/
/*    padding-right: 0.1rem !important;*/
/*    padding-bottom: 0.1rem !important;*/
/*    padding-left: 0.1rem !important;*/
/*}*/

</style>
