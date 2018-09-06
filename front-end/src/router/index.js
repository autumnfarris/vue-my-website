import Vue from "vue";
import Router from "vue-router";
import About from "@/components/about/About.vue";
import Resume from "@/components/resume/Resume.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "About",
      component: About
    },

    {
      path: "/resume",
      name: "Resume",
      component: Resume
    }
  ]
});
