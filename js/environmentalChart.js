// Project Risk Levels chart
var options = {
  series: [75, 68, 40, 45, 30],
  chart: {
    height: 370,
    type: "radialBar",
    fontFamily: "Poppins",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "#F3BE00",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: true,
          color: "#000000",
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          label: ["Medium"],
          color: "#000",
          fontSize: "15px",
        },
      },
      track: {
        show: false,
      },
      stroke: {
        show: false,
      },
    },
  },
  colors: ["#144492", "#00B050", "#F3BE00", "#00B050", "#FF0000"],
  labels: ["Completion", "Medium", "Low", "High"],
  legend: {
    show: false,
    floating: true,
    fontSize: "14px",
    position: "left",
    offsetX: 0,
    offsetY: 13,
    labels: {
      colors: "#878787",
      useSeriesColors: false,
    },
    markers: {
      size: 0,
      width: 0,
      height: 0,
    },
    itemMargin: {
      vertical: 3,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#environmentalRiskChart"),
  options
);
chart.render();

// <---- Total Project Social Suppliers Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [0.8, 0.8, 1.3, 1.2, 1.45, 1.25, 1.4, 1.2, 1.45, 0.9, 1.2, 1.45],
    },
    {
      name: "Revenue",
      type: "column",
      data: [1.1, 1.35, 1.45, 1.65, 1.75, 2.15, 1.9, 2.1, 2.3, 2.3, 2.1, 1.9],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [0.8, 0.7, 1.25, 1.3, 1.15, 1.35, 1, 1.25, 0.75, 1.35, 0.75, 1],
    },
  ],
  chart: {
    height: 380,
    type: "line",
    stacked: false,
    toolbar: false,
    fontFamily: "Poppins",
  },
  colors: ["#00BC8B", "#037BFF", "#BFEEE2"],

  legend: {
    show: false,
  },

  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    min: 0.5, // Set the minimum Y-axis value to 0.5
    max: 3.5,
    labels: {
      formatter: function (value) {
        // Format Y-axis labels with one decimal point
        return value.toFixed(1) + "T";
      },
    },
    tickAmount: 7,
    forceNiceScale: true,
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#environmentalSuppliersChart"),
  options
);
chart.render();

// Summary of Environmental Benefits Donut Chart

// Waste Reduction (Tonnage) chart
var options = {
  series: [70, 65, 25, 30],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#C5E0B4", "#70AD47", "#999999", "#385723"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
          name: {
            show: false,
          },
          value: {
            show: false,
            fontSize: "30px",
            fontFamily: "Poppins",
            color: "rgba(0,0,0,0.7)",
            fontWeight: 700,
            formatter: function (val) {
              return val + "T";
            },
          },
        },
      },
    },
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
  document.querySelector("#environmentalWasteChart"),
  options
);
chart.render();

// Environmental Regeneration Equivalent Hectares Chart
var options = {
  series: [30, 55, 41, 75],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#002060", "#2E75B6", "#BDD7EE", "#00B0F0"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
          name: {
            show: false,
          },
          value: {
            show: false,
            fontSize: "30px",
            fontFamily: "Poppins",
            color: "rgba(0,0,0,0.7)",
            fontWeight: 700,
            formatter: function (val) {
              return val + "H";
            },
          },
        },
      },
    },
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
  document.querySelector("#environmentalRegenerationChart"),
  options
);
chart.render();

// Renewable Energy Chart
var options = {
  series: [35, 55, 85, 30],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
          name: {
            show: false,
          },
          value: {
            show: false,
            fontSize: "30px",
            fontFamily: "Poppins",
            color: "rgba(0,0,0,0.7)",
            fontWeight: 700,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
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
  document.querySelector("#environmentalRenewableChart"),
  options
);
chart.render();

// Carbon Emissions Reduction Chart
var options = {
  series: [30, 55, 41, 30],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#3c3c3cb3", "#00000066", "#00000033", "#000000"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
          name: {
            show: false,
          },
          value: {
            show: false,
            fontSize: "30px",
            fontFamily: "Poppins",
            color: "rgba(0,0,0,0.7)",
            fontWeight: 700,
            formatter: function (val) {
              return val + "T";
            },
          },
        },
      },
    },
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
  document.querySelector("#environmentalCarbonChart"),
  options
);
chart.render();
