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
                    :key="item.id"
                    ref="row"
                >
<!--                    :id="item.id"-->


                    <b-col md="6">
                        <b-form-group
                            label="Адрес"
                            label-for="item-name"
                        >
                            <validation-provider
                                #default="{ errors }"
                                rules="required"
                            >
                                <b-form-input
                                    type="text"
                                    v-model="item.address"
                                    :state="errors.length > 0 ? false:item.address.length >= 1 ? true:null"
                                    placeholder="Адрес"
                                    @input="updateStore"
                                />
<!--                                :id=item.id-->

                                <div v-if="( errors[0]  == null) ">
                                    <br>
                                </div>
                                <div v-else>
                                    <small class="text-danger">
                                        Поле обязательно для заполнения
                                    </small>
                                </div>
<!--                                {{ item.id }} - {{ index }} - {{ item.address }}-->
                            </validation-provider>
                        </b-form-group>
                    </b-col>

                    <b-col md="3">
                        <b-form-group
                            label="Имеется собственный ЦОД?"
                            label-for="item-name"
                        >
                        <validation-provider
                            #default="{ errors }"
                            rules="required"
                        >
                                <b-form-radio-group
                                    v-model="item.zod"
                                    :options="item.options"
                                    class="demo-inline-spacing"
                                    @change="updateStore"
                                >
                                </b-form-radio-group>

<!--                            <div v-if="(item.zod.length >= 1) || ( errors[0]  == null) ">-->
                            <div v-if="( errors[0]  == null) ">
                                <br>
                            </div>
                            <div v-else>
                                <small class="text-danger">
                                    Пожалуйста выберите
                                </small>
                            </div>
                        </validation-provider>

<!--                        {{ item.id }} - {{ index }} - {{ item.address }} - {{ item.zod }} - {{ value }}-->
                        </b-form-group>
                    </b-col>

                    <!-- Remove Button -->
                    <b-col
                        lg="2"
                        md="3"
                        class="mb-50"
                    >
                        <div v-if="( index !== 0) ">
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
                                <span>Удалить</span>
                            </b-button>
                        </div>
                    </b-col>
<!--                    <b-col cols="12">-->
<!--                        <hr>-->
<!--                    </b-col>-->

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
                <span>Добавить</span>
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
    BFormRadioGroup,
    BFormRadio,

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
        BFormRadioGroup,
        BFormRadio,
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
            // items: [{
            //     id: "0",
            //     address: '',
            //     zod: null,
            //     options: [
            //         { text: 'Да',    value: 'val0' },
            //         { text: 'Нет',   value: 'val1' },
            //     ],
            // }],
            // items: this.$store.state.q12items,

            // nextTodoId: 1,

            required,
        }
    },
    mounted() {
        this.initTrHeight();

        this.trSetHeight(93)

        let len = 1;
        if ( this.items.length !== null && this.items.length >= 1 ) { len = this.items.length; }

        this.$nextTick(() => {
            this.trSetHeight(93 * len)
        })
    },
    created() {
        window.addEventListener('resize', this.initTrHeight)
    },
    destroyed() {
        window.removeEventListener('resize', this.initTrHeight)
    },

    computed: {
        items: {
            get() { return this.$store.state.q12items; },
            set(value) { this.$store.commit('setq12items', value); }
        },

        nextTodoId: {
            get() { return this.$store.state.q12nextTodoId; },
            set(value) { this.$store.commit('setq12nextTodoId', value); }
        },
    },
    methods: {
        updateStore() {
            this.$store.commit('setq12items', this.items )
        },

        state(index,errors) {
            return this.items[index].address.length >= 1 ? true:null;
            // return errors.length > 0 ? false:items[index].address.length >= 1 ? true:null;
        },

        repeateAgain() {
            this.items.push({
                // id: this.nextTodoId += this.nextTodoId,
                id: this.nextTodoId.toString(),
                address: '',
                zod: null,
                options: this.items[0].options,
            })

            this.nextTodoId += 1;

            this.$nextTick(() => {
                this.trAddHeight(this.$refs.row[0].offsetHeight)
            })

            this.updateStore();
        },
        removeItem(index) {
            this.items.splice(index, 1)
            this.trTrimHeight(this.$refs.row[0].offsetHeight)

            this.updateStore();
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


