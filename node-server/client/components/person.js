// eslint-disable-next-line no-unused-vars
const personComponent = {
  props: {
    person: { type: Object, required: true }
  },
  template: `
    <div class="bg-white rounded elevation-2 p-3 d-flex flex-wrap align-items-center">
      <div class="py-3 text-center mr-3">
        <img :src="person.img" class="rounded" height="180" />
      </div>
      <div>
        <p class="f-18">
          <b>{{person.name}} - {{person.title}}</b>
        </p>
        <p>
         <b>Specialties</b>
        </p>
        <p>
          <kbd v-for="specialty in person.specialties" :key="specialty" class="mx-1">{{specialty}}</kbd>
        </p>
        <p v-if="person.accepting">
          <kbd class="bg-primary darken-30">
            <b class="text-primay lighten-40">
              Accepting New Patients
            </b>
          </kbd>
        </p>
      </div>
    </div>
  `,
  data() {
    return {

    }
  }
}
