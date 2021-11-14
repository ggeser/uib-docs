<template>
    <b-row>
      <b-col
        cols="12"
        class="mb-2"
      >
        <h5 class="mb-0">
          Ваш регион
        </h5>
        <small class="text-muted">
          Выберите ваш регион.
        </small>
      </b-col>
        <b-col md="8">
            <validation-provider
                #default="{ errors }"
                name="Регион"
                rules="required"
            >
                <b-form-group
                    label="Регион"
                    label-for="v-region"
                    :state="errors.length > 0 ? false:null"
                >
                <v-select
                    id="v-region"
                    v-model="value"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="regionName"
                    :selectable="option => ! option.value.includes('select_value')"
                    label="text"
                    placeholder="Выберите регион"
                />
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
                    <b-form-invalid-feedback :state="errors.length > 0 ? false:null">
                        {{ errors[0] }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </validation-provider>
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
            // value: '', //Выберите регион
            regionName: [
                { value: 'select_value',    text: 'Выберите регион' },
                { value: 'val0',            text: 'Республика Башкортастан' },
                { value: 'val1',            text: 'Республика Татарстан' },
                { value: 'val2',            text: 'Canada' },
                { value: 'China',           text: 'China' },
                { value: 'United States',   text: 'United States' },
                { value: 'Brazil',          text: 'Brazil' },
                { value: 'Australia',       text: 'Australia' },
                { value: 'India',           text: 'India' },
            ],
        }
    },
    computed: {
        value: {
            get() { return this.$store.state.region; },
            set(value) { this.$store.commit('setRegion', value); }
        }
    },
}
</script>
