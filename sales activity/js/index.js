// bar charts
let charData = {
  labels: ["2004/05", "2005/06", "2006/07", "2007/08", "2008/09"],
  datasets: [
    {
      label: "IPD",
      type: "bar",
      backgroundColor: "#3366cc",
      data: [170, 170, 170, 170, 170],
    },
    {
      label: "redone",
      type: "bar",
      backgroundColor: "#dc3912",
      data: [900, 1000, 1080, 1170, 700],
    },
    {
      label: "OPD",
      type: "bar",
      backgroundColor: "#ff9900",
      data: [500, 600, 580, 570, 700],
    },
    {
      label: "patient total",
      type: "bar",
      backgroundColor: "#109618",
      data: [980, 1200, 760, 1000, 980],
    },
    {
      label: "purpleOne",
      type: "bar",
      backgroundColor: "#990099",
      data: [100, 200, 60, 150, 280],
    },
  ],
};
let charData1 = {
  labels: [
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
  ],
  datasets: [
    {
      label: "line1",
      type: "line",
      borderColor: "#37afd2",
      pointRadius: 1,
      data: [
        1, 2, 5, 7, 12, 18, 21, 25, 17, 6, 4, 9, 15, 16, 20, 16, 9, 6, 4, 11,
        15, 17, 13, 6,
      ],
      fill: false,
    },
    {
      label: "line2",
      type: "line",
      borderColor: "#dc3912",
      pointRadius: 1,
      data: [
        8, 2, 5, 7, 13, 16, 13, 17, 22, 23, 20, 18, 19, 23, 17, 8, 10, 16, 14,
        11, 12, 16, 10, 6,
      ],
      fill: false,
    },
    {
      label: "line3",
      type: "line",
      borderColor: "#109618",
      pointRadius: 1,
      data: [
        1, 3, 4, 8, 10, 8, 7, 12, 15, 8, 3, 4, 2, 7, 15, 18, 12, 21, 23, 20, 21,
        17, 18, 16,
      ],
      fill: false,
    },
  ],
};
let ctx = document.getElementById("mixed-chart");
let myChart;

let showGraph = () => {
  myChart = new Chart(ctx, {
    type: "bar",
    data: charData,
    options: {
      legend: { display: false },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};
showGraph();
let showLine = () => {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: "line",
    data: charData1,
    options: {
      legend: { display: false },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

// sales activities
var xValues1 = [
  "Active Items",
  "Low Stock Items",
  "All Item Groups",
  "All Items",
  "yellowOne",
];
var yValues1 = [55, 49, 44, 24, 15];
var barColors = ["#109618", "#DC3912", "#990099", "#3366CC", "#F5B24D"];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues1,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Product Details",
    },
    legend: { display: false },
  },
});
