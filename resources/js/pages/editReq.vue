<template>
  <form id="StatCheckForm">
    <label for="">ویرایش</label>
    <vs-switch v-model="EditSwitch" />
    <label id="lreqCode" class="mylabel">کد درخواست :</label>
    <vs-input v-model="reqCodeV" icon="add" :disabled="!EditSwitch" :value="reqCodeV" />
    <vs-button v-if="EditSwitch">
      ثبت کد
    </vs-button>
  </form>
</template>

<script>
export default {
  name: 'EditReq',
  props: ['reqCode'],
  data () {
    return {
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content'),
      reqCodeV: this.reqCode,
      EditSwitch: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
