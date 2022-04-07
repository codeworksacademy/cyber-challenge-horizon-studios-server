const messageBoard = {
  template: `
<div class="container-fluid" v-if="user && user.employee">
  <div class="media bg-white rounded">
    <div class="media-left d-none d-md-block col-md-3 p-0">
      <div class="messages-list">
        <div class="panel panel-default" tabindex="1">
          <ul class="list-group square-right">
            <li class="list-group-item p-2 selectable" :class="active == employee.id ? 'bg-blue darken-30':''" v-for="employee in employees" :key="employee.id" @click="setActive(employee)">
              <div class="d-flex align-items-center">
                <img :src="employee.picture" alt="employee photo" class="employee-photo shadow">
                <div class="ml-3">
                  <span class="user">{{employee.name}}</span>
                  <div class="message"><small>🔑 {{employee.title}}<small></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-100 bg-white p-3 scrollable-y show-scroll" style="max-height:405px" v-if="messages">
      <div class="w-100 my-4" v-for="message in messages" :key="message.id" :class="message.senderId == user.id ? 'self':'other'">
        <div class="message-content elevation-2 d-flex">
          <div :class="message.senderId == user.id ? '':'order-2 '">
              <img :src="message.picture" width="30" alt="woman" class="media-object rounded-circle">
          </div>
          <div class="mx-3 message">
            <div class="">
              <div class="">
                <div class="">
                  <small class="text-muted">{{message.name}} - {{message.mins}} min ago</small>
                </div>
              </div>
              <div >
                {{message.body}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  props: {
    user: { type: Object, required: true }
  },
  data() {
    return {
      allMessages: [],
      active: '11635aazkr85z5k0'
    }
  },
  async mounted() {
    try {
      const session = JSON.parse(window.localStorage.getItem('session'))
      // @ts-ignore
      // eslint-disable-next-line no-undef
      this.allMessages = await $resource.get('/account/messages?sessionid=' + session.key)
    } catch (error) {
      console.error('[GET_MESSAGES_FAILED]', { error })
    }
  },
  computed: {
    employees() {
      return this.$root.$data.employees.filter(e => e.employee.id === this.user.id)
    },
    messages() {
      return this.allMessages.filter(m => m.toId === this.active || m.senderId === this.active)
    }
  },
  methods: {
    setActive(employee) {
      this.active = employee.id
    }
  }
}
