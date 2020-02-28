import DefaultLayout from "~/layouts/Default.vue";
import "@/assets/code-highlight.css";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);

  head.script.push({
    type: "text/javascript",
    content: `var _ss = _ss || [];
    _ss.push(['_setDomain', 'https://koi-3QNJMV52A0.marketingautomation.services/net']);
    _ss.push(['_setAccount', 'KOI-44WYQOU4KI']);
    _ss.push(['_trackPageView']);
(function() {
    var ss = document.createElement('script');
    ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3QNJMV52A0.marketingautomation.services/client/ss.js?ver=2.3.1';
    var scr = document.getElementsByTagName('script')[0];
    scr.parentNode.insertBefore(ss, scr);
})();`,
    __dangerouslyDisableSanitizers: ["content"]
  });
}
