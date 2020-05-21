import Chart from "chart.js";

export function drawMaleChart() {
  var myChart = document.querySelector("#my-chart-male");

  var chart = new Chart(myChart, {
    type: "horizontalBar",
    data: getMaleChartData(),
    options: chartOptions(),
  });
}

export function drawFemaleChart() {
  var myChart = document.querySelector("#my-chart-female");

  var chart = new Chart(myChart, {
    type: "horizontalBar",
    data: getFemaleChartData(),
    options: chartOptions(),
  });
}

function getMaleChartData() {
  return {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "blue",
        borderColor: "rgb(255, 99, 132)",
        data: randomizeData("male"),
      },
    ],
  };
}

function getFemaleChartData() {
  return {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "pink",
        borderColor: "rgb(255, 99, 132)",
        data: randomizeData("female"),
      },
    ],
  };
}

function chartOptions() {
  return {};
}

function randomizeData(gender) {
  let data = [];

  if (gender === "male") {
    for (let index = 0; index < 8; index++) {
      data.push(0 - Math.floor(Math.random() * 10));
    }
  } else {
    for (let index = 0; index < 8; index++) {
      data.push(Math.floor(Math.random() * 10));
    }
  }

  return data;
}
