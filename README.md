# belly-button-challenge
In this assignment, I was tasked with building an interactive dashboard to explore the Belly Button Biodiversity dataset, which delves into the microbial communities inhabiting human navels. The dataset highlights that a select few microbial species, termed operational taxonomic units (OTUs), are prevalent in over 70% of individuals, while the remainder are relatively rare. The first steps involved creating a new repository named "belly-button-challenge" and cloning it to my local computer. Then, using the D3 library, I read in the samples.json file from a provided URL. Subsequently, I constructed a horizontal bar chart with a dropdown menu to exhibit the top 10 OTUs found in each individual, utilizing sample_values for bar heights, otu_ids for labels, and otu_labels for hovertext. Following this, I created a bubble chart to visualize each sample, employing otu_ids for x-values, sample_values for y-values and marker size, otu_ids for marker colors, and otu_labels for text values. Additionally, I displayed the sample metadata, showcasing demographic information in key-value pairs from the metadata JSON object. Lastly, I updated all plots dynamically when a new sample was selected, ensuring a seamless interactive experience for users. As an optional advanced challenge, I could adapt a Gauge Chart to portray the weekly washing frequency of the individual, updating it accordingly with each new sample selection. Throughout the process, I made regular commits to my GitHub repository and provided thorough documentation in the README.md file. Finally, I deployed my application to a free static page hosting service, such as GitHub Pages, and submitted the links to my deployment and GitHub repo for evaluation.
