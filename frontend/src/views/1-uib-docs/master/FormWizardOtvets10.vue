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
                        v-model="fio"
                        :state="errors.length > 0 ? false:fio.length >= 5 ? true:null"
                        placeholder='Иванов Иван Иванович'
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
                        v-model="phone"
                        :state="errors.length > 0 ? false:phone.length >= 6 ? true:null"
                        type="number"
                        placeholder="8901234567"
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
                        v-model="address"
                        :state="errors.length > 0 ? false:address.length >= 1 ? true:null"
                        placeholder="Адрес"
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
                        v-model="eemail"
                        :state="errors.length > 0 ? false:eemail.length >= 1 ? true:null"
                        placeholder="e-mail"
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
        fio: '',
        phone: '',
        address: '',
        eemail: '',

        required,
        email,
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>


