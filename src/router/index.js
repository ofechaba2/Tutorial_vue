import { createWebHistory, createRouter } from "vue-router";
import Compras from '../components/Compras_Com.vue'
import Ventas from '../components/Ventas_Com.vue'
import Usuarios from '../components/Usuarios_Com.vue'
import Login from '../components/Crear_Usuarios.vue'
const routes = [
  {path: "/",name: "Compras",component: Compras,},
  {path: "/Ventas",name: "Ventas",component: Ventas,},
  {path: "/Usuarios",name: "Usuarios",component: Usuarios,},
  {path: "/Login",name: "Login",component: Login,},
];
const router = createRouter({
  history: createWebHistory(),routes,
});
export default router;