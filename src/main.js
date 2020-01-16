import DefaultLayout from "~/layouts/Default.vue";
import "@/assets/code-highlight.css";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
}
