import Vue from 'vue'
import App from './App.vue'


Vue.component('hijo',{
  template: `
  <div>
    <input type="text" v-model="nuevonombre">
    <input type="text" v-model="nuevaedad">
    <button @click="agregar">Guardar</button>

  </div>  
  `
}),

Vue.component('hijo1',{
  template: `
    <div>
      
      <h1>{{ nombret }} - {{ edadt }}</h1>

      <p v-for="lista in listas"> {{lista.nombre}} - {{lista.edad}} </p>
    

    </div>
  `,
    data () {
      return{
        nombret: 'Nombre',
        edadt: 'Edad',
        listas: [
          {
            nombre:'pato', 
            edad:22
          },
          {
            nombre:'nico', 
            edad:2
          }
        ],
        nuevonombre: '',
        nuevaedad: ''
      }
    },
    methods:{
      agregar () {
        this.listas.push({
          nombre: this.nuevonombre,
          edad: this.nuevaedad
        })
      }
    }
}),

new Vue({
  el: '#app',
  render: h => h(App)

})
