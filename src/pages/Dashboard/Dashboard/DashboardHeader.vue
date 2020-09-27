<template>
  <div class="panel-header panel-header-lg">
    <header-chart :height="255" :data="chartData" :labels="chartLabels">
    </header-chart>
  </div>
</template>

<script>
import HeaderChart from "./HeaderChart";

export default {
  name: "overview-header",
  components: {
    HeaderChart
  },
  data() {
    return {
      chartData: [20, 50, 100, 175, 185, 200, 220, 235, 340, 380, 390, 410],
      chartLabels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ]
    };
  }
};
</script>

<style scoped></style>
