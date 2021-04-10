

const curStatus = [];
const statuses = [];


console.log(curStatus);
const nuevo = curStatus.map((i) => Number(i));
console.log(nuevo);
document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll(".current_status");
  console.log(inputs);

  for (var i = 0; i < inputs.length; i++) {
    curStatus.push(inputs[i].id).value;
  }

  for (var i = 0; i < curStatus.length; i++) {
    if (curStatus[i] === "1") {

      statuses.push("Planning");
    } else if (curStatus[i] === "2") {
      statuses.push("To Do");
    } else if (curStatus[i] === "3") {
      statuses.push("In Progress");
    } else if (curStatus[i] === "4") {
      statuses.push("Done");
    }
  }

  console.log(statuses);

  for (var i = 0; i < statuses.length; i++) {
    inputs[i].innerHTML = statuses[i];
  }

  console.log("hello", curStatus);
  // });
  let arr = curStatus.map((elem) => parseInt(elem, 10));
  console.log(arr);
  const arrSum = arr.reduce((a, b) => a + b, 0);
  console.log(arrSum);
  let currentState = Math.round(arrSum / (curStatus.length*4)*100);
  console.log(currentState);

  var svg = d3
    .select("#rect")

    .text(currentState + "%")

    .append("svg")
    .attr("width", "100%")
    .attr("height", 80);

    
  segmentWidth = "100%";

  var colorScale = d3.scale
    .ordinal()

    .range("red");

  svg
    .append("rect")
    .attr("class", "bg-rect")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("fill", "gray")
    .attr("height", 20)
    .attr("width", function () {
      return "80%";
    })
    .attr("x", 0);

  console.log(currentState);
  var progress = svg
    .append("rect")
    .attr("class", "progress-rect")
    .attr("fill", function () {
      return colorScale(currentState);
    })
    .attr("height", 20)
    .attr("width", 0)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("x", 0);

  progress
    .transition()
    .duration(1000)
    .attr("width", function () {
      currentState*100;
    });
  

    progress
      .transition()
      .duration(1000)
      .attr("fill", function () {
        return "red";
      })
      .attr("width", function () {

        return currentState*4;
      });
  
});