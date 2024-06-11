import { Tree } from "@weborigami/async-tree";
import { createCanvas } from "canvas";
import Chart from "chart.js/auto";

export default async function chart(input) {
  const config = await Tree.plain(input);

  // Create a canvas element
  const canvas = createCanvas(1000, 1000, "svg");
  const ctx = canvas.getContext("2d");

  // Create the chart
  new Chart(ctx, config);

  // Return the chart in SVG format
  return canvas.toBuffer("image/svg+xml");
}
