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
    function createMessage(body, mins, user) {
      return {
        ...user,
        mins,
        body
      }
    }

    const users = {
      sheila: { name: 'Sheila', senderId: '11635aazkr85z5k0', picture: 'https://minimaltoolkit.com/images/randomdata/female/1.jpg' },
      jessie: { name: 'Jessie', senderId: '5pef7a0v354kq05p', picture: 'https://minimaltoolkit.com/images/randomdata/female/7.jpg' },
      harvey: { name: 'Harvey', senderId: '54maaw7jawifxh2g', picture: 'https://minimaltoolkit.com/images/randomdata/male/1.jpg' },
      jo: { name: 'Jo', senderId: 'dwq3nfn0sao97yei', picture: 'https://minimaltoolkit.com/images/randomdata/female/5.jpg' },
      phillip: { name: 'Phill', senderId: 'he4hux8jt5lu9qpn', picture: 'https://minimaltoolkit.com/images/randomdata/male/2.jpg' },
      jon: { name: 'Jonathan', senderId: 'mlg6exjtsbwm7lxq', picture: 'https://minimaltoolkit.com/images/randomdata/male/3.jpg' }
    }

    const from = {
      '11635aazkr85z5k0': [
        createMessage('Welcome to Horizon Studios, You are going to be a great addition to the team!', 1400, users.sheila),
        createMessage('Thanks, I am nervous and excited!', 1400, users.jessie)
      ],
      '54maaw7jawifxh2g': [
        createMessage('Have you had a chance to review the TPS reports?', 40, users.harvey),
        createMessage('Did you send them to me?', 20, users.jessie),
        createMessage('I Don\'t remember seeing them', 18, users.jessie),
        createMessage('Oh, I thought so, Let me check...', 14, users.harvey)
      ],
      '5pef7a0v354kq05p': [
        createMessage('https://youtu.be/8FkiOfEgyvM', 80, users.jessie),
        createMessage('https://tinyurl.com/2p9y2w8z', 60, users.jessie),
        createMessage('https://github.com/Anteste/WebMap', 60, users.jessie)
      ],
      dwq3nfn0sao97yei: [
        createMessage('Can you look over these proofs... I feel like something is missing', 63, users.jo),
        createMessage('https://tinyurl.com/2p95h4n7', 62, users.jo)
      ],
      he4hux8jt5lu9qpn: [
        createMessage('Did you ever get logged into the server?', 80, users.phillip),
        createMessage('No, I can remember the password its easy but can you remind me the username I think it was something strange', 60, users.jessie),
        createMessage('also if I want to upload these files is this the way I have to do it? It would be nice to have some better way of changing the site details.', 53, users.jessie),
        createMessage('Yeah, I know it is a pain, for now you can only login this way. The username is `meemaw` Let me know if you need help.', 48, users.phillip),
        createMessage('Awesome thanks, That got me in, After I upload the files do I have to do anything else to make them show up?', 38, users.jessie),
        createMessage('Nevermind it looks like it is working', 32, users.jessie)
      ],
      mlg6exjtsbwm7lxq: []
    }

    return {
      from,
      active: '11635aazkr85z5k0'
    }
  },
  computed: {
    employees() {
      return this.$root.$data.employees
    },
    messages() {
      return this.from[this.active]
    }
  },
  methods: {
    setActive(employee) {
      this.active = employee.id
    }
  }
}
