// financial pie chart
var options = {
  series: [600000, 200000],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#144492", "#980090"],
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
            fontSize: "14px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: "",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return `800,000`;
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
  document.querySelector("#financialGoalPieChart"),
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
            fontSize: "14px",
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
  document.querySelector("#environmentalGoalPieChart"),
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
            fontSize: "14px",
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
  document.querySelector("#employmentGoalPieChart"),
  options
);
chart.render();

/// product fire UN SDG page chart ///

// financial pie chart
var options = {
  series: [70, 30],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#144492", "#980090"],
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
            fontSize: "20px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return "$" + val + "K";
            },
          },
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
            fontSize: "20px",
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
  series: [1, 4],
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
            fontSize: "20px",
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

// social proc chart
var options = {
  series: [47, 36, 17],
  chart: {
    width: "60%",
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: true,
    style: {
      fontFamily: "Poppins", // Set the font family to Poppins
      fontWeight: 300, // Set the font weight to 300
    },
    formatter: function (val, opt) {
      // return val + " " + "FTE";
      return opt.w.globals.seriesNames[opt.seriesIndex];
    },
  },
  plotOptions: {
    pie: {
      offsetX: 0,
      offsetY: 0,
    },
  },

  labels: [["47%"], ["36%"], ["17%"]],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: ["#FF5438", "#000091", "#980090"],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          width: 280,
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 220,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#socialProcChartPie"),
  options
);
chart.render();

// Sustainable Materials Chart
var options = {
  series: [85, 15],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#09775A", "#D4AB16"],
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
            show: false,
            fontSize: "30px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: false,
            showAlways: true,
            label: "",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return `${a + b}%`;
              });
            },
          },
        },
        size: "70%",
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
  document.querySelector("#sustainableMaterialsChartPie"),
  options
);
chart.render();

// Local Content Chart
var options = {
  series: [60, 27],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#FF5438", "#980090"],
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
            show: false,
            fontSize: "30px",
            fontFamily: "Poppins",
            color: "#000000",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: false,
            showAlways: true,
            label: "",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return `${a + b}%`;
              });
            },
          },
        },
        size: "70%",
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
  document.querySelector("#sustainableLocalChartPie"),
  options
);
chart.render();
