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
      @on-complete="formSubmitted"
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
                <form-wizard-region1 />
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
                <form-wizard-company2 />
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




<!--        &lt;!&ndash; address  &ndash;&gt;-->
<!--        <tab-content-->
<!--            title="Address"-->
<!--            :before-change="validationFormAddress"-->
<!--        >-->
<!--            <validation-observer-->
<!--                ref="addressRules"-->
<!--                tag="form"-->
<!--            >-->
<!--                <b-row>-->
<!--                    <b-col-->
<!--                        cols="12"-->
<!--                        class="mb-2"-->
<!--                    >-->
<!--                        <h5 class="mb-0">-->
<!--                            Address-->
<!--                        </h5>-->
<!--                        <small class="text-muted">Enter Your Address.</small>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="Address"-->
<!--                            label-for="address"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="Address"-->
<!--                                rules="required"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="address"-->
<!--                                    v-model="address"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="98 Borough bridge Road, Birmingham"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="Landmark"-->
<!--                            label-for="landmark"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="Landmark"-->
<!--                                rules="required"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="landmark"-->
<!--                                    v-model="landMark"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="Borough bridge"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="Pincode"-->
<!--                            label-for="pincode"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="Pincode"-->
<!--                                rules="required"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="pincode"-->
<!--                                    v-model="pincode"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    type="number"-->
<!--                                    placeholder="658921"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="City"-->
<!--                            label-for="city"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="City"-->
<!--                                rules="required"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="city"-->
<!--                                    v-model="city"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="Birmingham"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                </b-row>-->
<!--            </validation-observer>-->
<!--        </tab-content>-->

<!--        &lt;!&ndash; social link &ndash;&gt;-->
<!--        <tab-content-->
<!--            title="Social Links"-->
<!--            :before-change="validationFormSocial"-->
<!--        >-->
<!--            <validation-observer-->
<!--                ref="socialRules"-->
<!--                tag="form"-->
<!--            >-->
<!--                <b-row>-->
<!--                    <b-col-->
<!--                        cols="12"-->
<!--                        class="mb-2"-->
<!--                    >-->
<!--                        <h5 class="mb-0">-->
<!--                            Social Links-->
<!--                        </h5>-->
<!--                        <small class="text-muted">Enter Your Social Links</small>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="Twitter"-->
<!--                            label-for="twitter"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="Twitter"-->
<!--                                rules="required|url"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="twitter"-->
<!--                                    v-model="twitterUrl"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="https://twitter.com/abc"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="Facebook"-->
<!--                            label-for="facebook"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="Facebook"-->
<!--                                rules="required|url"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="facebook"-->
<!--                                    v-model="facebookUrl"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="https://facebook.com/abc"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="Google+"-->
<!--                            label-for="google-plus"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="Google+"-->
<!--                                rules="required|url"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="google-plus"-->
<!--                                    v-model="googleUrl"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="https://plus.google.com/abc"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                    <b-col md="6">-->
<!--                        <b-form-group-->
<!--                            label="LinkedIn"-->
<!--                            label-for="linked-in"-->
<!--                        >-->
<!--                            <validation-provider-->
<!--                                #default="{ errors }"-->
<!--                                name="LinkedIn"-->
<!--                                rules="required|url"-->
<!--                            >-->
<!--                                <b-form-input-->
<!--                                    id="linked-in"-->
<!--                                    v-model="linkedinUrl"-->
<!--                                    :state="errors.length > 0 ? false:null"-->
<!--                                    placeholder="https://linkedin.com/abc"-->
<!--                                />-->
<!--                                <small class="text-danger">{{ errors[0] }}</small>-->
<!--                            </validation-provider>-->
<!--                        </b-form-group>-->
<!--                    </b-col>-->
<!--                </b-row>-->
<!--            </validation-observer>-->
<!--        </tab-content>-->
    </form-wizard>

  </div>
</template>

<script>
import FormWizardOrgType01 from './FormWizardOrgType01.vue'
import FormWizardRegion1 from './FormWizardRegion1.vue'
import FormWizardCompany2 from './FormWizardCompany2.vue'
import FormWizardCategory4 from './FormWizardCategory4.vue'
import FormWizardDataSubj5 from './FormWizardDataSubj5.vue'
import FormWizardDataAct6 from './FormWizardDataAct6.vue'

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
import axios from "@/libs/axios";


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
      FormWizardCompany2,
      FormWizardRegion1,
      FormWizardCategory4,
      FormWizardOrgType01,
      FormWizardDataSubj5,
      FormWizardDataAct6,
  },
  data() {
    return {

    }
  },
  methods: {
    formSubmitted() {
        axios({
            url: '/api/pdf/generate',
            method: 'GET',
            responseType: 'blob', // important
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
