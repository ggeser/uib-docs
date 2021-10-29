<template>
    <b-row>
        <b-col
            cols="12"
            class="mb-2"
        >
            <h5 class="mb-0">
                Данные компании
            </h5>
            <small class="text-muted">Введите сведения о компании.</small>
        </b-col>
        <b-col md="6">
            <b-form-group
                label="First Name"
                label-for="first-name"
            >
                <validation-provider
                    #default="{ errors }"
                    name="First Name"
                    rules="required"
                >
                    <b-form-input
                        id="first-name"
                        v-model="first_name"
                        placeholder="John"
                        :state="errors.length > 0 ? false:null"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>
        <b-col md="6">
            <b-form-group
                label="Last Name"
                label-for="last-name"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Last Name"
                    rules="required"
                >
                    <b-form-input
                        id="last-name"
                        v-model="last_name"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Doe"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>
    </b-row>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
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
    BFormInvalidFeedback,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
        name: '',
        emailValue: '',
        PasswordValue: '',
        passwordCon: '',
        first_name: '',
        last_name: '',
        address: '',
        landMark: '',
        pincode: '',
        twitterUrl: '',
        city: '',
        required,
        email,
    }
  },
  methods: {

  },
}
</script>
