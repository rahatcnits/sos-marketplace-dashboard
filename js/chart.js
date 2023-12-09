// Project Risk Levels chart
var options = {
  series: [76, 55, 68, 40],
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
  document.querySelector("#projectRiskChart"),
  options
);
chart.render();

// <---- Total Project Social Suppliers Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [3, 4.2, 5, 6.3, 7.3, 8.3, 9.4, 10.4, 11.8, 7.8],
    },
    {
      name: "Revenue",
      type: "column",
      data: [2.5, 3.2, 3.8, 5.6, 6.4, 7, 7.9, 8.4, 8.8, 6.2],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [2, 2.5, 3.5, 4.4, 7.3, 7.5, 7.4, 7.7, 7.7, 7.6],
    },
    {
      name: "01",
      type: "line",
      data: [2.5, 3.5, 4, 5.7, 6.6, 7.2, 8.4, 8.6, 9.3, 7.5],
      color: "#FD4802",
    },
  ],
  chart: {
    height: 350,
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
      columnWidth: "55%",
      borderRadius: 2,
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
    max: 12, // Set the maximum value to 12
    labels: {
      formatter: function (value) {
        return Math.floor(value);
      },
    },
    tickAmount: 7, // Set the number of ticks (labels) on the y-axis
    forceNiceScale: true,
    // tickInterval: 3, // Set the interval between ticks to 2
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

var chart = new ApexCharts(document.querySelector("#suppliersChart"), options);
chart.render();
