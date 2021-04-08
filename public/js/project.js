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
  
  console.log(event);
  let id =event.path[3].children[0].id
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
    location.reload();
   
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".submitstep").addEventListener("click", addStepHandler);
// document.querySelector("#addref").addEventListener("click", addRefHandler);

// items.addEventListener('click', addStatusHandler)
const items = document.querySelectorAll(".statusdropdownitem");
// const items = document.querySelectorAll('.statusdropdownitem')
// items.forEach((btn) => { btn.addEventListener("click", (event) => { alert(event.target); }); });
items.forEach(function (elem) {
  
  elem.addEventListener("click", addStatusHandler);
});

// let dropdown = document.querySelectorAll(".statustrig");
// dropdown.forEach(function (elem) {
//   elem.addEventListener("click", function () {
//     var target = elem.target.id;
//     // M.AutoInit(target);
//     // var elems = document.querySelector(".statustrig");
//   var instances = M.Dropdown.init(target);
//   });
// });

//  let dropdown= document.querySelectorAll(".statustrig").classList.toggle("show");
// dropd

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// dropdown.addEventListener("cloc", function () {
//   M.AutoInit();
//   var elems = document.querySelector(".statustrig");
//   var instances = M.Dropdown.init(elems);
// });
