<template>
  <div id="adminBox" class="justify-content-center">
    <vs-row id="adminrow">
      <vs-col vs-xs="12" vs-sm="12" vs-lg="11">
        <vs-table
          v-model="selected"
          search
          :data="requesta"
          pagination
          :max-items="10"
          stripe
          @selected="handleSelected"
        >
          <template slot="header">
            لیست درخواستها
          </template>
          <template slot="thead">
            <vs-th sort-key="reqCode">
              #
            </vs-th>
            <vs-th sort-key="fullname">
              نام و نام خانوادگی
            </vs-th>
            <vs-th sort-key="subject">
              نوع درخواست
            </vs-th>
            <vs-th sort-key="contactType">
              نحوه پاسخگویی
            </vs-th>
            <vs-th sort-key="contactType">
              زمان تماس
            </vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
              <vs-td :data="data[indextr].reqCode" class="eng">
                {{ data[indextr].reqCode }}
              </vs-td>
              <vs-td :data="data[indextr].fullname">
                {{ data[indextr].fullname }}
              </vs-td>
              <vs-td v-if="data[indextr].subject == 1" :data="data[indextr].subject">
                سخت افزاری
              </vs-td>
              <vs-td v-if="data[indextr].subject == 2" :data="data[indextr].subject">
                نرم افزاری
              </vs-td>
              <vs-td v-if="data[indextr].subject == 3" :data="data[indextr].subject">
                مشاوره خرید
              </vs-td>
              <vs-td v-if="data[indextr].subject == 4" :data="data[indextr].subject">
                سایر
              </vs-td>
              <vs-td v-if="data[indextr].contactType == 'Call'" :data="data[indextr].contactType">
                تماس
              </vs-td>
              <vs-td v-if="data[indextr].contactType == 'Email'" :data="data[indextr].contactType">
                ایمیل
              </vs-td>
              <vs-td :data="data[indextr].calldate">
                {{ data[indextr].calldate }}
              </vs-td>
              <template slot="expand" class="expand-user">
                <div class="con-expand-req">
                  <div class="con-btns-req">
                    <div>
                      <vs-button type="line" color="danger" @click="removedg(data[indextr].id)">
                        حذف
                      </vs-button>
                      <vs-button
                        type="line"
                        color="dark"
                        @click="editdgfill(data[indextr].reqCode,data[indextr].reqStat,data[indextr].details,data[indextr].reqReply,data[indextr].id,data[indextr].mobile,data[indextr].isReg)"
                      >
                        ویرایش
                      </vs-button>
                      <vs-button
                        :disabled="tr.email == 'no@Email.com'"
                        type="line"
                        color="warning"
                        @click="maildg(data[indextr].email)"
                      >
                        ایمیل
                      </vs-button>
                      <vs-button type="line" color="primary" @click="calldg(data[indextr].mobile)">
                        تماس
                      </vs-button>
                    </div>
                  </div>
                  <vs-list>
                    <vs-list-item icon="phone_iphone" title="مدل" :subtitle="tr.model" />

                    <vs-list-item
                      icon="alternate_email"
                      title="ایمیل"
                      :subtitle="tr.email"
                    />
                    <!-- <vs-list-item
                  v-if="tr.email != 'no@Email.com'"
                  icon="alternate_email"
                  title="ایمیل"
                  :subtitle="tr.email"
                /> -->

                    <vs-list-item icon="dialpad" title="موبایل" :subtitle="tr.mobile" />

                    <vs-list-item icon="subject" title="شرح درخواست" :subtitle="tr.details" />
                  </vs-list>
                </div>
              </template>
            </vs-tr>

            <vs-prompt
              accept-text="ذخیره"
              cancel-text="لغو"
              button-accept="line"
              button-cancel="line"
              :active.sync="editPrompt"
              title="ویرایش درخواست"
              @accept="UpdateReq()"
            >
              <div class="con-exemple-prompt">
                <vs-input
                  v-model="reqCode"
                  icon-after="true"
                  label-placeholder="کد درخواست"
                  icon="confirmation_number"
                  :disabled="isReg == 1"
                />
                <vs-alert
                  :active="reqCode < 5 "
                  color="danger"
                  icon="new_releases"
                >
                  کد درخواست حداقل ۵ کاراکتر دارد
                </vs-alert>

                <vs-alert
                  :active="isReg != 1"
                  color="danger"
                  icon="new_releases"
                >
                  کد درخواست تکراری است
                </vs-alert>

                <vs-divider />
                <vs-card>
                  <div slot="header">
                    شرح درخواست :
                  </div>
                  <div>
                    <span>{{ details }}</span>
                  </div>
                </vs-card>
                <vs-textarea v-model="reqReply" label="پاسخ دهید..." />
                <vs-select v-model="statSelect" class="selectExample">
                  <vs-select-item
                    v-for="(item,index) in statOptions"
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                  />
                </vs-select>
              </div>
            </vs-prompt>

            <vs-prompt
              accept-text="حذف"
              cancel-text="لغو"
              button-accept="line"
              button-cancel="line"
              color="danger"
              :active.sync="removePrompt"
              title="حذف درخواست"
              :is-valid="validpass"
              @accept="removeReq(reqID)"
            >
              <div class="con-exemple-prompt">
                <vs-input
                  v-model="passcode"
                  icon-after="true"
                  label-placeholder="رمز..."
                  icon="vpn_key"
                  type="password"
                />
              </div>
              <vs-alert :active="!validpass" color="danger" icon="new_releases">
                رمز عبور اشتباه است
              </vs-alert>
            </vs-prompt>

            <vs-prompt
              accept-text="بله"
              cancel-text="خیر"
              button-accept="line"
              button-cancel="line"
              color="warning"
              :active.sync="mailPrompt"
              title="ارسال ایمیل"
              @accept="maila()"
            >
              ایمیل به {{ email }} ؟
            </vs-prompt>

            <vs-prompt
              accept-text="بله"
              cancel-text="خیر"
              button-accept="line"
              button-cancel="line"
              color="primary"
              :active.sync="callPrompt"
              title="تماس تلفنی"
              @accept="calla()"
            >
              تماس با {{ mobile }} ؟
            </vs-prompt>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Admin',
  data: () => {
    return {
      passcode: '',
      requesta: [],
      selected: [],
      reqID: '',
      reqCode: 0,
      reqStat: '',
      editPrompt: false,
      removePrompt: false,
      mailPrompt: false,
      callPrompt: false,
      details: '',
      email: '',
      mobile: '',
      reqReply: '',
      isReg: 0,
      registered: 0,
      statSelect: 1,
      statOptions: [
        { text: 'در انتظار تماس', value: 0 },
        { text: 'در حال بررسی', value: 1 },
        { text: 'از مشتری دریافت شده', value: 2 },
        { text: 'به بخش مورد نظر ارسال شده', value: 3 },
        { text: 'در انتظار دریافت قطعه', value: 4 },
        { text: 'در حال تعمیر', value: 5 }
      ]
    }
  },
  computed: {
    validpass () {
      if (this.passcode !== '') { return this.passcode === 'q1w2e3' && this.passcode.length >= 6 } else { return false }
    }
  },
  mounted () {
    this.read()
  },
  methods: {
    regCheck () {
      if (this.reqCode !== 0) {
        if (this.reqCode.length > 4) {
          return this.regaCheck()
        } else {
          return false
        }
      }
    },
    regaCheck () {
      let iR = this.isReg
      let ir = this.registered
      axios.get('/CheckRegistered/' + this.reqCode)
        .then(res => {
          ir = res.data.isRegistered
          if (ir === '1' && iR === 0) {
            return true
          } else if (ir === '1' && iR === 1) {
            return false
          } else if (ir === '0' && iR === 0) {
            return true
          }
        })
        .catch(res => {
          this.Alert('error', 'خطا', 'مشکلی پیش آمده')
        })
    },
    handleSelected (tr) {
      this.reqCode = tr.reqCode
    },
    read () {
      axios
        .get('/fetchData')
        .then(({ data }) => {
          this.requesta = data
        })
        .catch(err => console.error(err))
    },
    maildg (email) {
      this.mailPrompt = true
      this.email = email
    },
    maila () {
      window.open('mailto:' + this.email)
    },
    calla () {
      window.open('tel:' + this.mobile)
    },
    calldg (mobile) {
      this.callPrompt = true
      this.mobile = mobile
    },
    removedg (id, reqCode) {
      this.removePrompt = true
      this.reqID = id
      this.reqCode = reqCode
    },
    removeReq (id) {
      axios
        .get('/RemoveReq/' + id)
        .then(res => {
          this.Alert('primary', 'حذف درخواست', 'حذف درخواست انجام شد')
          this.read()
        })
        .catch(err => console.error(err))
    },
    editdgfill (reqC, reqstat, det, reqReply, id, mobile, isReg) {
      this.editPrompt = true
      this.reqID = id
      this.reqCode = reqC
      this.statSelect = reqstat
      this.reqReply = reqReply
      this.details = det
      this.mobile = mobile
      this.isReg = isReg
      if (this.isReg === 1) {
        this.registered = '1'
      }
    },
    UpdateReq () {
      if (this.registered === '0') {
        if (this.isReg === 0) {
          axios
            .get(
              '/UpdateReq/' +
                this.reqID +
                '/' +
                this.reqCode +
                '/' +
                this.statSelect +
                '/' +
                this.reqReply +
                '/' +
                this.isReg
            )
            .then(res => {
              this.Alert('success', 'ثبت موفق', 'ویرایش درخواست انجام شد.')
              this.sendsms(this.mobile, this.reqCode)
              this.read()
            })
            .catch(res => this.Alert('error', 'خطا', 'مشکلی پیش آمده'))
        }
      } else if (this.registered === '1') {
        if (this.isReg === 1) {
          axios
            .get(
              '/UpdateReq/' +
                this.reqID +
                '/' +
                this.reqCode +
                '/' +
                this.statSelect +
                '/' +
                this.reqReply +
                '/' +
                this.isReg
            )
            .then(res => {
              this.Alert('success', 'ثبت موفق', 'ویرایش درخواست انجام شد.')
              this.read()
            })
            .catch(res => this.Alert('error', 'خطا', 'مشکلی پیش آمده'))
        }
        // else {
        //   this.Alert("danger", "خطا", "شماره درخواست وارد شده تکراری است");
        // }
      }
    },
    sendsms (mobile, regaCode) {
      axios.get('/ReqCodeUpdate/' + regaCode + '/' + mobile)
        .then(res =>
          this.Alert(
            'primary',
            'ارسال رسید به کاربر',
            'شماره رسید برای درخواست دهنده ارسال شد'
          )
        )
        .catch(res => this.Alert('error', 'خطا', 'خطا در ارسال'))
    },
    Alert (color, title, text) {
      this.$vs.notify({
        color: color,
        title: title,
        text: text
      })
    }
  }
}
</script>
<style>
  .con-vs-dialog .vs-dialog
    {
      text-align: right !important;
    }
    #adminRow {
      display: block;
    }
  #adminBox .vs-table--tbody-table .tr-values td {
    padding: 10px 15px;
    border: thin solid lightgrey;
}
#adminBox .vs-con-table td.td-check {
    text-align: center;
}
#adminBox .tr-expand td .content-tr-expand {
    max-width: 768px;
}

#adminBox th .vs-table-text {
text-align: right;
}
</style>
