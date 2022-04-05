// eslint-disable-next-line no-unused-vars
const employeeComponent = {
  props: {
    employee: { type: Object, required: true }
  },
  template: `
<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
  <!-- Card-->
  <div class="card hover-card shadow-sm border-0 rounded">
    <div class="card-body p-0"><img :src="employee.picture" alt="" class="w-100 card-img-top">
      <div class="p-4">
        <h5 class="">{{employee.name}}</h5>
        <p class="small text-muted">{{employee.title}}</p>
        <ul class="social mb-0 list-inline mt-3">
          <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="mdi mdi-facebook"></i></a></li>
          <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="mdi mdi-twitter"></i></a></li>
          <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="mdi mdi-instagram"></i></a></li>
          <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="mdi mdi-linkedin"></i></a></li>
          <li class="list-inline-item m-0"><a :href="email" class="social-link"><i class="mdi mdi-mail"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `,
  data() {
    return {
      email: 'mailto:' + this.employee.email
    }
  }
}
