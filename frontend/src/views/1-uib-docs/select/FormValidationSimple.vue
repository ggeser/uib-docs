<template>
    <div class="center-window">

        <b-card
            title="Какие документы требуется составить?"
            class="text-center"
        >
            <b-card-text>
                <span>Выберите из списка одно или несколько типов необходимых документов</span>
            </b-card-text>


        <!-- form -->
        <validation-observer ref="simpleRules">
          <b-form>

              <div class="margin-window">
                  <validation-provider
                      #default="{ errors }"
                      name="First Name"
                      rules="required"
                  >
                      <b-form-checkbox-group
                          v-model="value"
                          :options="options"

                          class="demo-my-spacing"
                          name="checkbox-validation"
                          stacked
                      >
<!--                          <b-form-invalid-feedback :state="state">-->
<!--                              Пожалуйста выберите один пункт или больше-->
<!--                          </b-form-invalid-feedback>-->
<!--                          <b-form-valid-feedback :state="state">-->
<!--                              Спасибо-->
<!--                          </b-form-valid-feedback>-->
                      </b-form-checkbox-group>
                      <div v-if="(value.length >= 1) || ( errors[0]  == null) ">
                          <br>
                      </div>
                      <div v-else>
                          <small class="text-danger">
                              Пожалуйста выберите один пункт или больше
                          </small>
                          <!--                          <small class="text-danger">{{ errors[0] }}</small>-->
                      </div>

                  </validation-provider>

              </div>

<!--            <b-row>-->
<!--              <b-col md="6">-->
<!--                <b-form-group>-->
<!--                  <validation-provider-->
<!--                    #default="{ errors }"-->
<!--                    name="First Name"-->
<!--                    rules="required"-->
<!--                  >-->
<!--                    <b-form-input-->
<!--                      v-model="name"-->
<!--                      :state="errors.length > 0 ? false:null"-->
<!--                      placeholder="First Name"-->
<!--                    />-->
<!--                    <small class="text-danger">{{ errors[0] }}</small>-->
<!--                  </validation-provider>-->
<!--                </b-form-group>-->
<!--              </b-col>-->
<!--              <b-col md="6">-->
<!--                <b-form-group>-->
<!--                  <validation-provider-->
<!--                    #default="{ errors }"-->
<!--                    name="Email"-->
<!--                    rules="required|email"-->
<!--                  >-->
<!--                    <b-form-input-->
<!--                      v-model="emailValue"-->
<!--                      :state="errors.length > 0 ? false:null"-->
<!--                      type="email"-->
<!--                      placeholder="Email"-->
<!--                    />-->
<!--                    <small class="text-danger">{{ errors[0] }}</small>-->
<!--                  </validation-provider>-->
<!--                </b-form-group>-->
<!--              </b-col>-->
<!--              <b-col cols="12">-->
<!--                <b-button-->
<!--                  variant="primary"-->
<!--                  type="submit"-->
<!--                  @click.prevent="validationForm"-->
<!--                >-->
<!--                  Submit-->
<!--                </b-button>-->
<!--              </b-col>-->
<!--            </b-row>-->

              <b-button
                  variant="primary"
                  type="submit"
                  @click.prevent="validationForm"
              >
                  Далее
              </b-button>

          </b-form>
        </validation-observer>

      </b-card>
    </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText, BCard,
    BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback, BFormCheckbox,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import router from '@/router'


export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        BCard,
        BCardText,
        BFormInput,
        BFormGroup,
        BForm,
        BRow,
        BCol,
        BButton,
        BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback, BFormCheckbox,
    },
    data() {
        return {
            emailValue: '',
            name: '',
            required,
            email,

            // value: [],
            options: [
                { text: 'Политика в отношении обработки персональных данных;',              value: 'val1' },
                { text: 'Пользовательское соглашение посетителя сайта;',                    value: 'val2' },
                { text: 'Согласие на обработку персональных данных для Клиента;',           value: 'val3' },
                { text: 'Согласие на обработку персональных данных для Сотрудника;',        value: 'val4' },
                { text: 'Согласие на распространение персональных данных для Клиента;',     value: 'val5' },
                { text: 'Согласие на распространение персональных данных для Сотрудника;',  value: 'val6' },
                { text: 'Уведомление в Роскомнадзор.',                                      value: 'val7' },
            ],
        }
    },
    computed: {
        state() {
            return this.value.length >= 1
        },

        value: {
            get() { return this.$store.state.select; },
            set(value) { this.$store.commit('setSelect', value); }
        }
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
.center-window
{
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.margin-window
{
    margin-top: 2.0rem;
    margin-bottom: 2.0rem;
}
</style>
