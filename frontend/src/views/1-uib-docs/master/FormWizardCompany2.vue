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
                label="Наименование организации"
                label-for="full-name"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Полное название"
                    rules="required"
                >
                    <b-form-input
                        id="full-name"
                        v-model="full_name"
                        :state="errors.length > 0 ? false:full_name.length >= 10 ? true:null"
                        placeholder='Общество с ограниченной ответственностью "Пример"'
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Краткое наименование организации"
                label-for="short-name"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Краткое название"
                    rules="required"
                >
                    <b-form-input
                        id="short-name"
                        v-model="short_name"
                        :state="errors.length > 0 ? false:short_name.length >= 5 ? true:null"
                        placeholder='ООО "Пример"'
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Юридический адрес"
                label-for="ur-address"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Юридический адрес"
                    rules="required"
                >
                    <b-form-input
                        id="ur-address"
                        v-model="ur_address"
                        :state="errors.length > 0 ? false:ur_address.length >= 1 ? true:null"
                        placeholder="Страна, индекс, город, улица, дом, строение, помещение"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Фактический адрес"
                label-for="fakt-address"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Фактический адрес"
                    rules="required"
                >
                    <b-form-input
                        id="fakt-address"
                        v-model="fakt_address"
                        :state="errors.length > 0 ? false:fakt_address.length >= 1 ? true:null"
                        placeholder="Страна, индекс, город, улица, дом, строение, помещение"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>


        <b-col md="6">
            <b-form-group
                label="ИНН"
                label-for="inn"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ИНН"
                    rules="required"
                >
                    <b-form-input
                        id="inn"
                        v-model="inn"
                        :state="errors.length > 0 ? false:inn.length >= 10 ? true:null"
                        type="number"
                        placeholder="123456789012"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="КПП"
                label-for="kpp"
            >
                <validation-provider
                    #default="{ errors }"
                    name="КПП"
                    rules="required"
                >
                    <b-form-input
                        id="kpp"
                        v-model="kpp"
                        :state="errors.length > 0 ? false:kpp.length >= 9 ? true:null"
                        type="number"
                        placeholder="123456789"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ОГРН"
                label-for="ogrn"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ОГРН"
                    rules="required"
                >
                    <b-form-input
                        id="ogrn"
                        v-model="ogrn"
                        :state="errors.length > 0 ? false:ogrn.length >= 9 ? true:null"
                        type="number"
                        placeholder="123456789"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ОКВЭД"
                label-for="okved"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ОКВЭД"
                    rules="required"
                >
                    <b-form-input
                        id="okved"
                        v-model="okved"
                        :state="errors.length > 0 ? false:okved.length >= 1 ? true:null"
                        placeholder="ОКВЭД"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Расшифровка ОКВЭДа"
                label-for="ras-okved"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Расшифровка ОКВЭДа"
                    rules="required"
                >
                    <b-form-input
                        id="ras-okved"
                        v-model="ras_okved"
                        :state="errors.length > 0 ? false:ras_okved.length >= 1 ? true:null"
                        placeholder="Расшифровка ОКВЭДа"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ОКПО"
                label-for="okpo"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ОКПО"
                    rules="required"
                >
                    <b-form-input
                        id="okpo"
                        v-model="okpo"
                        :state="errors.length > 0 ? false:okpo.length >= 10 ? true:null"
                        type="number"
                        placeholder="1234567890"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ОКФС"
                label-for="okfs"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ОКФС"
                    rules="required"
                >
                    <b-form-input
                        id="okfs"
                        v-model="okfs"
                        :state="errors.length > 0 ? false:okfs.length >= 2 ? true:null"
                        type="number"
                        placeholder="12"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ОКОГУ"
                label-for="okogu"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ОКОГУ"
                    rules="required"
                >
                    <b-form-input
                        id="okogu"
                        v-model="okogu"
                        :state="errors.length > 0 ? false:okogu.length >= 7 ? true:null"
                        type="number"
                        placeholder="1234567"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ОКОПФ"
                label-for="okopf"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ОКОПФ"
                    rules="required"
                >
                    <b-form-input
                        id="okopf"
                        v-model="okopf"
                        :state="errors.length > 0 ? false:okopf.length >= 5 ? true:null"
                        type="number"
                        placeholder="12345"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Дата утверждения устава компании"
                label-for="uc-date"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Дата утверждения устава компании"
                    rules="required"
                >
                    <b-form-input
                        id="uc-date"
                        v-model="uc_date"
                        :state="errors.length > 0 ? false:uc_date.length === 10 ? true:null"
                        type="date"
                        placeholder="дд.мм.гггг"
                        :style="uc_date.length === 0 ? { color:'#babac4' } : null"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

