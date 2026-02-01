# TV Energy Consumption Data Story

## About This Project

This project is part of **Exercise 3 – Data Visualisation**. The goal is to tell a clear and engaging data story using the Australian TV energy consumption dataset. The website and visualisations are designed to help non-technical users understand how different television characteristics (screen size, technology, brand, and energy rating) affect energy consumption.

The project combines **data processing in KNIME**, **visualisation**, and **web-based storytelling** to communicate insights effectively.

---

## Audience

### Who is the audience?

The primary audience for this visualisation includes:

* **Everyday consumers** planning to buy a TV
* **Students and educators** interested in energy efficiency
* **Environmentally conscious users** who want to reduce electricity usage

Audience characteristics:

* Limited technical background in data science
* Interested in practical and actionable insights
* Prefer simple visuals with clear explanations

### Audience needs and priorities

* Easy comparison between TV sizes and energy consumption
* Understanding how advertised screen size relates to actual power usage
* Identifying energy-efficient options

### Visualisation guidelines (based on audience)

* Use simple chart types (bar charts, scatter plots)
* Avoid technical jargon
* Add annotations to highlight key insights
* Use consistent units and labels
* Present one main idea per visualisation

---

## What Does the Audience Want to Know?

The most important questions for the audience are:

* Do larger TVs always consume more energy?
* How does screen size (in inches) relate to annual energy consumption?
* Are some brands more energy-efficient than others?
* How reliable are the advertised screen sizes and energy labels?

These questions guide both the data processing and the storytelling structure of the website.

---

## Data Story & Visualisation Approach

### How the information is presented

The data story is presented as a step-by-step journey on the website:

1. **Introduction** – Why TV energy consumption matters
2. **Screen Size vs Energy Use** – Showing how energy consumption increases with size
3. **Brand Comparison** – Highlighting variation between manufacturers
4. **Energy Rating Categories** – Comparing efficiency groups
5. **Key Takeaways** – Practical advice for consumers

Visualisations are generated using:

* **KNIME** for data cleaning and exploratory charts
* **Excel** for customised and polished visualisations used on the website

Each chart is accompanied by short explanatory text to help users interpret the data correctly.

---

## Storyboard (User Experience)

The website follows a linear storytelling structure:

1. **Landing section**

   * Short explanation of the dataset and purpose

2. **Context section**

   * Why TV energy consumption is important

3. **Visualisation section**

   * Screen size vs energy consumption chart
   * Brand comparison chart

4. **Insight section**

   * Annotated findings and notable patterns

5. **Conclusion section**

   * Summary and consumer recommendations

This structure ensures the user is guided logically from context to insight.

---

## About the Data

### Data source

* Australian Government TV energy consumption dataset
* Publicly available CSV file

### Data processing

Data processing was conducted in **KNIME**, including:

* Removing duplicate records
* Handling missing values
* Standardising brand names
* Converting screen size from centimetres to inches
* Creating screen size categories based on advertised sizes

### Privacy

* The dataset contains **no personal or identifiable information**
* All data is product-level and publicly released

### Accuracy and limitations

* Energy consumption values are manufacturer-reported
* Real-world energy usage may vary depending on usage patterns
* Not all TV models available on the market are included

### Ethics

* The visualisations aim to inform, not mislead
* Data is presented in context with clear explanations
* Limitations are acknowledged to avoid incorrect conclusions

---

## AI Declaration

AI tools were used in this project to:

* Assist with drafting explanatory text
* Improve clarity and structure of written content

All data processing, visualisation design decisions, and final interpretations were reviewed and understood by the student. AI was used as a support tool and not as a replacement for original work.

---

## Repository Structure

```
/knime-workflow
/visualisations
/website
README.md
```

---

## Conclusion

This project demonstrates how data visualisation and storytelling can help users make informed decisions about energy consumption. By focusing on the audience and their needs, the visualisations communicate complex data in a clear and accessible way.
