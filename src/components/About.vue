<template>
  <v-container fluid class="background-color" id="about">
    <v-flex class="about-wrapper">
      <v-layout align-center column mt-10 mx-15>
        <v-flex class="display-1 font-weight-light text-xs-center">
          About me
        </v-flex>
      </v-layout>
      <v-divider color="gray"></v-divider>
      <v-layout align-center column my-10 class="font-weight-normal about-text">
        <v-col>
          <p class="text-justify">
            As a Computer Engineering graduate from the
            <a href="https://www.ua.es/en/index.html">University of Alicante</a>
            and the esteemed
            <a
              href="https://eps.ua.es/en/ingenieria-informatica/curriculum/high-academic-performance-groups.html"
              >ARA</a
            >
            (Alto Rendimiento Académico or High Academic Performance) group, I
            bring a global perspective to my work, having lived most of my life
            in Spain and completed my
            <a href="https://www.ibo.org/">International Baccalaureate</a> in
            Sweden (English-taught program). With fluency in both Spanish and
            English (with a slight edge in English owing to my IB journey), I am
            able to navigate multicultural environments with ease.
          </p>
          <p class="text-justify">
            Analytical and observant by nature, I prioritize in-depth evaluation
            and systematic consideration before reaching crucial decisions. This
            approach equips me to maintain an objective stance, keep my thoughts
            well-ordered, and avoid impulsive actions. My inherent curiosity
            extends to details, driving me to continually learn from various
            domains including IT, history, culture, economics, or even picking
            up a new hobby.
          </p>
          <p class="text-justify">
            An advocate for contributing to society, I derive immense
            fulfillment from helping others. It's heartening to see the impact I
            can make in someone else's life, simply by lending an understanding
            ear and offering feasible solutions based on my own experiences.
            This was vividly demonstrated during my university days when, for my
            <a href="http://rua.ua.es/dspace/handle/10045/80396?locale=en"
              >thesis</a
            >, I selected the challenging subject of school bullying and
            developed a software solution to combat it. My aversion to injustice
            propels me to act against it assertively, even if it means going to
            great lengths to protect those who depend on me.
          </p>
          <p class="text-justify">
            A few years ago, I discovered DevOps, a field that perfectly aligns
            with my passion for helping others and continual learning. The
            appeal of DevOps lies in its breadth, covering many areas and
            allowing for a versatile range of tasks, which prevents monotony.
            Furthermore, it balances the development of technical skills with
            interpersonal ones—an aspect I believe is as valuable, if not more
            so, than mere technical proficiency.
          </p>
          <p class="text-justify">
            While my journey into DevOps has acquainted me with numerous
            technologies, Kubernetes has particularly piqued my interest. I've
            dedicated substantial time to understanding and working with it,
            honing my skills through hands-on practice. While there's always
            more to learn, I'm pleased with my current level of knowledge and
            proficiency.
          </p>
          <p class="text-justify">
            While I acknowledge the merit certifications can hold for some, I
            personally place higher value on the practical application and
            understanding of technologies. Although I earned the ACE
            certification from GCP years ago, I found that the practical,
            hands-on experience I gained while working proved more valuable. I
            do not discount the potential benefits of certifications, such as
            the Certified Kubernetes Administrator (CKA), but I prefer to learn
            by doing, which I find more engaging and worthwhile.
          </p>

          <p class="text-justify">
            As I continue to explore DevOps, I am eager to apply my skills in
            dynamic environments that value both technical know-how and
            interpersonal skills. I look forward to engaging with projects that
            challenge me, broaden my horizons, and have meaningful impact.
          </p>
          <v-col align="center">
            <v-card outlined max-width="600" color="white">
              <apexchart
                id="chart"
                type="pie"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </v-card>
          </v-col>
        </v-col>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<style>
.about-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}

.chart {
  margin-top: -50px;
}

.about-text {
  color: black;
}
</style>

<script>
import Vue from "vue";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

/*
"Coding",
"Movies",
"Travelling",
"Jogging",
"Climbing",
"Boxing",
"Gaming",
"Guitar",
"Chess",
"Mindfulness",
*/

export default {
  name: "About",
  data: function() {
    return {
      series: [15, 15, 10, 10, 10, 10, 10, 10, 5, 5],
      chartOptions: {
        chart: {
          type: "pie"
        },
        plotOptions: {
          pie: {
            customScale: 1
          }
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              plotOptions: {
                pie: {
                  customScale: 1
                }
              },
              legend: {
                show: false
              },
              dataLabels: {
                enabled: false
              }
            }
          }
        ],
        labels: [
          "Coding",
          "Movies",
          "Travelling",
          "Jogging",
          "Climbing",
          "Boxing",
          "Gaming",
          "Guitar",
          "Chess",
          "Mindfulness"
        ],
        theme: {
          mode: "light",
          monochrome: {
            enabled: true,
            color: "#607D8B"
          }
        },
        title: {
          text: "My life's routine",
          align: "center",

          style: {
            fontSize: "16px",
            fontWeight: "400",
            color: "black",
            fontFamily: "Roboto, sans-serif"
          }
        },
        dataLabels: {
          formatter(val) {
            //formatter(val, opts) {
            //const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + "%"];
          }
        },
        legend: {
          show: true,
          position: "bottom"
        }
      }
    };
  }
};
</script>
