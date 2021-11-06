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

            <b-form>
                <div class="margin-window">
                    <validation-provider
                        #default="{ errors }"
                        name="First Name"
                        rules="required"
                    >
                        <b-table
                            striped
                            responsive
                            :items="permissionsData"
                        >
                            <template #cell(Модуль)="data">
                                {{ data.value }}
                            </template>
                            <template #cell()="data">
                                <b-form-checkbox
                                    v-model="value"
                                    :value="data.value"
                                />
                            </template>
                        </b-table>

<!--                        <b-button-->
<!--                            variant="primary"-->
<!--                            type="submit"-->
<!--                            @click="mycheck"-->
<!--                        >-->
<!--                            mycheck-->
<!--                        </b-button>-->

                        <validation-provider
                            name="Краткое название"
                            rules="required"
                        >
                            <div v-if="true">
                                <input
                                    type="hidden"
                                    id="short-name"
                                    v-model="value"
                                />
                            </div>
                        </validation-provider>


                        <div v-if="(value.length >= 1) || ( errors[0]  == null) ">
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
        const permissionsData = [
            {
                Модуль: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки',
                'Согласие на обработку персональных данных клиента': 'val1',
                'Согласие на обработку персональных данных работника': 'val2',
                'Согласие на распространение персональных данных клиента': 'val3',
                'Согласие на распространение персональных данных работника': 'val4',
            },
            {
                Модуль: 'Паспортные данные',
                'Согласие на обработку персональных данных клиента': 'val5',
                'Согласие на обработку персональных данных работника': 'val6',
                'Согласие на распространение персональных данных клиента': 'val7',
                'Согласие на распространение персональных данных работника': 'val8',
            },
            {
                Модуль: 'Семейное положение',
                'Согласие на обработку персональных данных клиента': 'val9',
                'Согласие на обработку персональных данных работника': 'val10',
                'Согласие на распространение персональных данных клиента': 'val11',
                'Согласие на распространение персональных данных работника': 'val12',
            },
            {
                Модуль: 'Социальное положение',
                'Согласие на обработку персональных данных клиента': 'val13',
                'Согласие на обработку персональных данных работника': 'val14',
                'Согласие на распространение персональных данных клиента': 'val15',
                'Согласие на распространение персональных данных работника': 'val16',
            },
            {
                Модуль: 'Имущественное положение',
                'Согласие на обработку персональных данных клиента': 'val17',
                'Согласие на обработку персональных данных работника': 'val18',
                'Согласие на распространение персональных данных клиента': 'val19',
                'Согласие на распространение персональных данных работника': 'val20',
            },

            {
                Модуль: 'Документы об образовании',
                'Согласие на обработку персональных данных клиента': 'val21',
                'Согласие на обработку персональных данных работника': 'val22',
                'Согласие на распространение персональных данных клиента': 'val23',
                'Согласие на распространение персональных данных работника': 'val24',
            },
            {
                Модуль: 'Профессия',
                'Согласие на обработку персональных данных клиента': 'val25',
                'Согласие на обработку персональных данных работника': 'val26',
                'Согласие на распространение персональных данных клиента': 'val27',
                'Согласие на распространение персональных данных работника': 'val28',
            },
            {
                Модуль: 'Сведения о доходах',
                'Согласие на обработку персональных данных клиента': 'val29',
                'Согласие на обработку персональных данных работника': 'val30',
                'Согласие на распространение персональных данных клиента': 'val31',
                'Согласие на распространение персональных данных работника': 'val32',
            },
            {
                Модуль: 'ИНН',
                'Согласие на обработку персональных данных клиента': 'val33',
                'Согласие на обработку персональных данных работника': 'val34',
                'Согласие на распространение персональных данных клиента': 'val35',
                'Согласие на распространение персональных данных работника': 'val36',
            },
            {
                Модуль: 'Данные медицинского полиса',
                'Согласие на обработку персональных данных клиента': 'val37',
                'Согласие на обработку персональных данных работника': 'val38',
                'Согласие на распространение персональных данных клиента': 'val39',
                'Согласие на распространение персональных данных работника': 'val40',
            },
            {
                Модуль: 'Страховое свидетельство',
                'Согласие на обработку персональных данных клиента': 'val41',
                'Согласие на обработку персональных данных работника': 'val42',
                'Согласие на распространение персональных данных клиента': 'val43',
                'Согласие на распространение персональных данных работника': 'val44',
            },
            {
                Модуль: 'Специальные персональные данные',
                'Согласие на обработку персональных данных клиента': 'val45',
                'Согласие на обработку персональных данных работника': 'val46',
                'Согласие на распространение персональных данных клиента': 'val47',
                'Согласие на распространение персональных данных работника': 'val48',
            },
            {
                Модуль: 'Биометрические персональные данные',
                'Согласие на обработку персональных данных клиента': 'val49',
                'Согласие на обработку персональных данных работника': 'val50',
                'Согласие на распространение персональных данных клиента': 'val51',
                'Согласие на распространение персональных данных работника': 'val52',
            },
        ]

        return {
            permissionsData,
        }
    },
    data() {
        return {
            selected: [],

            value: [],
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
            return this.value.length >= 1
        },
    },
    methods: {
        mycheck() {
            // alert(this.permissionsData[1].read)
            alert(this.value)
        },
    },
}
</script>

<style scoped>
.margin-window
{
    margin-left: 1.0rem;
}
</style>
