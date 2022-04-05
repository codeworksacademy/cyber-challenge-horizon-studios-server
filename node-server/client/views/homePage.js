// eslint-disable-next-line no-unused-vars
const homePage = {
  template: `
<div class="container-fluid">

  <div class="row hero-container"></div>

  <div class="row bg-blue lighten-40 py-5 px-lg-5 d-flex align-items-center justify-content-center">
    <div class="col-lg-4 my-1 my-lg-0">
      <div class="p-5 bg-blue darken-40 rounded elevation-2 text-center">
        <i class="f-22 mdi mdi-star text-gold"></i>
        <i class="f-24 mdi mdi-star text-gold"></i>
        <i class="f-28 mdi mdi-star text-gold"></i>
        <i class="f-24 mdi mdi-star text-gold"></i>
        <i class="f-22 mdi mdi-star text-gold"></i>
        <p><b><em class="text-gold">A must play experience</em></b></p>
        <p><em>- PGP Reviews</em></p>
      </div>
    </div>
    <div class="col-lg-4 my-1 my-lg-0">
      <div class="p-5 bg-blue darken-40 rounded elevation-2 text-center">
        <i class="f-22 mdi mdi-star text-gold"></i>
        <i class="f-24 mdi mdi-star text-gold"></i>
        <i class="f-28 mdi mdi-star text-gold"></i>
        <i class="f-24 mdi mdi-star text-gold"></i>
        <i class="f-22 mdi mdi-star text-gold"></i>
        <p><b><em class="text-gold">Nail bitting fear that'll keep you on the edge of your seat!</em></b></p>
        <p><em>- Gamers Guilds</em></p>
        <h5 class="mb-0 text-gold text-uppercase">Gamers Choice Award</h5>
      </div>
    </div>
    <div class="col-lg-4 my-1 my-lg-0">
      <div class="p-5 bg-blue darken-40 rounded elevation-2 text-center">
        <i class="f-22 mdi mdi-star text-gold"></i>
        <i class="f-24 mdi mdi-star text-gold"></i>
        <i class="f-28 mdi mdi-star text-gold"></i>
        <i class="f-24 mdi mdi-star text-gold"></i>
        <i class="f-22 mdi mdi-star text-gold"></i>
        <p><b><em class="text-gold">Your next Survival Horror</em></b></p>
        <p><em>- Dark Forrest Games</em></p>
      </div>
    </div>
  </div>

  <div class="row py-5 px-lg-5 bg-light">
    <div class="col-12">
      <div class="container">
      <div class="row my-5">
        <div class="col-12">
          <h3 class="text-blue darken-30">Get Swanky Gear</h3>
          <p>Don't leave home without these essential items</p>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <product-card v-for="p in products" :key="p.id" :product="p"/>
        </div>
      </div>
      </div>
    </div>
  </div>

</div>
      `,
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$root.$data.products
    }
  },
  methods: {}
}
