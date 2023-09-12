<template>
  <v-container>
    <h1>Crear Usuarios</h1>
    <v-btn color="tercero" @click="createUsuario()">Ingresar Usuario</v-btn>
  </v-container>
</template>
<script>
import db from '../firebase/init.js'
import {collection, addDoc} from  'firebase/firestore'

export default{
  created(){
  /*   this.createUsuario() */
  },
  methods:{
    async createUsuario(){
      const colRef= collection(db, 'Usuarios')
      const doc={
        id:'1',
        nombre:"Omar",
        password:"1234",
        
      }
      const docRef = await addDoc(colRef,doc)
      console.log('creo el marca con nombre', docRef.id)
    }
  }
}
</script>
