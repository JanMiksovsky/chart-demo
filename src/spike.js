import { createCanvas } from "canvas";
import Chart from "chart.js/auto";

function generateBarChart(data) {
  // Create a canvas element
  const canvas = createCanvas(1000, 1000, "svg");
  const ctx = canvas.getContext("2d");

  // Define the chart configuration
  const config = {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: data.label,
          data: data.values,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Create the chart
  new Chart(ctx, config);

  // Return the SVG string
  const buffer = canvas.toBuffer("image/svg+xml");
  const text = buffer.toString("utf-8");
  return text;
}

// Example data block
const sampleData = {
  labels: ["January", "February", "March", "April"],
  label: "Sales",
  values: [10, 20, 30, 40],
};

// Generate the bar chart and get the SVG
const svgData = generateBarChart(sampleData);
console.log(svgData);
