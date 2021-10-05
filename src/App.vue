<template>
    <div class="container">
      <div class="content">
        <div class="header">
            <div class="header-logo">
              <img width="60" height="60" src="./assets/Logo.png"/>
            </div>
        </div>
      <div class="main">
          <div class="option-avia">
              <span class="option-avia-title">Количество пересадок</span>
              <div class="options-avia">
                <div class="option">
                    <input id="all" value="all" type="checkbox" v-model="aviaTransfer"/>
                    <label for="all">Все</label>
                </div>
                <div class="option">
                    <input id="without" value="without" type="checkbox" v-model="aviaTransfer"/>
                    <label for="without">Без пересадок</label>
                </div>
                 <div class="option">
                    <input id="one-avia" value="one-avia" type="checkbox" v-model="aviaTransfer"/>
                    <label for="one-avia">1 пересадка</label>
                </div>
                 <div class="option">
                    <input id="two-avia" value="two-avia" type="checkbox" v-model="aviaTransfer"/>
                    <label for="two-avia">2 пересадки</label>
                </div>
                 <div class="option">
                    <input id="three-avia" value="three-avia" type="checkbox" v-model="aviaTransfer"/>
                    <label for="three-avia">3 пересадки</label>
                </div>
              </div>
          </div>
          <div class="avia-flights">
            <div class="avia-flights-types">
              <div class="avia-flights-type" :class="{
                  'avia-flights-type--active': type == 'cheapset'
              }" @click="chooseType('cheapset')">Самый дешевый</div>
              <div class="avia-flights-type" :class="{
                  'avia-flights-type--active': type == 'quick'
              }" 
               @click="chooseType('quick')">Самый быстрый</div>
              <div class="avia-flights-type" :class="{
                  'avia-flights-type--active': type == 'normal'
              }"
               @click="chooseType('normal')">Оптимальный</div>
            </div>
            <avia-card/>
            <div class="show-flights">
              <span>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
            </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>

import AviaCard from './components/AviaCard.vue'

export default {
  name: 'App',
  components: { AviaCard },
  data() {
    return {
      type: '',
      aviaTransfer: []
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
    this.type = type ? type : 'cheapset';
  },


  computed: {
    pageStateOptions() {
      return {
        type: this.type,
        aviaTransfer: this.aviaTransfer
      }
    },
  },


  watch: {
    aviaTransfer() {
      console.log(this.pageStateOptions.aviaTransfer.length)
      if(this.pageStateOptions.aviaTransfer.length > 0) {
        window.history.pushState(null, document.title, `${window.location.pathname}?avia=${this.pageStateOptions.aviaTransfer}`)
        return
      }
      if(this.pageStateOptions.type) {
        window.localStorage.setItem('type', this.pageStateOptions.type)
      }
      window.history.pushState(null, document.title, `${window.location.pathname}`)
    },
  },

  methods: {
    chooseType(type) {
      this.type = type;
      this.aviaTransfer = []
    },
  }
}
</script>

<style src="./style.css">

</style>