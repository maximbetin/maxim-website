<template>
  <span>
    <presentation />
    <about />
    <skills />
    <career />
    <projects />
    <contact />
    <Footer />
  </span>
</template>

<script>
import Presentation from "../components/Presentation";
import About from "../components/About";
import Skills from "../components/Skills";
import Career from "../components/Career";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact.vue";

export default {
  name: "home",
  components: {
    Presentation,
    About,
    Skills,
    Career,
    Projects,
    Contact,
    Footer
  }
};
</script>
