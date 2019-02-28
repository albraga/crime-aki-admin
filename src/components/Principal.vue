<template>
  <div>
    <div id="mapjampa" v-show="isInit"></div>
    <div id="mapinit" v-show="isInit"></div>
    <component v-bind:is="componame" v-bind:oco="ocorrencia" v-show="isInit"></component>
  </div>
</template>

<script>
import { latlon } from '../utils/position.js'
import { reverseGeocoding } from '../utils/reverse-geo.js'
import { createMap } from '../utils/create-map.js'
import Ocorrencia from '../models/ocorrencia.js'
import Formulario from './Formulario.vue'
import {getIcon} from '../utils/create-icon.js'
import {getIcons} from '../utils/create-icons.js'


export default {
  data() {
    return {
      ocorrencia: null,
      componame: '',
      isInit: true
    }
  },
  methods: {
    init() {
      latlon().then( coords => {
        createMap(coords, 17, 'mapinit', getIcon(coords))
        reverseGeocoding(coords).then(endereco => {
          this.ocorrencia = new Ocorrencia(endereco)
          this.componame = 'Formulario'
        })
      })
    },
    jampa() {
      let lonlatrray = []
      this.$ref.on("child_added", function(snap) {
        lonlatrray.push({lon: snap.val().lon, lat: snap.val().lat})
      })
      this.$ref.once('value').then(() => {
        createMap({lon: -34.833333, lat: -7.083333}, 12, 'mapjampa', getIcons(lonlatrray))
      })
    }
  },
  components: {
    Formulario
  },
  mounted() {
    this.jampa()
    this.init()
  }
}

</script>