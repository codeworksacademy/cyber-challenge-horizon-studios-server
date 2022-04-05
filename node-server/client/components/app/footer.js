// eslint-disable-next-line no-unused-vars
const footComponent = {
  template: `
  <footer id="footer" class="container-fluid bg-blue darken-30">
  <div class="row py-5 px-lg-5 align-items-center">
    <div class="col-lg-4">
      <div class="text-blue lighten-40">
        <p class="m-0"><strong>Horizon Studios</strong></p>
        <p class="m-0">
          12335 Fake 2nd Street, Nowhere, UK 90210
        </p>
      </div>
    </div>
    <div class="col-lg-8 text-right my-4 my-lg-0">
      <div class="d-flex justify-content-lg-end flex-wrap">
        <router-link to="/about" class="p-3 selectable rounded">
          <b>About Horizon Studios<b>
        </router-link>
      </div>
    </div>
  </div>
  <div class="row bg-blue darken-40 py-5 px-lg-5">
    <div class="col-lg-6">
      <small>Horizon Studios is a fictitious game company owned and operated by CodeWorks® as an
      intentionally vulnerable website.
      It cannot be used or replicated without explicit written permission. This is a work of fiction. Names,
      characters, business, events and incidents are imagination. Any resemblance to actual persons, living or
      dead, or actual events is purely coincidental.</small>
    </div>

    <div class="col-lg-6 text-lg-right">
      <div class="mt-5">
        <a class="p-3 selectable rounded" href="https://www.facebook.com/boisecodeworks" target="_blank">
          <i class="mdi mdi-facebook f-18"></i>
        </a>
        <a class="p-3 selectable rounded" href="https://www.facebook.com/boisecodeworks" target="_blank">
          <i class="mdi mdi-twitter f-18"></i>
        </a>
        <a class="p-3 selectable rounded" href="https://www.facebook.com/boisecodeworks" target="_blank">
          <i class="mdi mdi-instagram f-18"></i>
        </a>
        <a class="p-3 selectable rounded" href="https://www.facebook.com/boisecodeworks" target="_blank">
          <i class="mdi mdi-youtube f-18"></i>
        </a>
      </div>
    </div>
    <div class="col-12 copy py-4">
      <small> {{new Date().getFullYear()}} Horizon Studios | CodeWorks® Cyber Range</small>
    </div>
  </div>

</footer>
  `
}
