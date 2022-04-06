// eslint-disable-next-line no-unused-vars
const dashboardPage = {
  template: /* html */`
<div class="container py-5">
  <div class="row py-5">
    <div class="col-lg-10 col-xl-6 m-auto">
      <div class="p-3 bg-white rounded elevation-2">
        <div class="border rounded">
          <div class="bg-blue darken-30 rounded-top p-2 text-center">
            <i class="mdi mdi-folder-account f-18 mr-2"></i>
            <b>Welcome - {{user.name}} {{user.title}}</b>
          </div>
          <div class="p-3">
            <div v-if="!user.employee && user.compromised">
              <p class="bg-blue darken-40 p-3 text-center">
                <span class="text-green lighten-30">
                  <i class="mdi mdi-flag f-18 mr-2"></i>
                  <b>{{atob(user.compromised)}}</b>
                </span>
              </p>
            </div>
            <div v-if="user.flag">
              <p>
                Congrats on making it this far here is a flag for your accomplishments...
              </p>
              <p class="bg-blue darken-40 p-3 text-center">
                <span class="text-green lighten-30">
                  <i class="mdi mdi-flag f-18 mr-2"></i>
                  <b>{{user.flag}}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row border-top py-5">
    <div class="col-12" v-if="user">
      <message-board :user="user"/>
    </div>
  </div>
</div>
      `,
  data() {
    return {
      user: {},
      error: ''
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      try {
        // eslint-disable-next-line no-undef
        const session = JSON.parse(localStorage.getItem('session'))
        // @ts-ignore
        // eslint-disable-next-line no-undef
        this.user = await $resource.get('/account/auth?sessionid=' + session.key)
      } catch (res) {
        this.error = res?.body?.error?.message
        this.$router.push('/login')
      }
    }
  }
}
