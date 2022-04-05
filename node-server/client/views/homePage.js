// eslint-disable-next-line no-unused-vars
const homePage = {
  template: `
<div class="container-fluid">

  <div class="row hero-container">
    <div class="col-12 offset-lg-2 text-primary lighten-40 text-uppercase">
      <h1 class="f-28">
        <b>When it matters most</b>
      </h1>
      <p class="f-24">
        <em>We are here for you</em>
      </p>
    </div>
  </div>

  <div class="row bg-primary lighten-40 py-5 px-lg-5">
    <div class="col-4">
      <div class="p-5 bg-white text-primary rounded elevation-2 text-center">
        <i class="f-24 mdi mdi-needle"></i>
        <p><b>Priority Care</b></p>
      </div>
    </div>
    <div class="col-4">
      <div class="p-5 bg-white text-primary rounded elevation-2 text-center">
        <i class="f-24 mdi mdi-minidisc mdi-rotate-90"></i>
        <p><b>Online Records & Guides</b></p>
      </div>
    </div>
    <div class="col-4">
      <div class="p-5 bg-white text-primary rounded elevation-2 text-center">
        <i class="f-24 mdi mdi-heart"></i>
        <p><b>Health & Wellness</b></p>
      </div>
    </div>
  </div>

  <div class="row p-lg-5 bg-grey lighten-40">
    <div class="col-12 text-center">
      <h1>Saint Mary's Executive Board</h1>
      <p>Physician owned and operated</p>
    </div>
    <div class="col-lg-4" v-for="physician in physicians" :key="physician.id">
      <physician-component :physician="physician" class="m-3 bg-dark"></physician-component>
    </div>
  </div>
</div>
      `,
  data() {
    return { }
  },
  computed: {
    physicians() {
      return this.$root.physicians.slice(-3)
    }
  },
  mounted() {
  },
  methods: { }
}
