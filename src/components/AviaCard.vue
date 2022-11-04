<template>
  <div v-if="tickets.length > 0">
                <div v-for="ticket in tickets" :key="ticket._id"  class="avia-flight" >
              <div class="avia-flight-container">
                <div class="avia-flight-header">
                  <div class="avia-flight-price">{{ticket.price}} Р</div>
                  <div class="avia-flight-logo">
                    <img src="../assets/S7.png" width="110" height="36"/>
                  </div>
                </div>
                <div class="avia-flight-main">
                  <div class="avia-flight-params">
                    <div  class="avia-flight-param mb-24">
                      <span class="avia-flight-param-text-gray">{{ticket.segments[0].origin.name}} - {{ticket.segments[0].destination.name}}</span>
                      <span class="avia-flight-param-text">{{ticket.segments[0].date}}</span>
                    </div>
                    <div class="avia-flight-param">
                      <span class="avia-flight-param-text-gray">{{ticket.segments[1].origin.name}} - {{ticket.segments[1].destination.name}}</span>
                      <span class="avia-flight-param-text">{{ticket.segments[1].date}}</span>
                    </div>
                  </div>
                    <div class="avia-flight-params">
                    <div class="avia-flight-param mb-24">
                      <span class="avia-flight-param-text-gray">В пути</span>
                      <span class="avia-flight-param-text">{{ticket.segments[0].duration}}</span>
                    </div>
                    <div class="avia-flight-param">
                      <span class="avia-flight-param-text-gray">В пути</span>
                      <span class="avia-flight-param-text">{{ticket.segments[1].duration}}</span>
                    </div>
                  </div>
                    <div class="avia-flight-params">
                    <div class="avia-flight-param mb-24">
                      <span class="avia-flight-param-text-gray">{{ticket.segments[0].stops.length}} пересадки</span>
                      <span v-for="transfer in ticket.segments[0].stops" :key="transfer._id" class="avia-flight-param-text">{{transfer.name}}</span>
                    </div>
                    <div class="avia-flight-param">
                      <span class="avia-flight-param-text-gray">{{ticket.segments[1].stops.length}} пересадка</span>
                      <span v-for="transfer in ticket.segments[1].stops" :key="transfer._id" class="avia-flight-param-text">{{transfer.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>

<script>

export default {
    name: 'AviaCard',
    props: ['tickets'],
    data() {
      return {
       
      }
    },
    created() {
    }
}

</script>