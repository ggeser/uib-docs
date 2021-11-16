<template>
    <b-row>
      <b-col
        cols="12"
        class="mb-2"
      >
        <h5 class="mb-0">
            Присутствует ли трансграничная передача данных?
        </h5>
        <small class="text-muted">
          Выберите подходящий ответ.
        </small>
      </b-col>
        <b-col md="8">
            <validation-provider
                #default="{ errors }"
                name="Тип учреждения"
                rules="required"
            >
                <b-form-radio-group
                    v-model="value"
                    :options="options"
                    class="demo-my-spacing"
                    name="checkbox-validation"
                    stacked
                >
                </b-form-radio-group>
                <div v-if="(value.length >= 1) || ( errors[0]  == null) ">
                    <br>
                </div>
                <div v-else>
                    <small class="text-danger">
                        Пожалуйста выберите один пункт
                    </small>
                </div>
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
    BFormRadioGroup,
    BFormRadio,
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
        BFormRadioGroup,
        BFormRadio,
    },
    data() {
        return {
            required,

            // value: [],
            options: [
                { text: 'Да',     value: 'val1' },
                { text: 'Нет',    value: 'val2' },

            ],
        }
    },
    computed: {
        value: {
            get() { return this.$store.state.trans; },
            set(value) { this.$store.commit('setTrans', value); }
        }
    },
}
</script>
