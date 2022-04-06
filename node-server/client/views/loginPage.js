const loginPage = {
  template: `
<div class="container py-5">
  <div class="row py-5">
    <div class="col-lg-10 col-xl-6 m-auto">
      <div class="p-3 bg-white rounded elevation-2">
      <form @submit.prevent="submitForm" class="border rounded">
        <div class="bg-blue darken-30 rounded-top p-2 text-center">
          <i class="mdi mdi-folder-account f-18 mr-2"></i>
          <b>Management Portal</b>
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
            <div>
              <button type="submit" class="btn btn-dark">Login</button>
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
        // @ts-ignore
        // eslint-disable-next-line no-undef
        const res = await $resource.post('/account', this.user)
        // eslint-disable-next-line no-undef
        localStorage.setItem('session', JSON.stringify(res))
        this.$router.push('/dashboard')
      } catch (err) {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: err.message,
          icon: 'warning',
          position: 'top-end',
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          showConfirmButton: false
        })
      }
    }
  }
}
