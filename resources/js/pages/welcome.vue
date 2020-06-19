<template>
  <div id="homeRow" class="col-11 mrg-0a">
    <div class="text-center" />
    <vs-row>
      <vs-col id="homeTitle" class="text-right text-white" vs-align="center" vs-justify="center" vs-xs="12" vs-sm="12" vs-lg="6">
        <div class="title">
          <h1>مرکز خدمات الواپل</h1>
          <h4>سخت افزار / نرم افزار / مشاوره خرید</h4>
        </div>
      </vs-col>
      <vs-col id="homeBtns" vs-align="center" vs-justify="center" vs-xs="12" vs-sm="12" vs-lg="6">
        <a href="/request">
          <vs-button type="filled" color="success" icon="add_circle" size="large">
            &emsp;درخواست جدید
          </vs-button>
        </a><br>
        <a href="/statuscheck">
          <vs-button type="filled" icon="check_circle" size="large">
            &emsp;پیگیری درخواست
          </vs-button></a>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'basic',
  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
</style>
