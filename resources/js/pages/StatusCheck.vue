<template>
  <vs-row id="statwrapper" vs-align="center" vs-justify="center" vs-xl="7" vs-lg="8" vs-sm="10" vs-xs="10">
    <vs-col v-if="(coded && !mobed) || (!coded && !mobed)"
            id="topz"
            vs-align="center"
            vs-justify="center"
            vs-lg="6"
            vs-sm="10"
            vs-xs="10"
            class="text-center text-white mrg-0a"
    >
      <h3>پیگیری درخواست</h3>
      <p>
        مشاهده آخرين وضعيت درخواست
      </p>
      <vs-row id="statCoda" class="mrg-0a justify-content-center align-items-center">
        <vs-col id="codaBox">
          <vs-input
            v-if="(coded && !mobed) || (!coded && !mobed)"
            id="reqInput eng"
            v-model="statReqCode"
            :readonly="coded === true"
            name="reqCode"
            label-placeholder="کد درخواست"
            class="text-center"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            maxlength="5"
            color="dark"
          />
          <vs-button v-if="!coded"
                     id="statSMS"
                     ref="statloadableButton"
                     color="light"
                     type="flat"
                     icon="arrow_forward"
                     class="arrr vs-con-loading__container"
                     :disabled="statReqCode.length < 5"
                     @click="statSMS()"
          />
          <vs-button v-if="coded && !mobed"
                     id="editreqCode"
                     color="light"
                     type="flat"
                     icon="edit"
                     class="arrr vs-con-loading__container"
                     @click="forceRerender()"
          />
          <vs-input
            v-if="coded && shows === 0"
            id="codeInput"
            v-model="codeStat"
            name="mobile"
            autofocus="true"
            class="text-center eng"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            maxlength="4"
            color="light"
            :description="mobed"
            :description-text="codedesc"
          />
          <vs-button
            v-if="coded && shows === 0"
            ref="statloadableButton"
            class="arrrr vs-con-loading__container"
            color="light"
            type="flat"
            icon="arrow_forward"
            :disabled="codeStat.length < 4"
            @click="codeCheck()"
          />
        </vs-col>
      </vs-row>
    </vs-col>
    <div v-if="shows === 1" id="downBox" :key="componentKey" class="bg-white vs-xl-7 vs-lg-8 vs-sm-10 vs-xs-10  statRow dBox" :class="{'statopen': showClass === 1}">
      <div id="statForm" class="col-12 text-right">
        <vs-row v-if="shows === 1" id="impoRow" vs-justify="center" vs-sm="10" vs-md="7" vs-xs="10" vs-lg="7" class="text-center mrg-0a">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10" class="text-right">
            <div>
              <span>
                <p v-if="shows === 1">
                  <vs-icon icon="person" size="small" /> {{ stResults.fullname }}<br>
                  <vs-icon icon="confirmation_number" size="small" /> {{ stResults.reqCode }}
                </p>
              </span>
            </div>
          </vs-col>
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" class="text-right">
            <div>
              <span>
                <vs-button color="warning" type="relief" size="large" icon-right="left" icon="exit_to_app" @click="forceRerender()">خروج</vs-button>
              </span>
            </div>
          </vs-col>
        </vs-row>
        <vs-row id="frstRow" vs-justify="center" class="text-right vs-xs-11 vs-sm-11 vs-lg-8 vs-xl-8 mrg-0a" :class="{'statClosed' : showClass === 0}" vs-w="12">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <div>
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="12" vs-sm="6" vs-md="4" vs-lg="4">
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="phone_iphone" />
                  <span class="spTitle">موبایل</span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ stResults.mobile }} </span><br><br>
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="devices_other" />
                  <span class="spTitle">مدل دستگاه : </span>
                </vs-divider>
                <span v-show="shows === 1" class="stt eng">&emsp;&emsp;{{ stResults.model }} </span><br><br>
              </vs-col>
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="12" vs-sm="6" vs-md="4" vs-lg="4">
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="event" />
                  <span class="spTitle">تاریخ تماس : </span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ stResults.calldate }} </span><br><br>
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="schedule" />
                  <span class="spTitle"> زمان تماس : </span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ stResults.calltime }} </span><br><br>
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="call_split" />
                  <span class="spTitle">نحوه پاسخگویی :</span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ stResults.contactType }} </span><br><br>
              </vs-col>
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="12" vs-sm="6" vs-md="4" vs-lg="4">
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="subject" />
                  <span class="spTitle">موضوع درخواست :</span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ cResults.subject }} </span> <br><br>
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="chat_bubble_outline" />
                  <span class="spTitle">خلاصه درخواست :</span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ stResults.details }} </span><br><br>
              </vs-col>
            </div>
          </vs-col>
        </vs-row>
        <vs-row id="lastrow" vs-justify="center" :class="{ 'text-right col-xs-11 col-sm-11 col-md-10 col-lg-8 mrg-0a': showClass === 1, 'statClosed' : showClass === 0}">
          <vs-divider icon="arrow_downward" position="center" class="detdiv" />
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <div>
              <vs-divider position="left" background="whitesmoke" color="black">
                <vs-icon icon="textsms" />
                <span class="spTitle"> وضعیت درخواست :</span>
              </vs-divider>
              <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ cResults.reqStat }} </span><br><br>
            </div>
            <div>
              <span>
                <vs-divider position="left" background="whitesmoke" color="black">
                  <vs-icon icon="textsms" />
                  <span class="spTitle"> پاسخ درخواست :</span>
                </vs-divider>
                <span v-show="shows === 1" class="stt">&emsp;&emsp;{{ stResults.reqReply }} </span><br><br>
              </span>
            </div>
          <!-- <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
            </vs-row>
          </div> -->
          </vs-col>
        </vs-row>
      </div>
    </div>
  </vs-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StatusCheck',
  layout: 'basic',
  data () {
    return {
      componentKey: 0,
      coded: false,
      mobed: false,
      statReqCode: '',
      codeStat: '',
      shows: 0,
      showClass: 0,
      codedesc: '',
      stResults: [],
      cResults: [
        { reqStat: '' },
        { subject: '' },
        { modelimg: '' }
      ],
      statOptions: [
        { text: 'در انتظار تماس', value: 0 },
        { text: 'در حال بررسی', value: 1 },
        { text: 'از مشتری دریافت شده', value: 2 },
        { text: 'به بخش مورد نظر ارسال شده', value: 3 },
        { text: 'در انتظار دریافت قطعه', value: 4 },
        { text: 'در حال تعمیر', value: 5 }
      ],
      reqOptions: [
        { text: 'مشکلات سخت افزاری', value: 1 },
        { text: 'مشکلات نرم افزاری', value: 2 },
        { text: 'مشاوره خرید', value: 3 },
        { text: 'سایر', value: 4 }
      ],
      aloimg: 'aloimg-status'
    }
  },
  mounted () {
    // this.$vs.loading.close()
  },
  methods: {
    statSMS () {
      this.openstatLoading()
      axios
        .get('/StatInit/' + this.statReqCode)
        .then(res => {
          this.$vs.loading.close(this.$refs.statloadableButton.$el)
          this.icona = 'edit'
          this.codedesc = 'کد تأیید به شماره : ' + this.getCookie('sentmobile') + '******* ارسال شد'
          this.coded = true
        })
        .catch(res => {
          this.Alert('danger', 'یافت نشد', 'درخواستی با این شماره موجود نیست')
          this.$vs.loading.close(this.$refs.statloadableButton.$el)
        })
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
    codeCheck () {
      this.openstatLoading()
      axios
        .post('/StatCodeGet/' + this.statReqCode + '/' + this.codeStat)
        .then(res => {
          this.stResults = res.data.results
          let rqst = this.stResults['reqStat']
          let rqsb = this.stResults['subject']
          let ctype = this.stResults['contactType']
          this.cResults.reqStat = this.statOptions[(rqst)].text
          this.cResults.subject = this.reqOptions[(rqsb)].text
          if (ctype === 'Call') {
            this.stResults.contactType = 'تماس با ' + this.stResults.mobile
          }
          if (ctype === 'Email') {
            this.stResults.contactType = 'ایمیل به ' + this.stResults.email
          }
          this.$vs.loading.close(this.$refs.statloadableButton.$el)
          this.shows = 1
          this.showClass = 1
          this.mobed = true
          document.getElementById('basicLayout').classList.remove('align-items-center')
          document.getElementById('basicLayout').classList.add('align-items-end')
        })
        .catch(res => {
          this.Alert('danger', 'کد اشتباه', 'کد وارد شده اشتباه است')
          this.$vs.loading.close(this.$refs.statloadableButton.$el)
        })
    },
    Alert (color, title, text) {
      this.$vs.notify({
        color: color,
        title: title,
        text: text
      })
    },
    forceRerender () {
      this.shows = 0
      this.showClass = 0
      this.stResults = []
      this.cResults = []
      this.coded = false
      this.mobed = false
      this.statReqCode = ''
      this.codeStat = ''
      document.getElementById('basicLayout').classList.add('align-items-center')
      document.getElementById('basicLayout').classList.remove('align-items-end')
      this.componentKey += 1
    },
    openstatLoading () {
      this.$vs.loading({
        background: '',
        color: 'black',
        container: this.$refs.statloadableButton.$el,
        scale: 0.45
      })
    }
  }
}
</script>
<style>
.statLabel
{
  font-weight: 500;
  font-family: '';
}
.arrr{
position: relative;
    top: -39.5px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.arrrr{
position: relative;
    top: -59.5px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.isFocus label
{
  color:whitesmoke !important;
}
#impoRow
{
    position: relative;
    top: -175px;
    color: whitesmoke;
    text-shadow: 1px 1px 3px black;
    font-weight: 100;
    font-size: 1.4em;
}
.statRow .vs-row
{
    position: relative;
    top: -5vh;
}

#frstRow .vs-col i
{
      position: relative;
      top: 9px;
      right: -5px;
}

#frstRow .vs-col
{
      color:#414141;
      float:right !important;
}
.statRow
{
  transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
}
#statRow .con-text-validation {
    text-align: right;
    color: white;
}

.statClosed
{
  filter: blur(1.5px);
  -webkit-filter: blur(1.5px);
  -o-filter: blur(1.5px);
  -moz-filter: blur(1.5px);
    transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
}
.stl
{
    font-size: 14px;
    font-weight: 500;
}
</style>
