// priority Inclusion Risk levels chart
var options = {
  series: [76, 62, 76, 48],
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
        background: "#00B050",
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
          label: ["Low"],
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
  document.querySelector("#priorityProjectRiskChart"),
  options
);
chart.render();

// <---- Total Project priority Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [18, 16, 18, 14, 18, 21, 23, 19.8, 17, 19.2, 17, 19.2],
    },
    {
      name: "Revenue",
      type: "column",
      data: [15, 11, 14, 12, 17, 17, 19.8, 17, 11, 16.5, 11, 16.5],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [12, 7, 12, 7.5, 18, 18, 18, 14, 8.1, 18, 8.1, 18],
    },
    {
      name: "01",
      type: "line",
      data: [19, 17, 19, 15, 19, 22, 24, 20.8, 18, 20.2, 18, 20],
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
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    min: 0,
    max: 26,
    tickAmount: 7,
    forceNiceScale: true,
    title: {
      text: "",
    },
    labels: {
      formatter: function (value) {
        // Format Y-axis labels with one decimal point
        return Math.floor(value);
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
  document.querySelector("#priorityTotalProjectChart"),
  options
);
chart.render();

// priority Contractor Spend Status Chart
var options = {
  series: [
    {
      name: "PRODUCT A",
      data: [
        15, 15, 16, 15, 16, 15, 16, 19, 15, 16, 15, 16, 15, 16, 18, 15, 18, 15,
        17, 16, 16, 17, 18, 16, 18, 15, 18, 17, 18, 16, 18, 16, 15, 15, 16, 15,
        16, 15, 16, 19, 15, 16, 15, 16, 15, 16, 18, 15, 18, 15, 17, 16, 16, 17,
        18, 16, 18, 15, 18, 17, 18, 16, 18, 16,
      ],
    },
    {
      name: "PRODUCT B",
      data: [
        7, 7, 12, 5, 12, 7, 10, 11, 7, 12, 5, 12, 7, 9, 12, 7, 10, 7, 10, 7, 7,
        10, 12, 7, 10, 7, 10, 7, 10, 7, 10, 7, 7, 7, 12, 5, 12, 7, 10, 11, 7,
        12, 5, 12, 7, 9, 12, 7, 10, 7, 10, 7, 7, 10, 12, 7, 10, 7, 10, 7, 10, 7,
        10, 7,
      ],
    },
    {
      name: "PRODUCT C",
      data: [
        15, 15, 22, 16, 12, 15, 13, 18, 15, 12, 16, 12, 16, 14, 20, 16, 12, 15,
        13, 15, 15, 12, 20, 15, 12, 15, 12, 14, 12, 15, 22, 15, 15, 15, 22, 16,
        12, 15, 13, 18, 15, 12, 16, 12, 16, 14, 20, 16, 12, 15, 13, 15, 15, 12,
        20, 15, 12, 15, 12, 14, 12, 15, 22, 15,
      ],
    },
  ],
  chart: {
    fontFamily: "Poppins",
    type: "bar",
    height: 450,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#00BC8B", "#037BFF", "#FF49ED"],
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      // barWidth: "80px",
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return "$" + value + "k";
      },
    },
  },
  xaxis: {
    categories: [
      "Transport",
      "Security",
      "Test and Tag",
      "Temporary Fence",
      "Site Equipment",
      "Wet Hire",
      "Scaffold & Props",
      "Generator Hire",
      "Builders Clean",
      "Design",
      "Authority Connections",
      "Workshop & Tool Costs",
      "Traffic Management",
      "Safety",
      "First Aid & Spill Kits",
      "Civil Works",
      "Inground Services",
      "Structural Steel",
      "Structure - F.R.P.",
      "Brick & Blockwork",
      "Facade - Aluminium",
      "Floor Substrate",
      "First Aid and Spill Kits",
      "Door Hardware",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
      "Safety",
      "First Aid and Spill Kits",
      "Civil Works",
      "Inground Services",
      "Structural Steel",
      "Structure - F.R.P.",
      "Brick & Blockwork",
      "Facade - Aluminium",
      "Floor Substrate",
      "First Aid and Spill Kits",
      "Door Hardware",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
      "Pinboards/Whiteboards",
      "Painting",
      "Joinery",
      "Shower Screens",
      "Hydraulic Services",
      "Fittings, Fixtures, Equip.",
      "Electrical Services",
      "Substation",
      "Mechanical Services",
      "Fire Services",
      "Landscaping – Hard",
      "Landscaping & Irrigation",
      "Asphalt and Kerbing",
    ],

    scrollbar: {
      enabled: true, // Enable the scrollbar
      offsetY: -10, // Adjust the position of the scrollbar
    },
    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

var chart = new ApexCharts(
  document.querySelector("#priorityConstractorChart"),
  options
);
chart.render();

// priority FTE pie chart
var options = {
  series: [20, 20, 20, 10, 10, 10, 10],
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
    "#FF6A8A",
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

var chart = new ApexCharts(
  document.querySelector("#priorityChartPie"),
  options
);
chart.render();

// priority Training type Pie Chart
var options = {
  series: [30, 25, 30, 25],
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
    ["Trainee (1.2 FTE)"],
    ["Cadet 0.4 FTE"],
    ["Apprentice 1.5 FTE"],
    ["Work Experience (0.4 FTE)"],
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
  document.querySelector("#priorityTrainingChartPie"),
  options
);
chart.render();

// priority Employment type Pie Chart
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
    ["1.5 FTE"],
    ["Part Time (1.0 FTE)"],
    ["Casual (0.4 FTE)"],
    ["Labour Hire (0.3 FTE)"],
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
  document.querySelector("#priorityEmploymentChartPie"),
  options
);
chart.render();

// priority Risk and target status Bar Chart
var options = {
  series: [
    {
      data: [
        70, 80, 36, 73, 65, 10, 73, 18, 60, 10, 56, 84, 56, 7, 36, 84, 70, 10,
        59, 75, 65, 15, 95, 60, 53, 17, 43, 52, 74, 10, 45, 85, 92, 7, 35, 75,
        88, 10, 72, 18, 80, 10, 55, 70, 55, 7, 35, 60, 97, 10, 86, 66, 95, 14,
        46, 60, 88, 17, 43, 52, 96, 10, 45, 60,
      ],
    },
  ],

  chart: {
    fontFamily: "Poppins",
    height: 450,
    type: "bar",
    eevents: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
    toolbar: {
      show: false,
    },
  },

  legend: {
    show: false,
  },

  colors: [
    "#144492",
    "#00B050",
    "#FD4802",
    "#00B050",
    "#144492",
    "#FD4802",
    "#144492",
    "#FD4802",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#F3BE00",
    "#00B050",
    "#144492",
    "#FD4802",
    "#144492",
    "#00B050",
    "#144492",
    "#FD4802",
    "#00B050",
    "#00B050",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#F3BE00",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#00B050",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#00B050",
    "#144492",
    "#FD4802",
    "#144492",
    "#FD4802",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#F3BE00",
    "#00B050",
    "#144492",
    "#FD4802",
    "#144492",
    "#00B050",
    "#144492",
    "#FD4802",
    "#00B050",
    "#00B050",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#F3BE00",
    "#144492",
    "#FD4802",
    "#F3BE00",
    "#00B050",
  ],
  plotOptions: {
    bar: {
      columnWidth: "65%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },

  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },

  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
  },

  xaxis: {
    categories: [
      "Transport",
      "Security",
      "Test and Tag",
      "Temporary Fence",
      "Site Equipment",
      "Wet Hire",
      "Scaffold & Props",
      "Generator Hire",
      "Builders Clean",
      "Design",
      "Authority Connections",
      "Workshop & Tool Costs",
      "Traffic Management",
      "Safety",
      "First Aid & Spill Kits",
      "Civil Works",
      "Inground Services",
      "Structural Steel",
      "Structure - F.R.P.",
      "Brick & Blockwork",
      "Facade - Aluminium",
      "Floor Substrate",
      "First Aid and Spill Kits",
      "Door Hardware",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
      "Safety",
      "First Aid and Spill Kits",
      "Civil Works",
      "Inground Services",
      "Structural Steel",
      "Structure - F.R.P.",
      "Brick & Blockwork",
      "Facade - Aluminium",
      "Floor Substrate",
      "First Aid and Spill Kits",
      "Door Hardware",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
      "Pinboards/Whiteboards",
      "Painting",
      "Joinery",
      "Shower Screens",
      "Hydraulic Services",
      "Fittings, Fixtures, Equip.",
      "Electrical Services",
      "Substation",
      "Mechanical Services",
      "Fire Services",
      "Landscaping – Hard",
      "Landscaping & Irrigation",
      "Asphalt and Kerbing",
    ],

    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#priorityRiskChart"),
  options
);
chart.render();
