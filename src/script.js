"use strict";
import JSONData from "../data.json" assert { type: "JSON" };

const barChart = document.querySelector(".chart__bar-chart");

const currentDay = new Date().getDay();
let totalAmount = JSONData.reduce((acc, curr) => acc + curr.amount, 0);

const createHtml = (amount, height, className, day) => {
  const html = `
    <div class="chart__bar-chart__bar">
    <span class="chart__bar-chart__bar__value">$${amount}</span>
    <div  style="height: ${height}rem;" class="chart__bar-chart__bar__rect ${className}"></div>
        <p class="chart__bar-chart__bar__date">${day}</p>
        </div>
        `;

  return html;
};

for (const data of JSONData) {
  const dayIndex = JSONData.indexOf(data) + 1;

  // calculating height for bars based on the total amount
  const portionInPercentage = (data.amount / totalAmount) * 100;
  const heightValue = (portionInPercentage * 0.16).toFixed(2) * 2.5;

  // display bars and adding color class to current day
  if (dayIndex === currentDay) {
    barChart.insertAdjacentHTML(
      "beforeend",
      createHtml(data.amount, heightValue, "cyan", data.day)
    );
  } else {
    barChart.insertAdjacentHTML(
      "beforeend",
      createHtml(data.amount, heightValue, "", data.day)
    );
  }
}
