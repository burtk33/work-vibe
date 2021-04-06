// const stepid = document.querySelector('input[name="project-id"]').value.trim();
// let container = document.querySelector(".progress");

// function stepNumber() {
//   const response = fetch(`/progress/:${stepid}`, {
//     method: "GET",
//     body: JSON.stringify({}),
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     console.log(response);
//     var bar = new ProgressBar.Line(container, {
//       strokeWidth: 4,
//       easing: "easeInOut",
//       duration: 1400,
//       color: "#FFEA82",
//       trailColor: "#eee",
//       trailWidth: 1,
//       svgStyle: { width: "100%", height: "100%" },
//       text: {
//         style: {
//           // Text color.
//           // Default: same as stroke color (options.color)
//           color: "#999",
//           position: "absolute",
//           right: "0",
//           top: "30px",
//           padding: 0,
//           margin: 0,
//           transform: null,
//         },
//         autoStyleContainer: false,
//       },
//       from: { color: "#FFEA82" },
//       to: { color: "#ED6A5A" },
//       step: (state, bar) => {
//         bar.setText(Math.round(bar.value() * 100) + " %");
//       },
//     });

//     bar.animate(1.0);
//   }
// }

// stepNumber();

const addStepHandler = async function (event) {
  event.preventDefault();
  let step_number = (document.querySelectorAll('.projectstep').length)+1;
  console.log(step_number)
  let project_id = document.querySelector('input[name="project-id"]').value.trim();
  let title = document.querySelector("#title").value.trim();
  let description = document.querySelector("#description").value.trim();

  if (title) {
    const response = await fetch(`/api/steps/`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        project_id: project_id,
        step_number: step_number,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".submitstep").addEventListener("click", addStepHandler);
// document.querySelector("#addref").addEventListener("click", addRefHandler);
