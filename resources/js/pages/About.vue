<template>
  <div id="abBox" class="bg-white col-10 dBox">
    <vs-col id="abtop" vs-align="center" vs-justify="center" vs-w="12" class="text-center">
      <p>
        الو اپل<br>
        مرکز تخصصی فروش و تعمیر<br>
        محصولات اپل<br>
        <vs-button id="scrlBtn" v-scroll-to="{el: '#topdiv', offset: 475}" type="relief" radius color="dark" icon="arrow_downward" />
      </p>
    </vs-col>
    <vs-divider id="topdiv" position="left" background="whitesmoke" color="black" class="fdiv">
      <vs-icon icon="apple" />
      <span class="spTitle">{{ $t('About') }}</span>
    </vs-divider>
    <vs-row id="abRow" vs-align="center" vs-type="flex" vs-justify="center" vs-w="10" vs-offset="1" class="text-justify mrg-0a">
      <vs-col vs-type="flex" vs-justify="space-between" vs-align="center" vs-lg="4" vs-md="4" vs-sm="11" vs-xs="11">
        <p>          مجموعه الو اپل با بيش از ١٠ سال سابقه ی فعاليت در خصوص محصولات اپل و دارای ٤ شعبه در شهر های تهران و اهواز،آماده پاسخگويی به تمام نياز های مرتبط با اپل بصورت كامل تخصصی از قبيل: <br></p>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-sm="11" vs-xs="11" vs-md="4" vs-lg="4">
        <vs-col vs-justify="center" vs-align="center" vs-sm="12" vs-xs="12" vs-md="9" vs-lg="9">
          <check-circle-icon /> تهيه ی محصولات اصلی اپل<br>
          <check-circle-icon /> لوازم جانبی<br>
          <check-circle-icon /> خدمات نرم افزاری<br>
          <check-circle-icon /> خدمات سخت افزاری<br>
          <check-circle-icon /> مشاوره فروش<br>
          بصورت حضوری و غير حضوری می باشد.
        </vs-col>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="start" vs-lg="4" vs-md="4" vs-sm="11" vs-xs="11">
        <p>
          شما ميتوانيد از طريق فرم درخواست سوالات خود را بپرسيد، تا كارشناسان ما در كوتاه ترين زمان ممكن پاسخگوی شما از هركجای كشور عزيزمان ايران باشند.
        </p>
      </vs-col>
    </vs-row>
    <vs-row id="abRow2" vs-align="justify" vs-type="flex" vs-justify="space-around" vs-w="12" class="text-justify">
      <vs-divider position="center" color="dark">
        <vs-icon icon="arrow_downward" />
      <!-- <span class="spTitle">{{ $t('About') }}</span> -->
      </vs-divider>
      <vs-col vs-type="flex" vs-justify="center" vs-align="start" vs-lg="5" vs-md="5" vs-xs="11" vs-sm="11">
        <div id="tehran">
          <h6><strong>تهران</strong></h6>
          <p class="addr">
            <strong>میدان تجریش</strong> - مجتمع تجاری ارگ - طبقه منفی ۱ - واحد ۱۰۳
          </p><p class="phone">
            <span class="lindent">+9821</span>  22396434
          </p>
          <p class="phone nopref">
            22397570
          </p>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="5" vs-md="5" vs-xs="11" vs-sm="11">
        <div id="ahwaz">
          <h6><strong>اهواز</strong></h6>
          <p class="addr">
            <strong>زیتون کارمندی</strong> - خ حجت - سیتی سنتر مهزیار
          </p><p class="phone ">
            <span class="lindent">+9861</span>  34425252-3
          </p>
          <p class="addr">
            <strong>کیانپارس</strong> - نبش خ ۳ شرقی - جنب بازار مرکزی
          </p><p  class="phone nopref">
            33920043-4
          </p>
          <p class="addr">
            <strong>گلستان</strong> - خ فروردین - روبروی مجتمع تفریحی ساحل
          </p><p class="phone nopref">
            33743336
          </p>
        </div>
      </vs-col>
    </vs-row>
  </div>
  <!-- <div id="aboutPart">

  </div> -->
</template>

<script>
import { CheckCircleIcon } from 'vue-feather-icons'
import Vue from 'vue'
import vscroll from 'vue-scrollto'
Vue.use(vscroll)
export default {
  name: 'About',
  components: {
    CheckCircleIcon
  },
  data () {
    return {
      aloimg: 'aloimg-about'
    }
  },
  layout: 'basic',
  mounted () {
    // this.$vs.loading.close()
  }
}
</script>

    <style scoped>
    #AboutUs-text svg {
                        width: 20px;
    }
    </style>
