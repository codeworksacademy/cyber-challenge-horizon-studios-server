const loginPage = {
  template: `
<div class="container py-5">
  <div class="row py-5">
    <div class="col-lg-10 col-xl-6 m-auto">
      <div class="p-3 bg-white rounded elevation-2">
      <form @submit.prevent="submitForm" class="border rounded">
        <div class="bg-dark rounded-top p-2 text-center">
          <i class="mdi mdi-folder-account f-18 mr-2"></i>
          <b>Restricted Access - Physicians Only</b>
        </div>
        <div class="p-3">
          <fieldset>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" v-model="user.email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="user.password" minlength="6" maxlength="12" required>
            </div>
            <div class="pb-4">
              <span>Patients please use the <router-link class="text-primary" to="/patient-portal">patient portal</router-link></span>
            </div>
            <div>
              <button type="submit" class="btn btn-dark">Login</button>
              <transition name="fade">
                <div class="alert alert-danger my-2" v-if="error">{{error}}</div>
              </transition>
            </div>
          </fieldset>
        </div>
      </form>
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
  computed: {
  },
  mounted() { },
  methods: {
    async submitForm() {
      try {
        this.error = ''
        // @ts-ignore
        // eslint-disable-next-line no-undef
        const res = await $resource.post('/physician-portal/login', this.user)
        // eslint-disable-next-line no-undef
        localStorage.setItem('session', JSON.stringify(res))
        this.$router.push('/physician-portal')
      } catch (res) {
        this.error = res?.body?.error?.message
      }
    }
  }
}