// Project Indigenous Inclusion Risk Levels
var options = {
  series: [78, 37, 55, 45, 50],
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
  document.querySelector("#indigenousProjectRiskChart"),
  options
);
chart.render();

// <---- Total Project Number of Indigenous Businesses ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [3.6, 1.6, 2.3, 1, 2.2, 2.2, 2.6, 1.7, 2, 2.6],
    },
    {
      name: "Revenue",
      type: "column",
      data: [6.6, 2.4, 2.9, 3.6, 3.6, 6, 5.4, 4.4, 6.6, 6],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [5.2, 6, 6.8, 4.8, 3.9, 3.9, 3.4, 2.4, 4.7, 4],
    },
    {
      name: "01",
      type: "line",
      data: [8.2, 7, 8.2, 6.3, 5, 7, 6.7, 5.5, 7.3, 7],
      color: "#FF49ED",
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
  colors: ["#F3BE00", "#964B00", "#FF5252", "#FD4802"],

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
    max: 12,
    labels: {
      formatter: function (value) {
        // Format Y-axis labels with one decimal point
        return Math.floor(value);
      },
    },
    tickAmount: 7, // Set the number of ticks (labels) on the y-axis
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
  document.querySelector("#indigenousSuppliersChart"),
  options
);
chart.render();

// Contractor Spend Status Chart
var options = {
  series: [
    {
      name: "PRODUCT A",
      data: [
        15, 17, 16, 14, 16, 14, 16, 16, 15, 16, 15, 16, 14, 17, 14, 15, 16, 12,
        17, 15, 15, 15, 16, 16, 18, 14, 15, 14, 12, 15, 14, 18, 15, 15, 17, 15,
        16, 15, 16, 17, 15, 16, 15, 16, 15, 16, 17, 15, 16, 15, 16, 15, 15, 16,
        17, 15, 16, 15, 16, 15, 16, 15, 16, 15,
      ],
    },
    {
      name: "PRODUCT B",
      data: [
        7, 8, 12, 6, 12, 11, 9, 12, 17, 11, 5, 12, 7, 17, 10, 15, 16, 6, 14, 7,
        15, 9, 13, 12, 14, 12, 12, 17, 13, 15, 14, 15, 7, 7, 11, 7, 12, 7, 7,
        12, 7, 7, 6, 7, 7, 8, 7, 7, 12, 7, 7, 6, 6, 7, 12, 7, 7, 7, 7, 7, 12, 7,
        11, 8,
      ],
    },
    {
      name: "PRODUCT C",
      data: [
        16, 17, 25, 17, 13, 13, 14, 16, 5, 14, 17, 13, 16, 5, 18, 7, 9, 18, 16,
        15, 7, 15, 14, 9, 15, 10, 17, 6, 16, 7, 18, 11, 15, 15, 25, 14, 12, 15,
        16, 18, 15, 17, 16, 17, 16, 15, 19, 16, 12, 14, 17, 16, 16, 16, 21, 15,
        17, 14, 17, 15, 12, 15, 25, 14,
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
  colors: ["#964B00", "#FF5252", "#F3BE00"],
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
  document.querySelector("#indigenousConstractorChart"),
  options
);
chart.render();

// indigenous pie chart
var options = {
  series: [20, 20, 15, 10, 20, 15],
  chart: {
    width: "50%",
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
  document.querySelector("#indigenousChartPie"),
  options
);
chart.render();

// Indigenous Training type Pie Chart
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
  document.querySelector("#indigenousTrainingChartPie"),
  options
);
chart.render();

// Indigenous Employment type Pie Chart
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
  document.querySelector("#indigenousEmploymentChartPie"),
  options
);
chart.render();

// Risk and target status Bar Chart
var options = {
  series: [
    {
      data: [
        92, 7, 35, 75, 88, 10, 72, 18, 80, 10, 55, 70, 55, 7, 35, 60, 97, 10,
        86, 66, 95, 14, 46, 60, 88, 17, 43, 52, 96, 10, 45, 60, 92, 7, 35, 75,
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
  document.querySelector("#indigenousRiskChart"),
  options
);
chart.render();
