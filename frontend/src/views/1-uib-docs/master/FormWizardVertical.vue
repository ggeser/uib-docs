<template>
  <div class="center-window">
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout="vertical"
      finish-button-text="Подтвердить"
      back-button-text="Назад"
      next-button-text="Далее"
      class="wizard-vertical mb-3"
      :startIndex="startIndex"
      @on-complete="endOpros"
    >


        <!-- OrgType tab 1-->
        <tab-content
            title="Тип учреждения"
            :before-change="validationFormOrgType"
        >
            <validation-observer
                ref="orgTypeRules"
                tag="form"
            >
                <form-wizard-org-type01 />
            </validation-observer>
        </tab-content>

        <!-- Region tab 2-->
        <tab-content
            title="Регион"
            :before-change="validationFormRegion"
        >
            <validation-observer
                ref="regionRules"
                tag="form"
            >
                <form-wizard-region2 />
            </validation-observer>
        </tab-content>

        <!-- Company tab 3-->
        <tab-content
            title="Данные компании"
            :before-change="validationFormCompany"
        >
            <validation-observer
                ref="companyRules"
                tag="form"
            >
                <form-wizard-company3 />
            </validation-observer>
        </tab-content>

        <!-- Category tab 4-->
        <tab-content
            title="Категории данных"
            :before-change="validationFormCategory"
        >
            <validation-observer
                ref="categoryRules"
                tag="form"
            >
                <form-wizard-category4 />
            </validation-observer>
        </tab-content>


        <!-- DataSubj tab 5-->
        <tab-content
            title="Субъекты данных"
            :before-change="validationFormDataSubj"
        >
            <validation-observer
                ref="dataSubjRules"
                tag="form"
            >
                <form-wizard-data-subj5 />
            </validation-observer>
        </tab-content>

        <!-- DataAct tab 6-->
        <tab-content
            title="Действия"
            :before-change="validationFormDataAct"
        >
            <validation-observer
                ref="dataActRules"
                tag="form"
            >
                <form-wizard-data-act6 />
            </validation-observer>
        </tab-content>

        <!-- DataProc tab 7-->
        <tab-content
            title="Способы обработки"
            :before-change="validationFormDataProc"
        >
            <validation-observer
                ref="dataProcRules"
                tag="form"
            >
                <form-wizard-data-proc7 />
            </validation-observer>
        </tab-content>


        <!-- DataProc tab 9-->
        <tab-content
            title="Обработка данных"
            :before-change="validationFormDataProc2"
        >
            <validation-observer
                ref="dataProc2Rules"
                tag="form"
            >
                <form-wizard-data-proc9 />
            </validation-observer>
        </tab-content>

        <!-- Company tab 10-->
        <tab-content
            title="Ответственный"
            :before-change="validationFormOtvets"
        >
            <validation-observer
                ref="otvetsRules"
                tag="form"
            >
                <form-wizard-otvets10 />
            </validation-observer>
        </tab-content>

        <!-- Trans tab 11-->
        <tab-content
            title="Передачи данных"
            :before-change="validationFormTrans"
        >
            <validation-observer
                ref="transRules"
                tag="form"
            >
                <form-wizard-trans11 />
            </validation-observer>
        </tab-content>

        <!-- DataPlace tab 12-->
        <tab-content
            title="Места хранения"
            :before-change="validationFormDataPlace"
        >
            <validation-observer
                ref="dataPlaceRules"
                tag="form"
            >
                <form-wizard-data-place12 />
            </validation-observer>
        </tab-content>

        <!-- Inform tab 13-->
        <tab-content
            title="Информ. системы"
            :before-change="validationFormInform"
        >
            <validation-observer
                ref="informRules"
                tag="form"
            >
                <form-wizard-inform13 />
            </validation-observer>
        </tab-content>


    </form-wizard>


      <b-button
          @click="formSubmitted"
      >
          <span>Тест ген пдф</span>
      </b-button>
      <b-button
          @click="formClearData"
      >
          <span>Сброс</span>
      </b-button>

  </div>
</template>

