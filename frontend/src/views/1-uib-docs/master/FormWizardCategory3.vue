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

        <!-- form -->
        <validation-observer ref="simpleRules">
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
                            class="mb-0"
                            v-model="value"
                            :items="permissionsData"
                        >
                            <template #cell(module)="data">
                                {{ data.value }}
                            </template>
                            <template #cell()="data">
                                <b-form-checkbox :checked="data.value" />
                            </template>
                        </b-table>


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
        </validation-observer>

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
                module: 'Admin',
                read: false,
                write: false,
                create: false,
                delete: false,
            },
            {
                module: 'Staff',
                read: false,
                write: false,
                create: false,
                delete: false,
            },
            {
                module: 'Author',
                read: false,
                write: false,
                create: false,
                delete: false,
            },
            {
                module: 'Contributor',
                read: false,
                write: false,
                create: false,
                delete: false,
            },
            {
                module: 'User',
                read: false,
                write: false,
                create: false,
                delete: false,
            },
        ]

        return {
            permissionsData,
        }
    },
    data() {
        return {
            value: [],
            options: [
                { text: 'Фамилия, Имя, Отчество, дата рождения, адрес прописки',  value: 'val1' },
                { text: 'Паспортные данные',  value: 'val2' },
                { text: 'Семейное положение',  value: 'val3' },
                { text: 'Социальное положение',  value: 'val4' },
                { text: 'Имущественное положение',  value: 'val5' },
                { text: 'Документы об образовании',  value: 'val6' },
                { text: 'Профессия',  value: 'val7' },
                { text: 'Сведения о доходах',  value: 'val8' },
                { text: 'ИНН',  value: 'val9' },
                { text: 'Данные медицинского полиса',  value: 'val10' },
                { text: 'Страховое свидетельство',  value: 'val11' },
                { text: 'Специальные персональные данные',  value: 'val12' },
                { text: 'Биометрические персональные данные',  value: 'val13' },
            ],

            required,
        }
    },
    computed: {
        state() {
            return this.value.length >= 1
        },
    },
    methods: {
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    router.push('master')
                }
            })
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
