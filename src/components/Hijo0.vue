<template>
    <div style="background:white;color:black">
        <br><h2>Hijo0</h2><br><br>
        <p style="font-size:25px">Nombre: <input type="text" v-model="Form.nombre" placeholder="Ingresa Nombre">
        &nbsp;&nbsp;&nbsp;Edad: <input type="text" v-model="Form.edad" placeholder="Ingresa edad">
        
        <button @click="Click">
            <i class="material-icons">save</i>    
        </button></p>  
        <hijo1 :elementos.sync="personas"></hijo1> <hr>
        elementos en Array: {{personas}}
    </div>

</template>

<script>
import hijo1 from './Hijo1'
export default {
    name:'hijo0',
    data () {
        return {
            Form: {
                nombre:'',
                edad:''
                },
            select:false, 
            personas: []
        }
    },
    components: {
        hijo1
    },
    methods: {
        Click (){
            this.$emit("guardar",this.Form)

            this.personas.push({
                nombre: this.Form.nombre,
                edad: this.Form.edad,
                select: false
                });
            console.log(this.Form)
            this.Form.nombre=''
            this.Form.edad=''

        }
    }
}
</script>
<style lang="scss">

</style>
