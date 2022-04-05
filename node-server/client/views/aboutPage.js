// eslint-disable-next-line no-unused-vars
const aboutPage = {
  template: `
<div class="container">
  <div class="row p-lg-5">
    <div class="col-12 text-center d-flex flex-column">
      <h1 class="bg-blue p-3 darken-30">Horizon Studios Dream Team</h1>
      <p class="text-right">
      <kbd class="p-4 bg-blue lighten-10">
        <b>Guides for your Adventures Beyond</b>
      </kbd>
      </p>
      <p class="text-left mt-4">At Horizon Studios we Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchdown's for offshoring</p>
    </div>
  </div>
  <div class="row px-lg-5 pb-5">
    <div class="container">
      <div class="row" v-if="employees">
        <employee-component :employee="employee" v-for="employee in employees" :key="employee.id" class="my-5" />
      </div>
    </div>
  </div>
</div>`,
  async data() {
    return {
    }
  },
  computed: {
    employees() {
      return this?.$root?.$data?.employees
    }
  }
}
