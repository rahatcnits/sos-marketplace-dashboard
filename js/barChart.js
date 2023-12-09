// Contractor Spend Status Chart
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
    min: 0,
    max: 50, // Set the maximum value to 12
    tickAmount: 6, // Set the number of ticks (labels) on the y-axis
    forceNiceScale: true,
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
  document.querySelector("#constractorChart"),
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

var chart = new ApexCharts(document.querySelector("#riskChart"), options);
chart.render();
