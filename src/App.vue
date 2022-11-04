<template>
    <div class="container">
      <div class="content">
        <div class="header">
            <div class="header-logo">
              <!-- <img width="60" height="60" src="./assets/Logo.png"/> -->
            </div>
        </div>
      <div class="main">
        <div class="option-avia-wrapper">
          <div class="option-avia-logo">
               <img width="60" height="60" src="./assets/Logo.png"/>
          </div>
          <div class="option-avia">
              <span class="option-avia-title">Количество пересадок</span>
              <div class="options-avia">
                <div class="option">
                    <input id="all" value="all" type="checkbox" v-model="aviaTransfer"/>
                    <label for="all">Все</label>
                </div>
                <div class="option">
                    <input id="without" value="0" type="checkbox" v-model="aviaTransfer"/>
                    <label for="without">Без пересадок</label>
                </div>
                 <div class="option">
                    <input id="one-avia" value="1" type="checkbox" v-model="aviaTransfer"/>
                    <label for="one-avia">1 пересадка</label>
                </div>
                 <div class="option">
                    <input id="two-avia" value="2" type="checkbox" v-model="aviaTransfer"/>
                    <label for="two-avia">2 пересадки</label>
                </div>
                 <div class="option">
                    <input id="three-avia" value="3" type="checkbox" v-model="aviaTransfer"/>
                    <label for="three-avia">3 пересадки</label>
                </div>
              </div>
          </div>
          </div>
          <div class="avia-flights">
            <div class="avia-flights-types">
              <div v-for="typeAvia in typesAvia" :key="typeAvia._id" class="avia-flights-type" :class="{
                  'avia-flights-type--active': type == typeAvia._id
              }" @click="chooseType(typeAvia._id)">{{typeAvia.name}}</div>
            </div>

            <avia-card :tickets="tickets" />
            <div @click="page +=1" class="show-flights">
              <span>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
            </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>

import AviaCard from './components/AviaCard.vue'
import api from './api/api.js'

export default {
  name: 'App',
  components: { AviaCard },
  data() {
    return {
      type: '',
      aviaTransfer: [],
      tickets: [],
      typesAvia: [],
      page: 0
    }
  },



  created() {
    // const VALID_KEYS = ['type', 'aviaTransfer'];
    let params = new URLSearchParams(new URL(window.location).search);
    let type = window.localStorage.getItem('type');
    let avia = params.get('avia')?.split(',');
    // VALID_KEYS.forEach(key => {
    //   this[key] = params[key]
    // })
    this.aviaTransfer = avia?.length >= 1 ? avia.filter(e => e): [];
    this.type = type ? type : '617aaa2a0bc7e78d5573ec28';
  },


  computed: {
    pageStateOptions() {
      return {
        type: this.type,
        aviaTransfer: this.aviaTransfer
      }
    },
  },


  mounted() {
    this.getTypesAvia();
    this.getTickets();
  },

  watch: {
    aviaTransfer() {
      if(this.pageStateOptions.aviaTransfer.length > 0) {
        window.history.pushState(null, document.title, `${window.location.pathname}?avia=${this.pageStateOptions.aviaTransfer}`)
        this.getTickets()
        return
      }
      if(this.pageStateOptions.type) {
        window.localStorage.setItem('type', this.pageStateOptions.type)
      }
      window.history.pushState(null, document.title, `${window.location.pathname}`)
      this.getTickets()
    },
    type() {
      this.getTickets()
      this.page = 0;
    },
    page() {
      this.getTickets();
    }
  },

  methods: {
    chooseType(type) {
      this.type = type;
      this.aviaTransfer = []
    },
    // eslint-disable-next-line no-unused-vars
    async getTickets() {
      const tickets = await api.getTickets(this.pageStateOptions, this.page);
      this.tickets = tickets;
    },
    async getTypesAvia() {
      const typesAvia = await api.getAvia();
      this.typesAvia = typesAvia;
    }
  }
}
</script>

<style src="./style.css">

</style>