<script>
import FormWizardOrgType01 from './FormWizardOrgType01.vue'
import FormWizardRegion2 from './FormWizardRegion2.vue'
import FormWizardCompany3 from './FormWizardCompany3.vue'
import FormWizardCategory4 from './FormWizardCategory4.vue'
import FormWizardDataSubj5 from './FormWizardDataSubj5.vue'
import FormWizardDataAct6 from './FormWizardDataAct6.vue'
import FormWizardDataProc7 from './FormWizardDataProc7.vue'
import FormWizardDataProc9 from './FormWizardDataProc9.vue'
import FormWizardOtvets10 from './FormWizardOtvets10.vue'
import FormWizardTrans11 from './FormWizardTrans11.vue'
import FormWizardDataPlace12 from './FormWizardDataPlace12.vue'
import FormWizardInform13 from './FormWizardInform13.vue'

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
    BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import axios from "@/libs/axios";
import router from "@/router";


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
        BButton,
        vSelect,
        BFormInvalidFeedback,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,
        FormWizardCompany3,
        FormWizardRegion2,
        FormWizardCategory4,
        FormWizardOrgType01,
        FormWizardDataSubj5,
        FormWizardDataAct6,
        FormWizardDataProc7,
        FormWizardDataProc9,
        FormWizardOtvets10,
        FormWizardTrans11,
        FormWizardDataPlace12,
        FormWizardInform13,
    },
    data() {
        return {

        }
    },
    computed: {
        startIndex: {
            get() { return this.$store.state.startIndex; },
            set(value) { this.$store.commit('setStartIndex', value); }
        }
    },
    methods: {
        formSubmitted() {
            axios({
                url: '/api/pdf/generate',
                method: 'POST',
                responseType: 'blob', // important
                data: {
                    params: {
                        q0select: this.$store.state.q0select,               // 0
                        orgType: this.$store.state.orgType,                 // 1
                        region: this.$store.state.region,                   // 2
                        rekv: this.$store.state.rekv,                       // 3
                        q4Selected: this.$store.state.q4Selected,           // 4
                        q5select: this.$store.state.q5select,               // 5
                        q6Selected: this.$store.state.q6Selected,           // 6
                        q7select: this.$store.state.q7select,               // 7
                        q9select: this.$store.state.q9select,               // 9
                        q10items: this.$store.state.q10items,               // 10
                        trans: this.$store.state.trans,                     // 11
                        q12items: this.$store.state.q12items,               // 12
                        q13items: this.$store.state.q13items,               // 13
                        checkoutSelect: this.$store.state.checkoutSelect,   //checkout
                    }
                }
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                // works in IE11
                if (typeof window.navigator.msSaveBlob === 'function') {
                    window.navigator.msSaveBlob(
                        response.data,
                        `file.pdf`
                    );
                } else {
                    link.setAttribute('download', 'file.pdf');
                    document.body.appendChild(link);
                    link.click();
                }
            });
        },


        endOpros() {
            router.push('checkout')
        },

        formClearData() {
            this.$store.commit('clearStore');
        },

        validationFormInform() {
            return new Promise((resolve, reject) => {
                this.$refs.informRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormDataPlace() {
            return new Promise((resolve, reject) => {
                this.$refs.dataPlaceRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormTrans() {
            return new Promise((resolve, reject) => {
                this.$refs.transRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormOtvets() {
            return new Promise((resolve, reject) => {
                this.$refs.otvetsRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormDataProc2() {
            return new Promise((resolve, reject) => {
                this.$refs.dataProc2Rules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormDataProc() {
            return new Promise((resolve, reject) => {
                this.$refs.dataProcRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormDataAct() {
            return new Promise((resolve, reject) => {
                this.$refs.dataActRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormDataSubj() {
            return new Promise((resolve, reject) => {
                this.$refs.dataSubjRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormOrgType() {
            return new Promise((resolve, reject) => {
                this.$refs.orgTypeRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormRegion() {
            return new Promise((resolve, reject) => {
                this.$refs.regionRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormCompany() {
            return new Promise((resolve, reject) => {
                this.$refs.companyRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationFormCategory() {
            return new Promise((resolve, reject) => {
                this.$refs.categoryRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },

    },
}
</script>

<style scoped>
.center-window
{
    /*min-width: 1100px;*/
    /*overflow-x: auto;*/

    margin-left: auto;
    margin-right: auto;
}

</style>
