<template>
  <div>
    <!-- search input -->
    <section id="knowledge-base-search">
      <b-card
        no-body
        class="knowledge-base-bg text-center"
        :style="{backgroundImage: `url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="card-body">
          <h2 class="text-primary">
            Супер генератор документов
          </h2>
          <b-card-text class="mb-2">
            <span>Подробнее расскажем в блоке снизу </span>
            <span class="font-weight-bolder">Раз, Два</span>
          </b-card-text>

            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="gradient-success"
                :to="{ name: 'select'}"
            >
                Начать создание документов
            </b-button>

        </b-card-body>
      </b-card>
    </section>
    <!--/ search input -->

    <section id="knowledge-base-content">

      <!-- content -->
      <b-row class="kb-search-content-info match-height">
        <b-col
          v-for="item in filteredKB"
          :key="item.id"
          md="4"
          sm="6"
          class="kb-search-content"
        >
          <b-card
            class="text-center cursor-pointer"
            :img-src="item.img"
            :img-alt="item.img.slice(5)"
            img-top
            @click="$router.push({ name: 'pages-knowledge-base-category', params: { category: item.category } })"
          >
            <h4>{{ item.title }}</h4>
            <b-card-text class="mt-1">
              {{ item.desc }}
            </b-card-text>
          </b-card>
        </b-col>
        <b-col
          v-show="!filteredKB.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardBody, BForm, BInputGroup, BFormInput, BCardText, BInputGroupPrepend, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import '@/@fake-db/db' ///t

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardText,
    BForm,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BButton,
  },
  directives: {
      Ripple,
  },
  data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [],

    }
  },
  computed: {
    filteredKB() {
      const knowledgeBaseSearchQueryLower = this.knowledgeBaseSearchQuery.toLowerCase()
      return this.kb.filter(item => item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) || item.desc.toLowerCase().includes(knowledgeBaseSearchQueryLower))
    },
  },
  created() {
    this.$http.get('/kb/data/knowledge_base').then(res => { this.kb = res.data })
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-knowledge-base.scss';
</style>
