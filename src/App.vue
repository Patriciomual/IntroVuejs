<template>

  <div id="app" style="background:indigo;color:white;border-radius:20px"><br>
    <h1>{{ mensaje }}</h1>
    <p>Nombre: {{ FormP.nombre }} &nbsp;&nbsp;Edad: {{ FormP.edad}}</p>
  
    <Hijo0 @guardar="b => {FormP = b}"></Hijo0>  <!-- "=>" Define una acción -->
  
  </div>
</template>

<script>
import Hijo0 from './components/Hijo0'

export default {
  name: 'app',
  data () {
    return {
      mensaje: 'Componente padre (App.vue)',
      FormP:{
        nombre:'null',
        edad:'null'
      }
    }
  },
  components: {
    Hijo0
  }
}
</script>

<style lang="scss">

#app {

  text-align: center;
  margin-top: 30px;
}
h1 {
  font-size: 25px;
}
p {
  font-size: 20px;
}
</style>
