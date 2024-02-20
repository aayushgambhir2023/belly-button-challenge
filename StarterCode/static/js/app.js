// Define the URL for fetching data
const dataUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialize the application
function initialize() {

    let dropdownMenu = d3.select("#selDataset");

    d3.json(dataUrl).then((data) => {
        console.log(`Data: ${data}`);

        let names = data.names;

        names.forEach((name) => {
            dropdownMenu.append("option")
                .text(name)
                .property("value", name);
        });

        let selectedName = names[0];

        displayDemographicPanel(selectedName);
        displayBarChart(selectedName);
        displayBubbleChart(selectedName);
        displayGaugeChart(selectedName);
    });
}

// Display the demographic panel
function displayDemographicPanel(selectedName) {
    d3.json(dataUrl).then((data) => {
        console.log(`Data: ${data}`);

        let metadata = data.metadata;
        
        let filteredData = metadata.filter((meta) => meta.id == selectedName);
      
        let metadataObject = filteredData[0];
        
        d3.select("#sample-metadata").html("");
  
        Object.entries(metadataObject).forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        console.log(metadataObject);
    });
}

// Display the bar chart
function displayBarChart(selectedName) {
    d3.json(dataUrl).then((data) => {
        console.log(`Data: ${data}`);

        let samples = data.samples;

        let filteredData = samples.filter((sample) => sample.id === selectedName);

        let sampleObject = filteredData[0];
        
        let trace = [{
            x: sampleObject.sample_values.slice(0,10).reverse(),
            y: sampleObject.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: sampleObject.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "rgb(166,172,237)"
            },
            orientation: "h"
        }];
        
        Plotly.newPlot("bar", trace);
    });
}

// Display the Bubble chart
function displayBubbleChart(selectedName) {
    d3.json(dataUrl).then((data) => {

        let samples = data.samples;
    
        let filteredData = samples.filter((sample) => sample.id === selectedName);
    
        let sampleObject = filteredData[0];
        
        let trace = [{
            x: sampleObject.otu_ids,
            y: sampleObject.sample_values,
            text: sampleObject.otu_labels,
            mode: "markers",
            marker: {
                size: sampleObject.sample_values,
                color: sampleObject.otu_ids,
                colorscale: "Sunset"
            }
        }];
    
        let layout = {
            xaxis: {title: "OTU ID"}
        };
    
        Plotly.newPlot("bubble", trace, layout);
    });
}

// Display the Gauge chart
function displayGaugeChart(selectedName) {
    d3.json(dataUrl).then((data) => {

        let metadata = data.metadata;
        
        let filteredData = metadata.filter((meta) => meta.id == selectedName);
      
        let metadataObject = filteredData[0];

        let trace = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: metadataObject.wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 24}},
            type: "indicator", 
            mode: "gauge+number",
            gauge: {
                axis: {range: [null, 10]}, 
                bar: {color: "rgb(68,166,198)"},
                steps: [
                    { range: [0, 1], color: "rgb(233,245,248)" },
                    { range: [1, 2], color: "rgb(218,237,244)" },
                    { range: [2, 3], color: "rgb(203,230,239)" },
                    { range: [3, 4], color: "rgb(188,223,235)" },
                    { range: [4, 5], color: "rgb(173,216,230)" },
                    { range: [5, 6], color: "rgb(158,209,225)" },
                    { range: [6, 7], color: "rgb(143,202,221)" },
                    { range: [7, 8], color: "rgb(128,195,216)" },
                    { range: [8, 9], color: "rgb(113,187,212)" },
                    { range: [9, 10], color: "rgb(98,180,207)" }
                ]
            }
        }];

         Plotly.newPlot("gauge", trace);
    });
}

// Update plots when option changed
function updatePlots(selectedValue) {
    displayDemographicPanel(selectedValue);
    displayBarChart(selectedValue);
    displayBubbleChart(selectedValue);
    displayGaugeChart(selectedValue);
}

initialize();
