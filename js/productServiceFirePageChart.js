// financial pie chart
var options = {
  series: [200, 600],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#980090", "#144492"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return "$" + val + "k";
            },
          },
          // total: {
          //   show: true,
          //   formatter: function (val) {
          //     return val;
          //   },
          // },
          total: {
            show: true,
            showAlways: true,
            label: "",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return `$${a + b}k`;
              });
            },
          },
        },
        size: "75%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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

var chart = new ApexCharts(
  document.querySelector("#productFireFinancialGoalPieChart"),
  options
);
chart.render();

// Environmental Goal chat
var options = {
  series: [500],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#144492"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
          },
        },
        size: "75%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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

var chart = new ApexCharts(
  document.querySelector("#productFireEnvironmentalGoalPieChart"),
  options
);
chart.render();

// Sustainability Goal Chart
var options = {
  series: [5, 15],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#F3BE00", "#144492"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
          },
        },
        size: "75%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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

var chart = new ApexCharts(
  document.querySelector("#productFireEmploymentGoalPieChart"),
  options
);
chart.render();
