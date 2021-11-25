<template>
    <div class="center-window">

        <b-card
            no-body
            class="business-card"
        >
            <b-card-header class="pb-1">
                <b-card-title>Fail</b-card-title>
            </b-card-header>

            <b-card-body>
                <b-card-text>Оплата не прошла</b-card-text>
                <h6 class="mb-75">
                    Fail
                </h6>

                Fail



                <!-- button -->
                <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    block
                    @click="goToUrl"
                >
                    Вернуться к корзине
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

            required,
            email,

        }
    },
    computed: {

    },
    methods: {
        goToUrl() {
            router.push('checkout')
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
