<template>

  <div class="center-window">
      <b-card
        title="Какие документы требуется составить?"
        class="text-center"
      >
        <b-card-text>
          <span>Выберите из списка одно или несколько типов необходимых документов</span>
        </b-card-text>

        <div class="margin-window">
          <b-form-checkbox-group
            v-model="value"
            :options="options"
            :state="state"
            class="demo-my-spacing"
            name="checkbox-validation"
            stacked
          >
            <b-form-invalid-feedback :state="state">
              Пожалуйста выберите один пункт или больше
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="state">
              Спасибо
            </b-form-valid-feedback>
          </b-form-checkbox-group>
        </div>


          <b-button
              variant="primary"
              type="submit"
              @click.prevent="validationForm"
          >
              Submit
          </b-button>

      </b-card>
  </div>

</template>

<script>
import {
  BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback, BCardText, BCard, BFormCheckbox, BFormGroup, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BCardText,
    BCard,
    BButton,
  },
  data() {
    return {
      value: [],
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
  },
}
</script>



<style scoped>
.center-window
{
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.margin-window
{
    margin-top: 2.0rem;
    margin-bottom: 2.0rem;
}
</style>
