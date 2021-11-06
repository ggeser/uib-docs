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
<!--                        <b-form-checkbox-group-->
<!--                            v-model="value"-->
<!--                            :options="options"-->

<!--                            class="demo-my-spacing"-->
<!--                            name="checkbox-validation"-->
<!--                            stacked-->
<!--                        >-->
<!--                        </b-form-checkbox-group>-->

<!--                        <b-table-->
<!--                            striped-->
<!--                            responsive-->
<!--                            class="mb-0"-->
<!--                            v-model="value"-->
<!--                            :items="permissionsData"-->
<!--                        >-->
<!--                            <template #cell(module)="data">-->
<!--                                {{ data.value }}-->
<!--                            </template>-->
<!--                            <template #cell()="data">-->
<!--                                <b-form-checkbox :checked="data.value" />-->
<!--                            </template>-->
<!--                        </b-table>                        -->
                        <b-table
                            striped
                            responsive


                            :items="permissionsData"

                        >
                            <template #cell(module)="data">
                                {{ data.value }}
                            </template>
                            <template #cell()="data">
<!--                                <b-form-checkbox :checked="data.value" />-->
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
                            <b-form-input
                                id="short-name"
                                v-model="value"
                            />
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
<!--        </validation-observer>-->

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
        // const permissionsData = [
        //     {
        //         module: 'Admin',
        //         read: false,
        //         write: false,
        //         create: false,
        //         delete: false,
        //     },
        //     {
        //         module: 'Staff',
        //         read: false,
        //         write: false,
        //         create: false,
        //         delete: false,
        //     },
        //     {
        //         module: 'Author',
        //         read: false,
        //         write: false,
        //         create: false,
        //         delete: false,
        //     },
        //     {
        //         module: 'Contributor',
        //         read: false,
        //         write: false,
        //         create: false,
        //         delete: false,
        //     },
        //     {
        //         module: 'User',
        //         read: false,
        //         write: false,
        //         create: false,
        //         delete: false,
        //     },
        // ]

        const permissionsData = [
            {
                module: 'Admin',
                read: 'val1',
                write: 'val2',
                create: 'val3',
                delete: 'val4',
            },
            {
                module: 'Staff',
                read: 'val5',
                write: 'val6',
                create: 'val7',
                delete: 'val8',
            },
            {
                module: 'Author',
                read: 'val9',
                write: 'val10',
                create: 'val11',
                delete: 'val12',
            },
            {
                module: 'Contributor',
                read: 'val13',
                write: 'val14',
                create: 'val15',
                delete: 'val16',
            },
            {
                module: 'User',
                read: 'val17',
                write: 'val18',
                create: 'val19',
                delete: 'val20',
            },
        ]

        return {
            permissionsData,
        }
    },
    data() {
        return {
            // permissionsData: [
            //     {
            //         module: 'Admin',
            //         read: 'va1l',
            //         write: 'val2',
            //         create: 'val3',
            //         delete: 'val4',
            //     },
            //     {
            //         module: 'Staff',
            //         read: 'val5',
            //         write: 'val6',
            //         create: 'val7',
            //         delete: 'val8',
            //     },
            //     {
            //         module: 'Author',
            //         read: 'val9',
            //         write: 'val10',
            //         create: 'val11',
            //         delete: 'val12',
            //     },
            //     {
            //         module: 'Contributor',
            //         read: 'val13',
            //         write: 'val14',
            //         create: 'val15',
            //         delete: 'val16',
            //     },
            //     {
            //         module: 'User',
            //         read: 'val17',
            //         write: 'val18',
            //         create: 'val19',
            //         delete: 'val20',
            //     },
            // ],

            // selected: ['val19', 'val20'],
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
            // export const positive = extend('positive', {
            //     validate: validatorPositive,
            //     message: 'Please enter positive number!',
            // })
            //
            // export const validatorPositive = value => {
            //     if (value >= 0) {
            //         return true
            //     }
            //     return false
            // }
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
