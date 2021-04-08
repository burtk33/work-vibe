const addStepHandler = async function (event) {
  event.preventDefault();
  let step_number = document.querySelectorAll(".projectstep").length + 1;
  console.log(step_number);
  let project_id = document
    .querySelector('input[name="project-id"]')
    .value.trim();
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

const addStatusHandler = async function (event) {
  event.preventDefault();
  console.log(event)
  let id = event.srcElement.attributes.value.nodeValue;
  let progress_id = event.srcElement.id;
  console.log(id);
  console.log(progress_id);
  const response = await fetch(`/api/steps/`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      // project_id: project_id,
      progress_id: progress_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log(response);
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".submitstep").addEventListener("click", addStepHandler);
// document.querySelector("#addref").addEventListener("click", addRefHandler);

// items.addEventListener('click', addStatusHandler)
let items = document.querySelectorAll(".statusdropdownitem");

items.forEach(function (elem) {
  elem.addEventListener("click", addStatusHandler);
});

document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  var elems = document.querySelector(".statustrig");
  var instances = M.Dropdown.init(elems);
});
