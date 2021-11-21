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
                          v-model="selected"
                          class="demo-my-spacing"
                          name="checkbox-validation"
                          stacked
                      >
                          <b-form-checkbox
                              v-for="(option, key, index) in options" :key="index"
                              :value="option.value"
                          >
                              {{ option.text }}
                              <feather-icon
                                  v-b-popover.hover.top="option.help"
                                  variant="dark"
                                  icon="HelpCircleIcon"
                                  size="18"
                              />
                          </b-form-checkbox>
<!--                          <b-form-invalid-feedback :state="state">-->
<!--                              Пожалуйста выберите один пункт или больше-->
<!--                          </b-form-invalid-feedback>-->
<!--                          <b-form-valid-feedback :state="state">-->
<!--                              Спасибо-->
<!--                          </b-form-valid-feedback>-->
                      </b-form-checkbox-group>
                      <div v-if="(selected.length >= 1) || ( errors[0]  == null) ">
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
    VBPopover,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import router from '@/router'


export default {
    directives: {
        'b-popover': VBPopover,
    },
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
            // selected: [],

            options: [
                { text: 'Политика в отношении обработки персональных данных;',              value: 'val0', help: this.getHelp(0), },
                { text: 'Пользовательское соглашение посетителя сайта;',                    value: 'val1', help: this.getHelp(1),  },
                { text: 'Согласие на обработку персональных данных для Клиента;',           value: 'val2', help: this.getHelp(2), },
                { text: 'Согласие на обработку персональных данных для Сотрудника;',        value: 'val3', help: this.getHelp(3), },
                { text: 'Согласие на распространение персональных данных для Клиента;',     value: 'val4', help: this.getHelp(4), },
                { text: 'Согласие на распространение персональных данных для Сотрудника;',  value: 'val5', help: this.getHelp(5), },
                { text: 'Уведомление в Роскомнадзор.',                                      value: 'val6', help: this.getHelp(6), },
            ],
        }
    },
    computed: {
        state() {
            return this.selected.length >= 1
        },

        selected: {
            get() { return this.$store.state.q0select; },
            set(value) { this.$store.commit('setq0select', value); }
        }
    },
    methods: {
        getHelp(k) {
            if ( k === 0 ) { return 'Документ наличие которого требуется у каждой организации. Данный документ отображает с какими персональными данными и какие действия вы совершаете в процессе деятельности.' }
            if ( k === 1 ) { return 'Требуется на размещении любого сайта Вашей компании. Предупреждает об обработке файлов cookie.' }
            if ( k === 2 ) { return 'Нужно при обращении клиента к Вам за товаром или услугой, если вы спрашиваете его контактные данные, то по требованию законодательства вы обязаны взять с него согласие на обработку персональных данных' }
            if ( k === 3 ) { return 'Требуется взять при приёме сотрудника на работу. Отличается от согласия на обработку персональных данных клиента обхъёмом обрабатываемых данных и количеством операций производимых над ними' }
            if ( k === 4 ) { return 'Если Ваша компания предполагает передачу персональных данных третьим не определённым лицам (например у Вас агенство для знакомств и Вы размещаете анкету клиента на сайте), то для этого надо взять отдельное согласие на распространение персональных данных' }
            if ( k === 5 ) { return 'Если Ваша компания предполагает передачу персональных данных сотрудника не определенным третьим лицам (например вы представляете сотрудников на Вашем сайте), то требуется взять отдельное согласие на распространение персональных данных' }
            if ( k === 6 ) { return 'Уведомление в Роскомнадзор.' }
        },

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
