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
            I’m a graduated Computer Engineer from the
            <a href="https://www.ua.es/en/index.html">University of Alicante</a>
            and the
            <a
              href="https://eps.ua.es/en/ingenieria-informatica/curriculum/high-academic-performance-groups.html"
              >ARA</a
            >
            (Alto Rendimiento Académico or High Academic Performance in English)
            group. I’m of Russian background although I’ve been living in Spain
            through the majority of my life. I also studied
            <a href="https://www.ibo.org/">International Baccalaureate</a> in
            Sweden (English-coursed), and thus I speak both Spanish and English
            fluently, albeit with a stronger proficiency in English due to
            simply being stuck in using it in my daily life ever since my IB
            endeavour.
          </p>
          <p class="text-justify">
            I enjoy solving hard and deep-thought problems, often analyzing
            every possibility and outcome before deciding on which path to take
            in order to achieve effectiveness and efficiency in what I’m doing,
            hence a took a liking for writing logic-based code and decided to
            follow said path. Machine Learning is one of the concepts that I
            allow myself to deem as a wander in what it can accomplish in this
            field - later on, I decided to apply it onto real-world issues such
            as bullying and its detection and prevention in my final thesis
            <a href="http://rua.ua.es/dspace/handle/10045/80396?locale=en"
              >here</a
            >.
          </p>
          <p class="text-justify">
            I always aim to cultivate myself, either in the IT field, language,
            culture or others, being predisposed to learn something new every
            day, be it a word, a new development methodology or something
            customary. Technology especially, advances at an unprecedented rate
            nowadays, so there’s always something to learn. Amongst other
            interests that I enjoy and aren't as self-centered is the principle
            of helping others, which is why working as Technical Solutions
            Representative for Google Cloud Platform drew my attention – I enjoy
            being cordial and of help to someone, since I know what it’s like to
            be on the other side. The choice to tackle bullying in elementary
            schools for my thesis was something based around this idea as well.
            On a last note, this goes beyond my professional or educational life
            as well – I actively look for volunteer work in my hometown of
            Alicante if time affords it, disregarding whether it is related to
            IT or if it would be beneficial to me.
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

/*"Coding",
          "Movies/TV Shows",
          "Languages",
	        "Travelling",
          "Gaming",
          "Jogging",
          "Yoga",
          "Guitar",
          "Volunteering",
          "Trekking"*/

export default {
  name: "About",
  data: function() {
    return {
      series: [20, 15, 15, 15, 10, 5, 5, 5, 5, 5],
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
          "Jogging",
          "Guitar",
          "Movies/TV Shows",
          "Gaming",
          "Travelling",
          "Boxing",
          "Yoga",
          "Volunteering",
          "Trekking"
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
