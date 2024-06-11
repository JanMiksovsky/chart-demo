# A chart

<figure>
${
  acquisitions.yaml/
  → (data) => {
    type: "bar"
    data: {
      labels: @map(data, (row) => row/year)
      datasets: [
        {
          label: "Acquisitions by year"
          data: @map(data, (row) => row/count)
        }
      ]
    }
  } 
  → chart.js
}
</figure>
