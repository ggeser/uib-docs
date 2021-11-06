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

        <!-- Category tab -->
        <tab-content
            title="Категории данных"
            :before-change="validationFormCategory"
        >
            <validation-observer
                ref="categoryRules"
                tag="form"
            >
                <form-wizard-category3 />
            </validation-observer>
        </tab-content>

        <!-- Region tab -->
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



        <!-- Company tab -->
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


        <!-- address  -->
        <tab-content
            title="Address"
            :before-change="validationFormAddress"
        >
            <validation-observer
                ref="addressRules"
                tag="form"
            >
                <b-row>
                    <b-col
                        cols="12"
                        class="mb-2"
                    >
                        <h5 class="mb-0">
                            Address
                        </h5>
                        <small class="text-muted">Enter Your Address.</small>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Address"
                            label-for="address"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Address"
                                rules="required"
                            >
                                <b-form-input
                                    id="address"
                                    v-model="address"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="98 Borough bridge Road, Birmingham"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Landmark"
                            label-for="landmark"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Landmark"
                                rules="required"
                            >
                                <b-form-input
                                    id="landmark"
                                    v-model="landMark"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="Borough bridge"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Pincode"
                            label-for="pincode"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Pincode"
                                rules="required"
                            >
                                <b-form-input
                                    id="pincode"
                                    v-model="pincode"
                                    :state="errors.length > 0 ? false:null"
                                    type="number"
                                    placeholder="658921"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="City"
                            label-for="city"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="City"
                                rules="required"
                            >
                                <b-form-input
                                    id="city"
                                    v-model="city"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="Birmingham"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                </b-row>
            </validation-observer>
        </tab-content>

        <!-- social link -->
        <tab-content
            title="Social Links"
            :before-change="validationFormSocial"
        >
            <validation-observer
                ref="socialRules"
                tag="form"
            >
                <b-row>
                    <b-col
                        cols="12"
                        class="mb-2"
                    >
                        <h5 class="mb-0">
                            Social Links
                        </h5>
                        <small class="text-muted">Enter Your Social Links</small>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Twitter"
                            label-for="twitter"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Twitter"
                                rules="required|url"
                            >
                                <b-form-input
                                    id="twitter"
                                    v-model="twitterUrl"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="https://twitter.com/abc"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Facebook"
                            label-for="facebook"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Facebook"
                                rules="required|url"
                            >
                                <b-form-input
                                    id="facebook"
                                    v-model="facebookUrl"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="https://facebook.com/abc"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Google+"
                            label-for="google-plus"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Google+"
                                rules="required|url"
                            >
                                <b-form-input
                                    id="google-plus"
                                    v-model="googleUrl"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="https://plus.google.com/abc"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="LinkedIn"
                            label-for="linked-in"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="LinkedIn"
                                rules="required|url"
                            >
                                <b-form-input
                                    id="linked-in"
                                    v-model="linkedinUrl"
                                    :state="errors.length > 0 ? false:null"
                                    placeholder="https://linkedin.com/abc"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                </b-row>
            </validation-observer>
        </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import FormWizardRegion1 from './FormWizardRegion1.vue'
import FormWizardCompany2 from './FormWizardCompany2.vue'
import FormWizardCategory3 from './FormWizardCategory3.vue'

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
    FormWizardCategory3,
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
      validationFormAddress() {
          return new Promise((resolve, reject) => {
              this.$refs.addressRules.validate().then(success => {
                  if (success) {
                      resolve(true)
                  } else {
                      reject()
                  }
              })
          })
      },
      validationFormSocial() {
          return new Promise((resolve, reject) => {
              this.$refs.socialRules.validate().then(success => {
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
