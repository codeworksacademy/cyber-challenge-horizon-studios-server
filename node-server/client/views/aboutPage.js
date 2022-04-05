// eslint-disable-next-line no-unused-vars
const aboutPage = {
  template: `
<div>
  <div class="row p-lg-5">
    <div class="col-12 text-center">
      <h1>Saint Mary's Physician Group</h1>
      <p>Meet our amazing team of physicians</p>
    </div>
  </div>
  <div class="row px-lg-5 pb-5">
    <div class="col-lg-6" v-for="physician in physicians" :key="physician.id">
      <physician-component :physician="physician" class="m-3"></physician-component>
    </div>
  </div>
</div>`,
  data() {
    return {
      query: ''
    }
  },
  computed: {
    physicians() {
      return this.$root.$data.physicians.filter(this.applyPhysicianFilter)
    }
  },
  methods: {
    applyPhysicianFilter(p) {
      const q = this.query.toLowerCase()
      if (!q) { return p }
      if (q === 'accepting') {
        return p.accepting
      }
      if (p.name.includes(q) || p.specialties.includes(q)) {
        return p
      }
      return false
    }
  }
}
