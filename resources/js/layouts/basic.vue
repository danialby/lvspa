
<template>
  <div>
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar"
    >
      <div slot="title">
        <vs-navbar-title>
          <span id="a-icon" />
          <span id="a-logo" />
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="/">{{ $t('Home') }}</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="/request">{{ $t('Request') }}</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="/statuscheck">{{ $t('Status') }}</a>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <a href="/about">{{ $t('About') }}</a>
      </vs-navbar-item>
    </vs-navbar>
    <div id="statHero" ref="stataHero" class="d-flex aloimg" :class="aloimg" />
    <div id="basicLayout" ref="bl" class="basic-layout d-flex align-items-center justify-content-center m-0">
      <transition name="dBox" mode="out-in">
        <child />
      </transition>
    </div>
  </div>
</template>

<script>
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Vue from 'vue'
Vue.use(Vuesax)
export default {
  name: 'BasicLayout',
  data: () => ({
    colorx: '#000000',
    currentUrl: '',
    aloimg: '',
    indexActive: ''
  }),
  watch: {
    indexActive () {
      this.$vs.loading({
        background: 'light',
        color: 'dark',
        text: 'شکیبا باشید...'
      })
    }
  },
  created () {
    this.aloimga()
    this.$vs.loading({
      background: 'light',
      color: 'dark',
      text: 'شکیبا باشید...'
    })
    setTimeout(() => {
      this.$vs.loading.close()
    }, 3000)
  },
  methods: {
    aloimga () {
      this.currentUrl = window.location.pathname
      if (this.currentUrl === '/') {
        this.indexActive = '0'
        this.aloimg = 'aloimg-home'
      }
      if (this.currentUrl === '/request') {
        this.indexActive = '1'
        this.aloimg = 'aloimg-request'
      }
      if (this.currentUrl === '/statuscheck') {
        this.indexActive = '2'
        this.aloimg = 'aloimg-status'
      }
      if (this.currentUrl === '/about') {
        this.indexActive = '3'
        this.aloimg = 'aloimg-about'
      }
      // }
    }
  }
}
</script>

<style scoped>
.basic-layout {
    font-weight: 100;
    position: relative;
    -webkit-transform: translateY(100vh);
    transform: translateY(100vh);
}
  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
.myNavbar {
    color: #b7b7b6;
    background-color: #000000cc !important;
    direction: ltr;
    text-align: center;
    position: fixed;
}
.vs-con-items
{
  direction: rtl;
}
.stat-open
{
  -webkit-transform: translateY(0px) !important;
    transform: translateY(0px) !important;
}
.myNavbar .vs-navbar--btn-responsive .line--3
{
  display: none;
}
.myNavbar .vs-navbar--btn-responsive.active-menu .line--3 {
  display: block;
}
</style>
