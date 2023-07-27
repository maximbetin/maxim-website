<template>
  <span>
    <presentation />
    <about />
    <skills />
    <projects />
    <contact />
    <Footer />
  </span>
</template>

<script>
import Presentation from "../components/Presentation";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact.vue";

export default {
  name: "home",
  components: {
    Presentation,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  }
};
</script>
