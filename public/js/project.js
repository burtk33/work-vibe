

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

let items = document.querySelectorAll(".dropdown_item")

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var elems = document.querySelector('.statustrig');
    var instances = M.Dropdown.init(elems);
   console.log(instances)
    
})