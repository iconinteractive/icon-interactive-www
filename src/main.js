import DefaultLayout from "~/layouts/Default.vue";
import "@/assets/code-highlight.css";
// import axios from "axios";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  // Vue.prototype.$http = axios;
}
