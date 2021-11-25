<template>
    <div class="center-window">

        <b-card
            no-body
            class="business-card"
        >
            <b-card-header class="pb-1">
                <b-card-title>Success</b-card-title>
            </b-card-header>

            <b-card-body>
                <b-card-text>Здесь выберите необходимые для вас компоненты</b-card-text>
                <h6 class="mb-75">
                    Базовая стоимость {{ baseCost }} руб
                </h6>

                Success



                <!-- button -->
                <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    block
                >
                    Перейти к оплате
                </b-button>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText, BCard,
    BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback, BFormCheckbox,
    BCardHeader, BCardTitle, BCardBody, BBadge,
    VBPopover,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import router from '@/router'
import axios from "@/libs/axios";
import Ripple from 'vue-ripple-directive'

export default {
    directives: {
        Ripple,
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
        BCardHeader, BCardTitle, BCardBody, BBadge,
    },
    data() {
        return {

            // selected: [],

            required,
            email,

        }
    },
    computed: {

        state() {
            return this.selected.length >= 1
        },

        selected: {
            get() { return this.$store.state.checkoutSelect; },
            set(value) { this.$store.commit('setCheckoutSelect', value); }
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
                        q0select: this.$store.state.q0select,       // 0
                        orgType: this.$store.state.orgType,         // 1
                        region: this.$store.state.region,           // 2
                        rekv: this.$store.state.rekv,               // 3
                        q4Selected: this.$store.state.q4Selected,   // 4
                        q5select: this.$store.state.q5select,       // 5
                        q6Selected: this.$store.state.q6Selected,   // 6
                        q7select: this.$store.state.q7select,       // 7
                        q9select: this.$store.state.q9select,       // 9
                        q10items: this.$store.state.q10items,       // 10
                        trans: this.$store.state.trans,             // 11
                        q12items: this.$store.state.q12items,       // 12
                        q13items: this.$store.state.q13items,       // 13
                        checkoutSelect: this.$store.state.checkoutSelect,
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
    },
}
</script>




<style scoped>
.myclass
{
    padding-right: 10px;
}

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
