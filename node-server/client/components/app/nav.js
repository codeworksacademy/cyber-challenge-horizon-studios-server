// eslint-disable-next-line no-unused-vars
const navComponent = {
  template: `
    <header class="container-fluid bg-white">
     <div class="row px-3">
      <div class="col-lg-10 m-auto d-flex justify-content-between py-3 align-items-center">
        <router-link to="/" class="selectable">
          <img src="https://codeworks.blob.core.windows.net/public/assets/cyber-range/labs/horizon-studios/logo.png" height="120"/>
        </router-link>
        <div class="q-tabs d-none d-md-flex">
          <router-link to="/rivers-edge" class="q-tab selectable rounded">
            <b>Rivers Edge<b>
          </router-link>
          <router-link to="/about" class="q-tab selectable rounded">
            <b>About<b>
          </router-link>
          <router-link to="/login" class="q-tab selectable rounded">
            <b>Login<b>
          </router-link>
        </div>
      </div>
     </div>
    </header>
  `,
  data() {
    return {}
  }
}