<!--        <b-col md="6">-->
<!--            <b-form-group-->
<!--                label="Дата утверждения устава компании"-->
<!--                label-for="uc-date"-->
<!--            >-->
<!--                <validation-provider-->
<!--                    #default="{ errors }"-->
<!--                    name="Дата утверждения устава компании"-->
<!--                    rules="required"-->
<!--                >-->
<!--                    <cleave-->
<!--                        id="uc-date"-->
<!--                        v-model="form.date"-->
<!--                        class="form-control"-->
<!--                        :raw="false"-->
<!--                        :options="options.date"-->
<!--                        :state="false"-->
<!--                        placeholder="дд.мм.гггг"-->
<!--                    />-->
<!--                    <small class="text-danger">{{ errors[0] }}</small>-->

<!--                </validation-provider>-->
<!--            </b-form-group>-->
<!--        </b-col>-->

        <b-col md="6">
            <b-form-group
                label="Должность руководителя"
                label-for="dolgnost"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Должность руководителя"
                    rules="required"
                >
                    <b-form-input
                        id="dolgnost"
                        v-model="dolgnost"
                        :state="errors.length > 0 ? false:dolgnost.length >= 1 ? true:null"
                        placeholder='Генеральный директор'
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="ФИО руководителя"
                label-for="fio"
            >
                <validation-provider
                    #default="{ errors }"
                    name="ФИО руководителя"
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
                label="Дата открытия организации"
                label-for="ot-date"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Дата открытия организации"
                    rules="required"
                >
                    <b-form-input
                        id="ot-date"
                        v-model="ot_date"
                        :state="errors.length > 0 ? false:ot_date.length === 10 ? true:null"
                        type="date"
                        placeholder="дд.мм.гггг"
                        :style="ot_date.length === 0 ? { color:'#babac4' } : null"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group
                label="Сайт организации"
                label-for="site"
            >
                <validation-provider
                    #default="{ errors }"
                    name="Сайт организации"
                    rules="required"
                >
                    <b-form-input
                        id="site"
                        v-model="site"
                        :state="errors.length > 0 ? false:site.length >= 3 ? true:null"
                        placeholder='сайт.рф'
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
        full_name: '',
        short_name: '',
        ur_address: '',
        fakt_address: '',
        inn: '',
        kpp: '',
        ogrn: '',
        okved: '',
        ras_okved: '',
        okpo: '',
        okfs: '',
        okogu: '',
        okopf: '',
        mydate: '',
        uc_date: '',
        dolgnost: '',
        fio: '',
        ot_date: '',
        site: '',

        required,
        email,

        // form: {
        //     date: null,
        // },
        // options: {
        //     date: {
        //         date: true,
        //         delimiter: '.',
        //         datePattern: ['d', 'm', 'Y'],
        //     },
        // },
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<!--<style scoped>-->

<!--.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */-->
<!--    color: red !important;-->
<!--    opacity: 1; /* Firefox */-->
<!--}-->

<!--.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */-->
<!--    color: red !important;-->
<!--}-->

<!--.form-control::-ms-input-placeholder { /* Microsoft Edge */-->
<!--    color: red !important;-->
<!--}-->
<!--</style>-->
