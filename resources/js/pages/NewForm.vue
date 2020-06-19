
<template>
  <div id="_orderForm" ref="reqCon" class="bg-white col-10 col-xl-6 dBox justify-content-center align-items-center">
    <vs-col id="topz" vs-align="center" vs-justify="center" vs-lg="6" vs-sm="12" vs-xs="12" class="text-justify text-white">
      <h5>الو اپل در خدمت شماست</h5>
      <p>
        شما ميتوانيد از طريق فرم درخواست سوالات خود را بپرسيد، تا كارشناسان ما در كوتاه ترين زمان ممكن پاسخگوی شما از هركجای كشور عزيزمان ايران باشند.
      </p>
    </vs-col>
    <vs-divider id="topdiv" position="left" background="whitesmoke" color="black" class="fdiv">
      <vs-icon icon="subject" />
      <span class="spTitle">{{ $t('Request') }}</span>
    </vs-divider>
    <form id="requestForm">
      <vs-row vs-w="12" class="reqRow">
        <vs-col vs-lg="4" vs-md="3" vs-sm="6" vs-xs="11">
          <vs-divider position="left" background="whitesmoke" color="black">
            <vs-icon icon="subject" />
            <span class="spTitle">نوع درخواست</span>
          </vs-divider>
          <vs-select
            id="subjselBox"
            v-model="subjV"
            :danger="subNeeded"
            danger-text="عنوان درخواست الزامیست"
            placeholder="انتخاب کنید..."
            name="subject"
            type="line"
            :disabled="coded"
          >
            <vs-select-item v-for="item,index in reqOptions" :key="index" :value="item.value" :text="item.text" />
          </vs-select>
          <vs-divider position="left" background="whitesmoke" color="black">
            <vs-icon icon="person_outline" />
            <span class="spTitle">نام و نام خانوادگی</span>
          </vs-divider>
          <vs-input
            v-model="fullV"
            :danger="fNeeded"
            danger-text="نام و نام خانوادگی الزامیست"
            :disabled="coded"
          />
          <vs-divider position="left" background="whitesmoke" color="black">
            <vs-icon icon="phone_iphone" />
            <span class="spTitle">موبایل</span>
          </vs-divider>
          <vs-input
            v-model="mobileV"
            danger-text="شماره موبایل الزامیست"
            :danger="mobNeeded"
            placeholder="09123456789"
            maxlength="11"
            :disabled="coded"
          />
          <div id="emailPart">
            <vs-divider position="left" background="whitesmoke" color="black">
              <span class="spTitle"><vs-icon icon="alternate_email" />ایمیل</span>
            </vs-divider>
            <vs-input
              id="emailTextBox"
              v-model="emailV"
              danger-text="ایمیل الزامیست"
              :danger="mailNeeded"
              placeholder="info@aloapple.com"
              class="eng"
              name="email"
              type="email"
              :disabled="coded"
            />
          </div>
          <vs-divider position="left" background="whitesmoke" color="black">
            <span class="spTitle">
              <vs-icon icon="reply_all" /> نحوه پاسخگویی
            </span>
          </vs-divider>
          <vs-radio
            id="callCheckBox"
            v-model="contactType"
            color="primary"
            vs-value="Call"
            :disabled="coded"
          >
            تماس تلفنی
          </vs-radio>
          <vs-radio
            id="emailCheckBox"
            v-model="contactType"
            color="primary"
            vs-value="Email"
            :disabled="coded"
          >
            ایمیل
          </vs-radio>
          <vs-radio
            id="ticketCheckBox"
            v-model="contactType"
            color="primary"
            disabled
            vs-value="Ticket"
          >
            تیکت (بزودی)
          </vs-radio>
          <vs-divider position="left" background="whitesmoke" color="black">
            <span class="spTitle">
              <vs-icon icon="perm_contact_calendar" /> زمان تماس پیشنهادی :
            </span>
          </vs-divider>
          <vs-input
            id="idatea"
            v-model="datetime"
            icon-before="true"
            icon="event"
            readonly="true"
            placeholder="0000/00/00"
            :disabled="coded"
          />
          <vs-input
            id="itimea"
            v-model="dtime"
            icon-before="true"
            icon="schedule"
            readonly="true"
            placeholder="00:00"
            :disabled="coded"
          />
          <vpdp
            id="idate"
            v-model="datetime"
            name="idate"
            format="dddd jYYYY/jMM/jDD"
            input-class="myinputB"
            element="idatea"
            :min="minTime"
            :max="maxTime"
            color="#d1a866"
            type="date"
            append-to="#app"
          />

          <vpdp
            v-if="datetime != ''"
            id="itime"
            v-model="dtime"
            name="itime"
            format="HH:mm a"
            element="itimea"
            min="10:00"
            max="23:00"
            input-class="myinputB"
            :jump-minute="15"
            :round-minute="true"
            color="#00acc1"
            type="time"
            append-to="#app"
          />
        </vs-col>
        <vs-col id="modelCol" vs-lg="4" vs-md="3" vs-sm="6" vs-xs="11" class="text-right">
          <vs-divider position="left" background="whitesmoke" color="black">
            <vs-icon icon="devices_other" />
            <span class="spTitle">نوع دستگاه</span>
          </vs-divider>
          <vs-select
            v-model="selectedType"
            danger-text="نوع دستگاه الزامی است"
            :danger="modNeeded"
            placeholder="..."
            name="dvt"
            :disabled="coded || !(subjV < 3 && subjV > 0) || subjV === 0"
            class="eng"
          >
            <vs-select-item
              v-for="d in devType"
              :key="d.label.value"
              :is-selected.sync="d.isSelected"
              :value="d.label.value"
              :text="d.label.text"
            />
          </vs-select>
          <vs-divider position="left" background="whitesmoke" color="black">
            <vs-icon icon="gamepad" />
            <span class="spTitle">مدل دستگاه</span>
          </vs-divider>
          <vs-select v-model="selectedOption"
                     :disabled="modelOptions === [] || !(subjV < 3 && subjV > 0) || subjV === 0"
                     danger-text="مدل دستگاه الزامی است"
                     :danger="modlNeeded"
                     placeholder="..."
                     name="dvl"
                     class="eng"
          >
            <vs-select-item v-for="op in modelOptions"
                            :key="op.value"
                            :value="op.value"
                            :text="op.text"
            />
          </vs-select>
        </vs-col>
        <vs-col id="lastCol" vs-lg="4" vs-md="3" vs-sm="6" vs-xs="11">
          <vs-divider position="left" background="whitesmoke" color="black">
            <span class="spTitle">
              <vs-icon icon="note" /> خلاصه درخواست :
            </span>
          </vs-divider>
          <vs-textarea id="detTextBox"
                       v-model="detV" name="details"
                       label="توضیحات خود را بنویسید"
                       class="text-right"
                       :disabled="coded"
          />
          <div v-if="detNeeded" class="con-text-validation span-text-validation-danger vs-input--text-validation-span v-enter-to" style="height: 22px; text-align: right;">
            <span class="span-text-validation"> خلاصه درخواست الزامی است </span>
          </div>
          <!-- <vs-divider position="left" background="whitesmoke" color="black">
            <span class="spTitle">
              <vs-icon icon="cloud_upload" /> ضمیمه
            </span>
          </vs-divider>
          <p class="headDesc">
            در صورت لزوم فایل مربوط به درخواست خود را آپلود کنید
          </p>
          <vs-upload id="upBox" single-upload multiple enctype="multipart/form-data" text="انتخاب فایل..." action="/UploadImg" limit="1" automatic accept="image/*" @on-success="successUpload()" /> -->
        </vs-col>
      </vs-row>
      <vs-divider position="center" icon="arrow_downward" />
      <vs-row class="reqRow justify-content-center align-items-center">
        <vs-col vs-xs="12" vs-sm="12" vs-md="4" vs-lg="4">
          <vs-button id="btnSMS"
                     ref="loadableButton"
                     name="sendSMS"
                     type="filled"
                     color="dark"
                     class="vs-con-loading__container"
                     vslor="primary"
                     :disabled="coded"
                     @click="validate()"
          >
            {{ smsText }}
          </vs-button>
          <vs-divider position="left" background="whitesmoke" color="black">
            <span class="spTitle">
              <vs-icon icon="confirmation_number" /> کد تأیید :
            </span>
          </vs-divider>
          <vs-input id="codeTextBox"
                    v-model="codeBox"
                    :disabled="!coded"
                    :success="coded"
                    success-text="کد چهاررقمی برای شما ارسال شده"
                    :danger="nopeCode === true"
                    danger-text="کد وارد شده اشتباه است"
                    placeholder="_ _ _ _"
                    name="codaBox"
          />
          <vs-button id="sendBtn"
                     ref="sendBtn"
                     name="sendSMS"
                     type="filled"
                     color="primary"
                     class="vs-con-loading__container"
                     vslor="dark"
                     :disabled="codeBox.length < 4"
                     @click="codeCheck()"
          >
            ارسال
          </vs-button>
          <input type="hidden" name="_token" :value="csrf">
        </vs-col>
      </vs-row>
      <vs-prompt
        cancel-text="خوب!"
        button-accept="false"
        color="success"
        button-cancel="line"
        :active.sync="codeSuccPrompt"
        title="ارسال کد"
        class="text-right"
      >
        کد تأیید به شماره شما ارسال شد
      </vs-prompt>

      <vs-prompt
        accept-text="دوباره..."
        cancel-text="لغو"
        button-accept="line"
        button-cancel="line"
        color="error"
        :active.sync="codeErrPrompt"
        title="ارسال کد"
        class="text-right"
        @accept="validate()"
      >
        خطا در ارسال کد...
      </vs-prompt>

      <vs-prompt
        cancel-text="خوب!"
        button-accept="false"
        color="success"
        button-cancel="line"
        :active.sync="reqSuccPrompt"
        title="ثبت درخواست"
        class="text-right"
        @cancel="forceReset()"
      >
        درخواست شما با موفقیت ثبت شد
      </vs-prompt>

      <vs-prompt
        accept-text="دوباره..."
        cancel-text="لغو"
        button-accept="line"
        button-cancel="line"
        color="error"
        :active.sync="reqErrPrompt"
        title="ثبت درخواست"
        class="text-right"
        @accept="sendy()"
      >
        خطا در ثبت درخواست
      </vs-prompt>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import vscroll from 'vue-scrollto'
