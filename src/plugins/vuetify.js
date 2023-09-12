// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },

  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#E1BEE7', // #E53935
          secondary: '#CE93D8', 
          tercero:'#FFC107'// #FFCDD2
        }
      },
    },
  },
})
