<template>
  <div>
    <b-card-code
      title="Breadcrumb"
    >

      <b-breadcrumb class="breadcrumb-slash">
        <b-breadcrumb-item href="#home">
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo">
          Chat
        </b-breadcrumb-item>
        <b-breadcrumb-item active>
          Infos
        </b-breadcrumb-item>
      </b-breadcrumb>

<!--      <template #code>-->
<!--        {{ codeSlot }}-->
<!--      </template>-->
    </b-card-code>
  </div>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeSlot } from './code'

export default {
  components: {
    BCardCode,
    BBreadcrumb,
    BBreadcrumbItem,
    BCardText,
  },
  data: () => ({
    codeSlot,
  }),
}
</script>
