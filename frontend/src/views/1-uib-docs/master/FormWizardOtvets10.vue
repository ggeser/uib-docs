<template>
    <b-row>
        <b-col
            cols="12"
            class="mb-2"
        >
            <h5 class="mb-0">
                Ответственный за организацию.
            </h5>
            <small class="text-muted">Введите сведения об ответственном.</small>
        </b-col>


        <b-col md="6">
            <b-form-group
                label="ФИО"
                label-for="fio"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ФИО"
                    rules="required"
                >
                    <b-form-input
                        id="fio"
                        v-model="items[0].text"
                        :state="errors.length > 0 ? false:items[0].text.length >= 5 ? true:null"
                        placeholder='Иванов Иван Иванович'
                        @input="updateStore"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Телефон"
                label-for="phone"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Телефон"
                    rules="required"
                >
                    <b-form-input
                        id="phone"
                        v-model="items[1].text"
                        :state="errors.length > 0 ? false:items[1].text.length >= 6 ? true:null"
                        type="number"
                        placeholder="8901234567"
                        @input="updateStore"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Адрес"
                label-for="address"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Адрес"
                    rules="required"
                >
                    <b-form-input
                        id="address"
                        v-model="items[2].text"
                        :state="errors.length > 0 ? false:items[2].text.length >= 1 ? true:null"
                        placeholder="Адрес"
                        @input="updateStore"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Электронная почта"
                label-for="eemail"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Электронная почта"
                    rules="required|email"
                >
                    <b-form-input
                        id="eemail"
                        v-model="items[3].text"
                        :state="errors.length > 0 ? false:items[3].text.length >= 1 ? true:null"
                        placeholder="e-mail"
                        @input="updateStore"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
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
} from 'bootstrap-vue'
import { required, email } from '@validations'


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
    },
    data() {
        return {

            // items: [
            //     { text: '' },  // fio
            //     { text: ''} ,  // phone
            //     { text: '' },  // address
            //     { text: '' },  // eemail
            // ],

            required,
            email,
        }
    },
    computed: {
        items: {
            get() { return this.$store.state.q10items; },
            // set(value) { this.$store.commit('setq10items', value); }
        }
    },
    methods: {
        updateStore() {
            this.$store.commit('setq10items', this.items )
        },
    }
}
</script>


