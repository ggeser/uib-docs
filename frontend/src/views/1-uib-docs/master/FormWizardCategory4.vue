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
<!--                    <validation-provider-->
<!--                        #default="{ errors }"-->
<!--                        name="First Name"-->
<!--                        rules="required"-->
<!--                    >-->
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
                                    {{ data.value.name }}
<!--                                 </span>-->
                                <feather-icon
                                    v-b-popover.hover.top="data.value.help"
                                    variant="dark"
                                    icon="HelpCircleIcon"
                                    :hidden="data.value.hidden"
                                    size="18"
                                />
                            </template>
                            <template #cell()="data">
                                <b-form-checkbox
                                    v-model="data.value.checked"
                                    :value="data.value.id"
                                    :indeterminate="data.value.indet"
                                    :disabled="dissabled(data.value.id)"
                                    @change=switchCheckbox(data.value.id,data.value,data)
                                />
<!--                                :id="data.value.id"-->
                                <!--                            :ref="data.value.id"-->
                                <!--                            :checked="data.value.checked"-->
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
<!--                    </validation-provider>-->
                </div>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import { useStore } from 'vuex'
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
  VBPopover,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import router from "@/router";
import useUsersList from "@/views/apps/user/users-list/useUsersList";
import {ref} from "@vue/composition-api";
import {useInputImageRenderer} from "@core/comp-functions/forms/form-utils";
import {avatarText} from "@core/utils/filter";

export default {
    directives: {
        'b-popover': VBPopover,
    },
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
        ];

        // const store = useStore();

        // items = this.$store.state.q4Items;

        return {
            // items,
            // items: computed(() => store.state.q4Items),
            fields,

        }
    },

    data() {
        return {

            // items: this.$store.state.q4Items,
            // selected: this.$store.state.q4Selected,

            required,
        }
    },

    computed: {
        items: {
            get() { return this.$store.state.q4Items; },
             // set(value) { this.$store.commit('setQ4Items', value); }
        },
        selected: {
            get() { return this.$store.state.q4Selected; },
             // set(value) { this.$store.commit('setQ4Items', value); }
        }


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
        dissabled(id_str) {
            let rez = false;
            let curCol= id_str[7];

            if ( curCol === "1" && this.$store.state.q0select.indexOf("val2") === -1 ) { rez = true; }
            if ( curCol === "2" && this.$store.state.q0select.indexOf("val3") === -1 ) { rez = true; }
            if ( curCol === "3" && this.$store.state.q0select.indexOf("val4") === -1 ) { rez = true; }
            if ( curCol === "4" && this.$store.state.q0select.indexOf("val5") === -1 ) { rez = true; }

           return rez;
        },

        mycheck() {
            // alert(this.items[1].read)
            // alert(this.selected)
            // this.indeterminate = !this.indeterminate;

            // this.items[12].alll.checked = this.items[12].alll.id;
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

                    if (this.dissabled("xxxxxxx1") === false) this.items[stroka-1].col1.checked = this.items[stroka-1].col1.id;
                    if (this.dissabled("xxxxxxx2") === false) this.items[stroka-1].col2.checked = this.items[stroka-1].col2.id;
                    if (this.dissabled("xxxxxxx3") === false) this.items[stroka-1].col3.checked = this.items[stroka-1].col3.id;
                    if (this.dissabled("xxxxxxx4") === false) this.items[stroka-1].col4.checked = this.items[stroka-1].col4.id;

                    for (let i = 1; i <= 4; i++) {
                        curId = curPref + i;
                        if ( this.selected.indexOf(curId) === -1 && this.dissabled(curId) === false ) {
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

            this.updateStore();
        },


        updateStore() {
            this.$store.commit('setQ4Items', { 'items': this.items, 'selected': this.selected } )
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
