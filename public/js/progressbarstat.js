// // const ProgressBar = import(Line)
// let container = document.querySelector(".progress");
// // Line(container, {
// //   strokeWidth: 2

// // });




// // const stepid = document.querySelector('input[name="project-id"]').value.trim();

// function stepNumber() {
//  new ProgressBar.Line(container, {
//   strokeWidth: 2
// });
// }

// // // function stepNumber() {
// // // //   const response = fetch(`/progress/:${stepid}`, {
// // // //     method: "GET",
// // // //     body: JSON.stringify({}),
// // // //     headers: { "Content-Type": "application/json" },
// // // //   });

// // // //   if (response.ok) {
// // // //     console.log(response);
// // //     var bar = new ProgressBar.Line(container, {
// // //       strokeWidth: 4,
// // //     //   easing: "easeInOut",
// // //     //   duration: 1400,
// // //     //   color: "#FFEA82",
// // //     //   trailColor: "#eee",
// // //     //   trailWidth: 1,
// // //       svgStyle: { width: "100%", height: "100%" },
// // //       text: {
// // //         style: {
// // //           // Text color.
// // //           // Default: same as stroke color (options.color)
// // //           color: "#black",
// // //           position: "absolute",
// // //           right: "0",
// // //           top: "30px",
// // //           padding: 0,
// // //           margin: 0,
// // //           transform: null,
// // //         },
// // //         autoStyleContainer: false,
// // //       },
// // //     //   from: { color: "#FFEA82" },
// // //     //   to: { color: "#ED6A5A" },
// // //     //   step: (state, bar) => {
// // //     //     bar.setText(Math.round(bar.value() * 100) + " %");
// // //     //   },
// // //     });

// // //     bar.set(progress)
// //   // }
// // // }

// window.onload = () => stepNumber();
// var ProgressBar = require('progressbar.js');

// // // Assuming we have an empty <div id="container"></div> in
// // // HTML
// // var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
// // bar.animate(1);

// var bar = new ProgressBar.Line(container, {
//   strokeWidth: 4,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: '#FFEA82',
//   trailColor: '#eee',
//   trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//       // Text color.
//       // Default: same as stroke color (options.color)
//       color: '#999',
//       position: 'absolute',
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   from: {color: '#FFEA82'},
//   to: {color: '#ED6A5A'},
//   step: (state, bar) => {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });

// bar.animate(1.0);  // Number from 0.0 to 1.0


document.addEventListener("DOMContentLoaded", function() {
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