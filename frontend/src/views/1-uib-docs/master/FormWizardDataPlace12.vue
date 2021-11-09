<template>
        <div>
            <b-row>
                <b-col
                    cols="12"
                    class="mb-2"
                >
                    <h5 class="mb-0">
                        Места хранения баз персональных данных
                    </h5>
                    <small class="text-muted">Введите все места хранения баз персональных данных.</small>
                </b-col>
            </b-row>

            <b-form
                ref="form"
                :style="{height: trHeight}"
                class="repeater-form"
                @submit.prevent="repeateAgain"
            >

                <!-- Row Loop -->
                <b-row
                    v-for="(item, index) in items"
                    :id="item.id"
                    :key="item.id"
                    ref="row"
                >

                    <!-- Item Name -->
                    <b-col md="6">
                        <b-form-group
                            label="Адрес"
                            label-for="item-name"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Адрес"
                                rules="required"
                            >
<!--                                ////t -->
                                <b-form-input
                                    id=item.id
                                    type="text"
                                    v-model="item.address"

                                    placeholder="Адрес"
                                />
<!--                                :state="errors.length > 0 ? false:item.address.length >= 1 ? true:null"-->

                                {{ item.id }} - {{ index }} - {{ item.address }}
                            </validation-provider>
                        </b-form-group>
                    </b-col>

                    <!-- Remove Button -->
                    <b-col
                        lg="2"
                        md="3"
                        class="mb-50"
                    >
                        <b-button
                            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                            variant="outline-danger"
                            class="mt-0 mt-md-2"
                            @click="removeItem(index)"
                        >
                            <feather-icon
                                icon="XIcon"
                                class="mr-25"
                            />
                            <span>Delete</span>
                        </b-button>
                    </b-col>
<!--                    <b-col cols="12">-->
<!--                        <hr>-->
<!--                    </b-col>-->

                    {{ items[index].address }}
                </b-row>
            </b-form>

            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                @click="repeateAgain"
            >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New</span>
            </b-button>



        </div>

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
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,

} from 'bootstrap-vue'
import { required } from '@validations'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'


export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        FormWizard,
        TabContent,
        BRow,
        BCol,
        BForm,
        BFormGroup,
        BFormInput,
        BButton,
        vSelect,
        Cleave,
        BFormInvalidFeedback,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,
    },

    directives: {
        Ripple,
    },

    mixins: [heightTransition],

    data() {
        return {
            items: [{
                id: "0",
                address: '',
            }],
            nextTodoId: 1,

            required,
        }
    },
    mounted() {
        this.initTrHeight()
    },
    created() {
        window.addEventListener('resize', this.initTrHeight)
    },
    destroyed() {
        window.removeEventListener('resize', this.initTrHeight)
    },

    methods: {
        repeateAgain() {
            this.items.push({
                // id: this.nextTodoId += this.nextTodoId,
                id: this.nextTodoId,
            })

            this.nextTodoId += 1;

            this.$nextTick(() => {
                this.trAddHeight(this.$refs.row[0].offsetHeight)
            })
        },
        removeItem(index) {
            this.items.splice(index, 1)
            this.trTrimHeight(this.$refs.row[0].offsetHeight)
        },
        initTrHeight() {
            this.trSetHeight(null)
            this.$nextTick(() => {
                this.trSetHeight(this.$refs.form.scrollHeight)
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.repeater-form {
    overflow: hidden;
    transition: .35s height;
}
</style>