import moment from 'moment-jalaali'
import axios from 'axios'
Vue.use(vscroll)
export default {
  name: 'RequestForm',
  layout: 'basic',
  data () {
    return {
      smsText: 'ارسال کد',
      fNeeded: false,
      subNeeded: false,
      mobNeeded: false,
      detNeeded: false,
      modNeeded: false,
      modlNeeded: false,
      mailNeeded: false,
      coded: false,
      formSentable: false,
      nopeCode: false,
      // uploadedFiles: [],
      fullV: '',
      mobileV: '',
      emailV: '',
      subjV: 0,
      datetime: '',
      dtime: '',
      detV: '',
      reqCode: '',
      contactType: 'Call',
      codeSuccPrompt: false,
      codeErrPrompt: false,
      reqSuccPrompt: false,
      reqErrPrompt: false,
      codeBox: '',
      devType: [
        {
          label: { text: 'iPhone', value: 1 },
          options: [
            { text: 'SE 2', value: 1 },
            { text: '11 Pro Max', value: 2 },
            { text: '11 Pro', value: 3 },
            { text: '11', value: 4 },
            { text: 'Xs Max', value: 5 },
            { text: 'Xs', value: 6 },
            { text: 'Xʀ', value: 7 },
            { text: 'X', value: 8 },
            { text: '8+', value: 9 },
            { text: '8', value: 10 },
            { text: '7+', value: 11 },
            { text: '7', value: 12 },
            { text: 'SE', value: 13 },
            { text: '6S+', value: 14 },
            { text: '6s', value: 15 },
            { text: '6+', value: 16 },
            { text: '5S', value: 17 },
            { text: '5C', value: 18 },
            { text: '5', value: 19 }
          ]
        },
        {
          label: { text: 'iPad', value: 2 },
          options: [
            { text: 'iPad Mini', value: 1 },
            { text: 'iPad 5/6/7', value: 2 },
            { text: 'iPad Air', value: 3 },
            { text: 'iPad Pro', value: 4 },
            { text: 'Other', value: 5 }
          ]
        },
        {
          label: { text: 'MacBook', value: 3 },
          options: [
            { text: 'MacBook', value: 1 },
            { text: 'MacBook Air', value: 2 },
            { text: 'MacBook Pro', value: 3 },
            { text: 'Mac Mini', value: 4 },
            { text: 'iMac', value: 5 },
            { text: 'Other', value: 6 }
          ]
        },
        {
          label: { text: 'AirPods', value: 4 },
          options: [
            { text: 'AirPods 1', value: 1 },
            { text: 'AirPods 2', value: 2 },
            { text: 'AirPods 2 Wireless Case', value: 3 },
            { text: 'AirPods Pro', value: 4 },
            { text: 'Other', value: 5 }
          ]
        },
        {
          label: { text: 'Apple Watch', value: 5 },
          options: [
            { text: '1 Series', value: 1 },
            { text: '2 Series', value: 2 },
            { text: '3 Series', value: 3 },
            { text: '4 Series', value: 4 },
            { text: '5 Series', value: 5 },
            { text: 'Other', value: 6 }
          ]
        }
      ],
      reqOptions: [
        { text: 'مشکلات سخت افزاری', value: 1 },
        { text: 'مشکلات نرم افزاری', value: 2 },
        { text: 'مشاوره خرید', value: 3 },
        { text: 'سایر', value: 4 }
      ],
      selectedType: -1,
      selectedOption: -1,
      sentcode: '',
      minTime: moment().add(1, 'days').format('jYYYY/jMM/jDD'),
      maxTime: moment().add(10, 'days').format('jYYYY/jMM/jDD'),
      modelOptions: [],
      aloimg: 'aloimg-request',
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content'),
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      // mobreg: /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/
    }
  },
  watch: {
    selectedType () {
      this.modelOptions = this.devType[this.selectedType - 1].options
      this.modelKey += 1
    }
  },
  mounted () {
    // this.$vs.loading.close()
  },
  methods: {
    opensmsLoading () {
      this.$vs.loading({
        background: 'dark',
        color: '#fff',
        container: this.$refs.loadableButton.$el,
        scale: 0.45
      })
      this.smsText = 'ارسال...'
      this.reqSMS()
    },
    openreqLoading () {
      this.$vs.loading({
        background: 'primary',
        color: '#fff',
        container: this.$refs.sendBtn.$el,
        scale: 0.45
      })
      this.smsText = 'صبر کنید...'
      this.sendy()
    },
    isEmailValid: function () {
      return (this.emailV === '') ? '' : !!(this.reg.test(this.emailV))
    },
    reqSMS () {
      axios
        .get('/reqInit/' + this.mobileV)
        .then(res => {
          this.$vs.loading.close(this.$refs.loadableButton.$el)
          this.smsText = 'ارسال شد'
          this.coded = true
        })
    },
    codeCheck () {
      if (this.codeBox.length === 4) {
        var ccode = this.getCookie('reqsentCode')
        if (ccode === this.codeBox) {
          this.formSentable = true
          this.openreqLoading()
        } else {
          this.nopeCode = true
        }
      }

      // $('#checkmark').toggleClass('dspl-n')
      // $('#requestcode').prop('disabled', true)
      // $('#requestcode').removeClass('dsbld')
      // $('#sendReq').prop('disabled', false)
      // $('#sendReq').removeClass('dsbld')
      // $('#sendReq').addClass('pop')
    },
    validate () {
      if (this.fullV.length < 3) { this.fNeeded = true } else { this.fNeeded = false }
      if (this.subjV === 0) { this.subNeeded = true } else { this.subNeeded = false }
      if (this.mobileV.length < 11) { this.mobNeeded = true } else { this.mobNeeded = false }
      if (!this.isEmailValid()) { this.mailNeeded = true } else { this.mailNeeded = false }
      if (this.detV.length < 1) { this.detNeeded = true } else { this.detNeeded = false }
      if (this.subjV < 3 && this.subjV !== 0) {
        if (this.selectedType === -1) { this.modNeeded = true } else { this.modNeeded = false }
        if (this.selectedOption === -1) { this.modlNeeded = true } else { this.modlNeeded = false }
        // this.sendsms()
      }
      if (!this.fNeeded && !this.subNeeded && !this.mobNeeded && !this.mailNeeded && !this.detNeeded) {
        if (this.subjV > 2) {
          this.opensmsLoading()
        } else {
          if (this.subjV < 3) {
            if (this.selectedType === -1) { this.modNeeded = true } else { this.modNeeded = false }
            if (this.selectedOption === -1) { this.modlNeeded = true } else { this.modlNeeded = false }
            if (!this.modNeeded && !this.modlNeeded) {
              this.opensmsLoading()
            } else {
              this.$scrollTo('#modelCol')
            }
          }
        }
      } else {
        this.$scrollTo('#basicLayout')
      }
    },
    fillmodel (devaType) {
      this.modelOptions = this.devType[devaType].options
    },
    getCookie (cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
    sendy () {
      if (this.formSentable) {
        var fullname = this.fullV
        var subject = this.subjV
        var calldate = this.datetime
        var calltime = this.dtime
        var contactType = this.contactType
        var email = this.emailV
        var mobile = this.mobileV
        if (this.subjV < 3) {
          var modelt = this.devType[this.selectedType - 1].label.text
          var modell = this.modelOptions[this.selectedOption - 1].text
        }
        var model
        if (!modelt || modelt === '') {
          model = 'NoModel'
        } else {
          model =
            modelt +
            '   ' +
            modell
        }
        var details = this.detV
        if (calldate === '') {
          calldate = 'OYC'
        }
        // var ufiles = this.uploadedFiles[0].fileName
        const bodyFormData = new FormData()
        bodyFormData.append('fullname', fullname)
        bodyFormData.append('mobile', mobile)
        bodyFormData.append('model', model)
        bodyFormData.append('subject', subject)
        bodyFormData.append('calldate', calldate)
        bodyFormData.append('calltime', calltime)
        bodyFormData.append('contactType', contactType)
        bodyFormData.append('email', email)
        bodyFormData.append('details', details)
        // bodyFormData.append('fileNames', ufiles)
        axios
          .post('/AjaxSend', bodyFormData)
          .then(res => (this.reqSuccPrompt = true))
          .catch(res => (this.reqErrPrompt = true))
      }
    },
    forceReset () {
      this.$vs.loading.close(this.$refs.sendBtn.$el)
      this.$vs.loading({
        background: 'light',
        color: 'dark',
        text: 'شکیبا باشید...'
      })
      window.location.reload()
    }
  }
}
</script>
<style scoped>
.reqRow
{
      margin: 25px 0px;
}
</style>
