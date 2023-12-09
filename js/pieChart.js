// pie chart
var options = {
  series: [8, 7, 5, 8, 10, 15, 10, 7, 13, 5, 8, 4],
  chart: {
    width: "30%",
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
  },

  labels: [
    "Youth 16-24",
    "Mature aged",
    "Ex justice",
    "Asylum seeker/refugees",
    "Long term unemployed",
    "LGBTQI+",
    "Aboriginal & Torres Strait Islanders",
    "Women",
    "People living with a disability",
    "Entrenched disadvantage",
    "Women escaping violence",
    "New migrants",
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: [
    "#FF5438",
    "#000091",
    "#980090",
    "#FF9F51",
    "#A1DAE8",
    "#FFBDCB",
    "#FF787C",
    "#82E200",
    "#00C3FF",
    "#8D0085",
    "#00FFFF",
    "#A627D3",
  ],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chartPie"), options);
chart.render();
