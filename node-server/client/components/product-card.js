// eslint-disable-next-line no-unused-vars
const productCard = {
  template: `
<div class="col-md-6 mb-4">
  <!-- Card-->
  <div class="card rounded shadow-sm border-0">
    <div class="card-body p-4"><img :src="product.img" alt="" height="250" class="d-block mx-auto mb-3">
      <h5> <a href="#" class="text-dark">{{product.name}} <span>$</span>{{ product.price }}</a></h5>
      <p class="small text-muted font-italic">{{product.description}}</p>
      <ul class="list-inline small">
        <li class="list-inline-item m-0"><i class="mdi mdi-star text-success"></i></li>
        <li class="list-inline-item m-0"><i class="mdi mdi-star text-success"></i></li>
        <li class="list-inline-item m-0"><i class="mdi mdi-star text-success"></i></li>
        <li class="list-inline-item m-0"><i class="mdi mdi-star text-success"></i></li>
        <li class="list-inline-item m-0"><i class="mdi mdi-star text-success"></i></li>
      </ul>
    </div>
  </div>
</div>
  `,
  props: {
    product: { type: Object, required: true }
  },
  data() { }
}
