// Project Risk Levels chart
var options = {
  series: [78, 45, 68, 30],
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
        background: "#FF0000",
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
          label: ["High"],
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
  colors: ["#144492", "#F3BE00", "#00B050", "#FF0000"],
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
  document.querySelector("#mpsgProjectRiskChart"),
  options
);
chart.render();

// Total Project Social Suppliers Chart
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [38, 28, 34, 27, 45, 33, 40, 45, 42, 39],
    },
    {
      name: "Revenue",
      type: "column",
      data: [31, 22, 28, 24, 40, 28, 34, 36, 31, 31],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [27, 17, 24, 18, 45, 29, 31, 31, 27, 37],
    },
    {
      name: "01",
      type: "line",
      data: [42, 32, 38, 30, 51, 42, 45, 51, 45, 41],
      color: "#FD4802",
    },
  ],
  chart: {
    height: 380,
    type: "line",
    stacked: false,
    toolbar: false,
    fontFamily: "Poppins",
  },
  stroke: {
    width: [5, 5],
    curve: "smooth",
  },
  colors: ["#00BC8B", "#037BFF", "#FF49ED", "#FD4802"],

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
    ],
  },
  yaxis: {
    title: {
      text: "",
    },
    min: 0,
    max: 60,
    tickAmount: 7,
    forceNiceScale: true,
    labels: {
      formatter: function (value) {
        // Format Y-axis labels with one decimal point
        return value + "Hrs";
      },
    },
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
  document.querySelector("#mpsgSuppliersChart"),
  options
);
chart.render();

// mpsg pie chart
var options = {
  series: [8, 7, 5, 8, 5, 63, 4],
  chart: {
    width: "50%",
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: true,
    style: {
      fontFamily: "Poppins", // Set the font family to Poppins
      fontWeight: 300, // Set the font weight to 300
    },
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
    "Non-Priority Group Workforce",
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
    "#FF787C",
    "#A627D3",
  ],
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

var chart = new ApexCharts(document.querySelector("#mpsgChartPie"), options);
chart.render();

// mpsg Training type Pie Chart
var options = {
  series: [30, 30, 35, 30],
  chart: {
    width: "100%",
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: false,
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

  labels: [
    ["Intern (2 FTE)"],
    ["Cadet 1.5 FTE"],
    ["Apprentice 2.5 FTE"],
    ["Work Experience (1.8 FTE)"],
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51"],
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
  document.querySelector("#mpsgTrainingChartPie"),
  options
);
chart.render();

// mpsg Employment type Pie Chart
var options = {
  series: [20, 20, 20, 40],
  chart: {
    width: "100%",
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: false,
    style: {
      fontFamily: "Poppins", // Set the font family to Poppins
      fontWeight: 300, // Set the font weight to 300
    },
    formatter: function (val, opt) {
      // return val + " " + "FTE";
      return opt.w.globals.seriesNames[opt.seriesIndex];
    },
    position: "inside",
    offset: 25,
  },
  plotOptions: {
    pie: {
      offsetX: 0,
      offsetY: 0,
    },
  },

  labels: [
    ["Labour Hire (1.5 FTE)"],
    ["Part Time (2.0 FTE)"],
    ["Casual (1.3 FTE)"],
    ["Full Time (3.0 FTE)"],
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51"],
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
  document.querySelector("#mpsgEmploymentChartPie"),
  options
);
chart.render();
