<template>
  <v-app>
    <v-main>
     
  <v-card max-width="1400" class="mx-auto" color="secondary">
    <v-layout>
      <v-app-bar
        color="secondary"
        image="https://picsum.photos/1920/1080?random"
      >  
      
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Aplicativo web Proyecto"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
           
        </template>

        <v-app-bar-title></v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <v-list-item to="/" prepend-icon="mdi mdi-google-maps" title="Compras" value="compras"></v-list-item>
            <v-list-item to="/ventas" prepend-icon="mdi-account" title="Ventas" value="ventas"></v-list-item>
            <v-list-item to="/usuarios" prepend-icon="mdi-account" title="Usuarios" value="usuarios"></v-list-item>
            <v-list-item to="/login" prepend-icon="mdi-account" title="Login" value="login"></v-list-item>
          </v-list>
        
        </v-navigation-drawer>
        <v-main style="height: 300px width:  500px ;">
          <router-view></router-view>
        </v-main>
    </v-layout>
  </v-card>
 
     
     
    </v-main>
    
 
  </v-app>
</template>

<script>



export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
        drawer: true,
        rail: true
      
    }),
  }

</script>
