// $('input[type="radio"]').click(function () {
//   let theNumber = $(this).attr("id").slice(-1);
//   $(this)
//     .siblings("label")
//     .each(function () {
//       var sibNumber = $(this).attr("for").slice(-1);
//       if (sibNumber <= theNumber) {
//         $(this).addClass("on");
//       } else {
//         $(this).removeClass("on");
//       }
//     });
// });

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let currentStep = steps.indexOf(e.target.closest(".step"));
    steps[currentStep].classList.remove("active");
    steps[currentStep + 1].classList.add("active");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let currentStep = steps.indexOf(e.target.closest(".step"));
    steps[currentStep].classList.remove("active");
    steps[currentStep - 1].classList.add("active");
  });
});

// submit button saves the data in local storage
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let data = [];
//   let inputs = Array.from(form.querySelectorAll("input"));
//   inputs.forEach((input) => {
//     data[input.name] = input.value;
//   });
//   localStorage.setItem("data", JSON.stringify(data));
//   window.location.href = "./result.html";
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  localStorage.setItem("data", JSON.stringify(inputs));
  // window.location.href = "./result.html";
  form.reset;
  let index = 0;
  const active = document.querySelector("form .step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  steps[0].classList.add("active");
});

// add a skip button
// const skipBtn = document.createElement("button");
// skipBtn.classList.add("skip-btn");
// skipBtn.innerHTML = "Skip";
// form.appendChild(skipBtn);
