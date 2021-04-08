

var svg = d3.select('.progress')
.append('svg')
.attr('height', 100)
.attr('width', 500);

var states = ['started', 'inProgress', 'completed'],
  segmentWidth = 100,
currentState = 'started';

var colorScale = d3.scale.ordinal()
.domain(states)
.range(['yellow', 'green', 'blue']);

svg.append('rect')
.attr('class', 'bg-rect')
.attr('rx', 10)
.attr('ry', 10)
.attr('fill', 'gray')
.attr('height', 15)
.attr('width', function(){
  return segmentWidth * states.length;
})
.attr('x', 0);

var progress = svg.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', function(){
        return colorScale(currentState);
      })
      .attr('height', 15)
      .attr('width', 0)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('x', 0);

progress.transition()
.duration(1000)
.attr('width', function(){
  var index = states.indexOf(currentState);
  return (index + 1) * segmentWidth;
});

function moveProgressBar(state){
progress.transition()
  .duration(1000)
  .attr('fill', function(){
    return colorScale(state);
  })
  .attr('width', function(){
    var index = states.indexOf(state);
    return (index + 1) * segmentWidth;
  });
}
//end progress bar

window.addEventListener("load", function() {
let curStatus = []
let statuses = []

let inputs = document.querySelectorAll(".current_status");
console.log(inputs)

for(var i = 0; i < inputs.length; i++){
  curStatus.push(inputs[i].id).value;
}

for(var i = 0; i < curStatus.length; i++){
 if (curStatus[i] === "1") {
   statuses.push("Planning")
 }
 else if (curStatus[i] === "2"){
  statuses.push("To Do")
}
else if (curStatus[i] === "3"){
  statuses.push("In Progress")
}
else if (curStatus[i] === "4"){
  statuses.push("Done")
}

}

console.log(statuses)

for(var i = 0; i < (statuses.length); i++){
  inputs[i].innerHTML = statuses[i]
}

console.log("hello",curStatus)

});