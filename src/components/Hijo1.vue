<template>
    
    <div style="margin-top:50px">
       <hr>
        <h2>Hijo1</h2>
        <section class="form">
            <center>
            <div>
                
                <input type="text" v-model="BuscarNombre" placeholder="Buscar por nombre"> 
                <i class="material-icons">search</i>
            </div>
            <table >
                <thead>
                    <tr>
                        <th><h3>Nombre</h3></th>
                        <th><h3>Edad</h3></th>
                        <th><h3>Index</h3></th>

                        <th><h3>Funciones</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="(elemento,index) of filtrarContenido">
                        <td style ="font-size:20px">
                            <center>
                                <div  v-if="elemento.select" style="font-size:20px;boder: 10px black solid">
                                    <input type="text" v-model="elemento.nombre" placeholder="Nuevo Nombre"> 
                                </div>
                                <div v-else> 
                                    {{elemento.nombre}}
                                </div>
                            </center>
                        </td>

                        <td style="font-size:20px">
                            <center>
                                <div v-if="elemento.select" style="font-size:20px;boder: 10px black solid">
                                    <input type="text" v-model="elemento.edad" placeholder="Nueva edad">
                                </div>
                                <div v-else>
                                    {{elemento.edad}}
                                </div> 
                            </center>
                        </td>
                        <td>{{index}}-{{elemento.select}}</td>

                        <button @click="borrar(index)">
                            <i class="material-icons">delete</i>
                        </button>
                        <button v-if="elemento.select" @click="elemento.select = false">
                            <i class="material-icons">save</i>
                        </button>

                        <button v-else @click="elemento.select=true">
                            <i class="material-icons">edit</i>    
                        </button>

                    </tr>
                </tbody>
            </table></center>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            BuscarNombre: '',
            nombreAct: '',
            edadAct: '',

        }
    },
    props :['elementos'],
    methods : {
        borrar (index){ 
            if( confirm("¿Borrar elemento de lista?")){
                this.elementos.splice(index,1);
            }
        },
    },
    computed : {
        filtrarContenido: function(){
            return this.elementos.filter(elemento => elemento.nombre.match(this.BuscarNombre));
        },
    }
}

</script>
<style></style>
