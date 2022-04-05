// eslint-disable-next-line no-unused-vars
const dashboardPage = {
  template: `
<div class="container py-5">
  <div class="row py-5">
    <div class="col-lg-10 col-xl-6 m-auto">
      <div class="p-3 bg-white rounded elevation-2">
        <div class="border rounded">
          <div class="bg-dark rounded-top p-2 text-center">
            <i class="mdi mdi-folder-account f-18 mr-2"></i>
            <b>Welcome - {{user.name}} {{user.title}}</b>
          </div>
          <div class="p-3">
            <div v-if="user.exec" class="bg-blue darken-40 p-3 text-center">
              Woot Woot! you got the <b>exec flag</b>
              <p class="my-2">
                <span class="text-green lighten-30">
                  <i class="mdi mdi-flag f-18 mr-2"></i>
                  <b>{{user.flag}}</b>
                </span>
              </p>
            </div>
            <div v-else>
              <p>
                Congrats on making it this far here is the bruteforce flag...
              </p>
              <p class="bg-blue darken-40 p-3 text-center">
                <span class="text-green lighten-30">
                  <i class="mdi mdi-flag f-18 mr-2"></i>
                  <b>{{user.flag}}</b>
                </span>
              </p>
              <p>
                For your next flag take a look into session hijacking to take over an exec account
              </p>
            </div>
          </div>
        </div>
      </div>
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
        this.user = await $resource.get('/physician-portal/auth?sessionid=' + session.key)
      } catch (res) {
        this.error = res?.body?.error?.message
        this.$router.push('/physician-login')
      }
    }
  }
}
