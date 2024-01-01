// Disability Inclusion Risk levels chart
var options = {
  series: [76, 55, 68, 68],
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
  colors: ["#144492", "#F3BE00", "#00B050", "#00B050"],
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
  document.querySelector("#disabilityProjectRiskChart"),
  options
);
chart.render();

// <---- Total Project Disability Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [7, 5.9, 6.2, 5.1, 5.1, 8.2, 8.1, 9.5, 8, 7.6],
    },
    {
      name: "Revenue",
      type: "column",
      data: [5.8, 4.5, 5, 5.8, 4.5, 7, 6.8, 8.3, 6.4, 6.4],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [5, 3.5, 4.3, 3.2, 5.1, 7.2, 6.2, 7.3, 5.3, 5.2],
    },

    {
      name: "01",
      type: "line",
      data: [7.2, 6.3, 6.6, 6.2, 5.3, 9.5, 8.3, 10.2, 8.2, 7.8],
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
  colors: ["#FF5252", "#54A5FF", "#A020F0", "#FD4802"],

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
    max: 12,
    tickAmount: 7,
    forceNiceScale: true,
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
  document.querySelector("#disabilityTotalProjectChart"),
  options
);
chart.render();

// disability Contractor Spend Status Chart
var options = {
  series: [
    {
      name: "PRODUCT A",
      data: [
        15, 15, 16, 15, 16, 15, 16, 19, 15, 16, 15, 16, 15, 16, 18, 17, 18, 15,
        17, 16, 15, 17, 19, 17, 17, 16, 15, 15, 18, 16, 15, 16, 15, 15, 16, 15,
        16, 15, 17, 19, 15, 16, 16, 17, 13, 18, 18, 15, 18, 15, 15, 16, 15, 17,
        18, 16, 15, 16, 15, 16, 15, 14, 16, 15,
      ],
    },
    {
      name: "PRODUCT B",
      data: [
        7, 7, 12, 5, 12, 7, 10, 13, 7, 12, 5, 12, 7, 10, 12, 7, 10, 7, 10, 7, 7,
        8, 12, 6, 11, 6, 13, 7, 10, 7, 10, 7, 7, 7, 12, 5, 12, 7, 10, 13, 7, 12,
        5, 12, 7, 7, 12, 7, 10, 7, 10, 7, 7, 8, 12, 7, 10, 7, 10, 7, 10, 7, 10,
        8,
      ],
    },
    {
      name: "PRODUCT C",
      data: [
        15, 15, 22, 16, 12, 15, 13, 15, 15, 12, 16, 12, 16, 13, 20, 14, 12, 15,
        13, 15, 16, 14, 20, 15, 12, 15, 12, 16, 12, 15, 25, 15, 15, 15, 22, 15,
        12, 15, 12, 15, 15, 12, 16, 12, 17, 13, 20, 15, 12, 16, 15, 15, 16, 14,
        20, 15, 15, 13, 15, 15, 15, 17, 22, 15,
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
  colors: ["#A020F0", "#FF5252", "#54A5FF"],
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
    max: 50,
    labels: {
      formatter: function (value) {
        return "$" + value + "k";
      },
    },
    tickAmount: 6,
    forceNiceScale: true,
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
  document.querySelector("#disabilityConstractorChart"),
  options
);
chart.render();

// disability FTE pie chart
var options = {
  series: [20, 20, 15, 10, 20, 15],
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
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51", "#A1DAE8", "#FFBDCB"],
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
  document.querySelector("#disabilityChartPie"),
  options
);
chart.render();

// disability Training type Pie Chart
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
    ["Cadet (0.4 FTE)"],
    ["Apprentice (1.5 FTE)"],
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
  document.querySelector("#disabilityTrainingChartPie"),
  options
);
chart.render();

// disability Employment type Pie Chart
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
    "1.5 FTE",
    ["Part Time", "(1.0 FTE)"],
    ["Casual", "(0.4 FTE)"],
    ["Labour Hire", "(0.3 FTE)"],
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
  document.querySelector("#disabilityEmploymentChartPie"),
  options
);
chart.render();

// disability Risk and target status Bar Chart
var options = {
  series: [
    {
      data: [
        10, 96, 57, 40, 19, 76, 52, 38, 20, 72, 58, 37, 15, 70, 50, 40, 20, 65,
        48, 37, 17, 78, 62, 35, 20, 90, 42, 50, 37, 10, 78, 16, 94, 55, 16, 68,
        88, 10, 75, 34, 80, 20, 56, 65, 56, 24, 36, 60, 96, 10, 36, 64, 93, 15,
        48, 60, 88, 27, 42, 52, 97, 20, 44, 60,
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
    "#FD4802",
    "#144492",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#00B050",
    "#00B050",
    "#F3BE00",
    "#FD4802",
    "#144492",
    "#FD4802",
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
    "#FD4802",
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
  document.querySelector("#disabilityRiskChart"),
  options
);
chart.render();
