import Vue from "vue";
import Router from "vue-router";
import about from "@/components/about/About.vue";
import resume from "@/components/resume/Resume.vue";
import guestBook from "@/components/guest-book/guest-book.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "about",
      component: about
    },

    {
      path: "/resume",
      name: "resume",
      component: resume
    },

    {
      path: "/guest-book",
      name: "guest Book",
      component: guestBook
    }
  ]
});
