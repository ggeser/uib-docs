<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout="vertical"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="wizard-vertical mb-3"
      @on-complete="formSubmitted"
    >

      <!-- account datails tab -->
      <tab-content title="Регион">
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
                <b-form-group
                    label="Регион"
                    label-for="v-region"
                >
                    <v-select
                        id="v-region"
                        v-model="selectedRegion"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="regionName"
                        :selectable="option => ! option.value.includes('select_value')"
                        label="text"
                    />
                </b-form-group>
            </b-col>

<!--          <b-col md="6">-->
<!--            <b-form-group-->
<!--              label="Username"-->
<!--              label-for="v-username"-->
<!--            >-->
<!--              <b-form-input-->
<!--                id="v-username"-->
<!--                placeholder="johndoe"-->
<!--              />-->
<!--            </b-form-group>-->
<!--          </b-col>-->
<!--          <b-col md="6">-->
<!--            <b-form-group-->
<!--              label="Email"-->
<!--              label-for="v-email"-->
<!--            >-->
<!--              <b-form-input-->
<!--                id="v-email"-->
<!--                type="email"-->
<!--                placeholder="john.doe@email.com"-->
<!--              />-->
<!--            </b-form-group>-->
<!--          </b-col>-->
<!--          <b-col md="6">-->
<!--            <b-form-group-->
<!--              label="Password"-->
<!--              label-for="v-password"-->
<!--            >-->
<!--              <b-form-input-->
<!--                id="v-password"-->
<!--                type="password"-->
<!--                placeholder="Password"-->
<!--              />-->
<!--            </b-form-group>-->
<!--          </b-col>-->
<!--          <b-col md="6">-->
<!--            <b-form-group-->
<!--              label="Confirm Password"-->
<!--              label-for="v-c-password"-->
<!--            >-->
<!--              <b-form-input-->
<!--                id="v-c-password"-->
<!--                type="password"-->
<!--                placeholder="Re-type Password"-->
<!--              />-->
<!--            </b-form-group>-->
<!--          </b-col>-->
        </b-row>
      </tab-content>

      <!-- personal info tab -->
      <tab-content title="Personal Info">
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Personal Info
            </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="First Name"
              label-for="v-first-name"
            >

              <b-form-input
                id="v-first-name"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Last Name"
              label-for="v-last-name"
            >
              <b-form-input
                id="v-last-name"
                placeholder="Doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Country"
              label-for="v-country"
            >
              <v-select
                id="v-country"
                v-model="selectedCountry"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="v-language"
              label="Language"
            >
              <v-select
                id="Language"
                v-model="selectedLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :selectable="option => ! option.value.includes('select_value')"
                :options="languageName"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content title="Address">
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
              label-for="v-address"
            >
              <b-form-input
                id="v-address"
                placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Landmark"
              label-for="v-landmark"
            >
              <b-form-input
                id="v-landmark"
                placeholder="Borough bridge"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Pincode"
              label-for="v-pincode"
            >
              <b-form-input
                id="v-pincode"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="City"
              label-for="v-city"
            >
              <b-form-input
                id="v-city"
                placeholder="Birmingham"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- social link -->
      <tab-content title="Social Links">
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
              label-for="v-twitter"
            >
              <b-form-input
                id="v-twitter"
                placeholder="https://twitter.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Facebook"
              label-for="v-facebook"
            >
              <b-form-input
                id="v-facebook"
                placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Google+"
              label-for="v-google-plus"
            >
              <b-form-input
                id="v-google-plus"
                placeholder="https://plus.google.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="LinkedIn"
              label-for="v-linked-in"
            >
              <b-form-input
                id="v-linked-in"
                placeholder="https://linkedin.com/abc"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from "@/libs/axios";

export default {
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
        selectedRegion: 'Выберите регион',
        regionName: [
            { value: 'select_value', text: 'Выберите регион' },
            { value: 'reg001', text: 'Республика Башкортастан' },
            { value: 'reg002', text: 'Республика Татарстан' },
            { value: 'Canada', text: 'Canada' },
            { value: 'China', text: 'China' },
            { value: 'United States', text: 'United States' },
            { value: 'Brazil', text: 'Brazil' },
            { value: 'Australia', text: 'Australia' },
            { value: 'India', text: 'India' },
        ],

      selectedCountry: 'select_value',
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
        { value: 'India', text: 'India' },
      ],

      selectedLanguage: 'nothing_selected',
      languageName: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'English', text: 'English' },
        { value: 'Chinese', text: 'Mandarin Chinese' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Arabic', text: 'Arabic' },
        { value: 'Malay', text: 'Malay' },
        { value: 'Russian', text: 'Russian' },
      ],
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

        // let xhr = new XMLHttpRequest()
        // xhr.open('GET', '/api/pdf/generate', true)
        // xhr.setRequestHeader("Authorization", 'Bearer ' + this.token())
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        // xhr.responseType = 'arraybuffer'
        //
        // xhr.onload = function(e) {
        //     if (this.status === 200) {
        //         let blob = new Blob([this.response], { type:"application/pdf" })
        //         let link = document.createElement('a')
        //         link.href = window.URL.createObjectURL(blob)
        //         link.download = 'Results.pdf'
        //         link.click()
        //
        //         // this.$toast({
        //         //   component: ToastificationContent,
        //         //   props: {
        //         //     title: 'Form Submitted',
        //         //     icon: 'EditIcon',
        //         //     variant: 'success',
        //         //   },
        //         // })
        //     }
        // }

        // return new Promise((resolve, reject) => {
        //     axios
        //         .get('api/pdf/generate')
        //         .then(
        //             this.$toast({
        //               component: ToastificationContent,
        //               props: {
        //                 title: 'Form Submitted',
        //                 icon: 'EditIcon',
        //                 variant: 'success',
        //               },
        //             })
        //         )
        //         .catch(error => reject(error))
        // })

        // return new Promise((resolve, reject) => {
        //     axios
        //         .get('api/pdf/generate', {params: params })
        //         .then(response => resolve(response))
        //         .catch(error => reject(error))
        // })
      // this.$toast({
      //   component: ToastificationContent,
      //   props: {
      //     title: 'Form Submitted',
      //     icon: 'EditIcon',
      //     variant: 'success',
      //   },
      // })
    },
  },
}
</script>
