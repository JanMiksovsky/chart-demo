import { createCanvas } from "canvas";
import Chart from "chart.js/auto";

function generateBarChart() {
  // Create a canvas element
  const canvas = createCanvas(1000, 1000, "svg");
  const ctx = canvas.getContext("2d");

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  // Define the chart configuration
  const config = {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  };

  // Create the chart
  new Chart(ctx, config);

  // Return the SVG string
  const buffer = canvas.toBuffer("image/svg+xml");
  const text = buffer.toString("utf-8");
  return text;
}

// Generate the bar chart and get the SVG
const svgData = generateBarChart(sampleData);
console.log(svgData);
