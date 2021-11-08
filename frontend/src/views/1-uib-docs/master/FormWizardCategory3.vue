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
<!--                        responsive-->
<!--                        fixed-->
                        <div class="table-responsive">
                        <b-table
                            striped
                            fixed
                            responsive
                            :fields="fields"
                            :items="items"
                            class="mytable"

                        >
                            <template v-slot:table-colgroup>
                                <col>
                                <col style="width: 2rem">
                                <col>
                                <col>
                                <col>
                                <col>
                            </template>

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
                                    :indeterminate="data.value.indet"
                                    @change=switchCheckbox(data.value.id,data.value,data)
                                />
                            </template>
                        </b-table>
                        </div>

                        <validation-provider
                            #default="{ errors }"
                            name="Краткое название"
                            rules="required"
                        >
                            <div v-if="true">
                                <input
                                    type="hidden"
                                    id="short-name"
                                    v-model="selected"
                                />
                            </div>

                            <div v-if="(selected.length >= 1) || ( errors[0]  == null) ">
                                <br>
                            </div>
                            <div v-else>
                                <small class="text-danger">
                                    Пожалуйста выберите один пункт или больше
                                </small>
                            </div>

                        </validation-provider>
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
  BFormCheckboxGroup, BFormValidFeedback, BFormCheckbox, BTable, BForm,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import router from "@/router";
import useUsersList from "@/views/apps/user/users-list/useUsersList";
import {ref} from "@vue/composition-api";
import {useInputImageRenderer} from "@core/comp-functions/forms/form-utils";
import {avatarText} from "@core/utils/filter";

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
        BFormCheckboxGroup, BFormValidFeedback, BFormCheckbox, BTable, BForm,
    },
    setup() {
        const fields = [

            // { key: 'index', label: '№' } ,// A virtual column that doesn't exist in items
            { key: 'module', label: 'Модуль' },
            // { key: 'alll', label: 'V' , thStyle: { backgroundColor: '#3eef33', width: 10} },
            // { key: 'alll', label: 'V' , thClass: 'tdClass1'},
            { key: 'alll', label: 'V'},
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

            fixed: true,

            indeterminate: true,
            selected: [],

            required,
        }
    },

    computed: {
        // state() {
        //     return this.selected.length >= 1
        // },
        //
        // mychecked(nom) {
        //     let arr=[
        //         {chk1: this.chk1},
        //         {chk2: this.chk2},
        //     ]
        //     return arr[nom];
        // },
    },
    methods: {
        mycheck() {
            // alert(this.items[1].read)
            // alert(this.selected)
            // this.indeterminate = !this.indeterminate;

            this.items[12].alll.checked = this.items[12].alll.id;
        },

        switchCheckbox(id_str,my_obj,virt) {

            let curId = id_str;
            let stroka = id_str[4] + id_str[5];
            let curInd = id_str[7];

            let curPref = "val-" + stroka + "-";

            // alert(id_str+" "+my_obj.id);
            // alert( my_obj.checked );
            // console.log(virt.item[1]);

            if( my_obj.checked !== false ) {    //галка включается

                this.selected.push(id_str);

                if( curInd === '0' ){                    //если галка в левом столбце - включаем всю строку

                    this.items[stroka-1].alll.indet = false;

                    this.items[stroka-1].col1.checked = this.items[stroka-1].col1.id;
                    this.items[stroka-1].col2.checked = this.items[stroka-1].col2.id;
                    this.items[stroka-1].col3.checked = this.items[stroka-1].col3.id;
                    this.items[stroka-1].col4.checked = this.items[stroka-1].col4.id;

                    for (let i = 1; i <= 4; i++) {
                        curId = curPref + i;
                        if (this.selected.indexOf(curId) === -1) {
                            this.selected.push(curId);
                        }
                    }
                }
                else { //включается галка из четырех столбцов, нужно включить левую галку и пометить ее наполовину
                    this.items[stroka-1].alll.checked = this.items[stroka-1].alll.id;
                    this.items[stroka-1].alll.indet = true;

                    curId = curPref + 0;
                    if (this.selected.indexOf(curId) === -1) {
                        this.selected.push(curId);
                    }

                    if (
                        this.items[stroka-1].col1.checked !== false &&
                        this.items[stroka-1].col2.checked !== false &&
                        this.items[stroka-1].col3.checked !== false &&
                        this.items[stroka-1].col4.checked !== false
                    )
                    {
                        this.items[stroka-1].alll.indet = false;
                    }
                }
            }
            else {                                      //галка выключается

                let pos = this.selected.indexOf(curId);
                if (pos !== -1) {
                    this.selected.splice(pos,1);
                }

                if( curInd === '0' ){                //если галка в левом столбце - выключаем всю строку

                    this.items[stroka-1].alll.indet = false;

                    this.items[stroka-1].col1.checked = false;
                    this.items[stroka-1].col2.checked = false;
                    this.items[stroka-1].col3.checked = false;
                    this.items[stroka-1].col4.checked = false;

                    for (let i = 1; i <= 4; i++) {
                        curId = curPref + i;
                        let pos = this.selected.indexOf(curId);
                        if (pos !== -1) {
                            this.selected.splice(pos,1);
                        }
                    }
                }
                else { //выключается галка из четырех столбцов, нужно левую галку либо выключить либо перевести в среднее состояние
                    this.items[stroka-1].alll.indet = false;

                    if (
                        this.items[stroka-1].col1.checked !== false ||
                        this.items[stroka-1].col2.checked !== false ||
                        this.items[stroka-1].col3.checked !== false ||
                        this.items[stroka-1].col4.checked !== false
                    )
                    {
                        this.items[stroka-1].alll.indet = true;
                    }

                    if (this.items[stroka-1].alll.indet === false ) {
                        this.items[stroka-1].alll.checked = false;

                        curId = curPref + 0;
                        let pos = this.selected.indexOf(curId);
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

.tdClass1
{
    margin-left: 0.1rem !important;
    max-width: 30px !important;
    backgroundColor: '#3eef33' !important;
}

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
