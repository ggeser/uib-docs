<template>
    <b-row>
      <b-col
        cols="12"
        class="mb-2"
      >
        <h5 class="mb-0">
            Способы обработки персональных данных
        </h5>
        <small class="text-muted">
            Укажите способы обработки.
        </small>
      </b-col>
        <b-col md="8">
            <validation-provider
                #default="{ errors }"
                name="Тип учреждения"
                rules="required"
            >
                <b-form-checkbox-group
                    v-model="value"
                    :options="options"
                    class="demo-my-spacing"
                    name="checkbox-validation"
                    stacked
                >
                </b-form-checkbox-group>
                <div v-if="(value.length >= 1) || ( errors[0]  == null) ">
                    <br>
                </div>
                <div v-else>
                    <small class="text-danger">
                        Пожалуйста выберите один пункт или больше
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
    BFormCheckboxGroup,
    BFormCheckbox,
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
        BFormCheckboxGroup,
        BFormCheckbox,
    },
    data() {
        return {
            required,

            // value: [],
            options: [
                { text: 'На бумажных носителях',                                                                            value: 'val0' },
                { text: 'В информационных системах персональных данных с использованием автоматизации',                     value: 'val1' },
                { text: 'В информационных системах персональных данных с использованием без использования автоматизации',   value: 'val2' },
                { text: 'Смешанная обработка персональных данных – автоматизированная обработка при участии человека',      value: 'val3' },
            ],
        }
    },
    computed: {
        value: {
            get() { return this.$store.state.q9select; },
            set(value) { this.$store.commit('setq9select', value); }
        }
    },
}
</script>
