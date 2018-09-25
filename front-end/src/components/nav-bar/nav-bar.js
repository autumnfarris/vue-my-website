export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Guest Book",
          page: "/guest-book"
        },

        {
          id: 1,
          text: "Resume",
          page: "/resume"
        },

        {
          id: 2,
          text: "About",
          page: "/"
        }
      ]
    };
  }
};
