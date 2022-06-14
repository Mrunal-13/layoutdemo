const education = document.getElementById("edu");
education.addEventListener("click", function () {
  const eduDiv = document.getElementById("education");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  eduDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const experience = document.getElementById("exp");
experience.addEventListener("click", function () {
  const expDiv = document.getElementById("experience");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  expDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const honour = document.getElementById("hnr");
honour.addEventListener("click", function () {
  const hnrDiv = document.getElementById("hounor");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  hnrDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const membership = document.getElementById("mem");
membership.addEventListener("click", function () {
  const memDiv = document.getElementById("membership");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  memDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const achieve = document.getElementById("acc");
achieve.addEventListener("click", function () {
  const accDiv = document.getElementById("accomplishments");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  accDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const more = document.getElementById("more");
more.addEventListener("click", function () {
  const moreDiv = document.getElementById("about");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  const head = document.getElementById("about_head");
  moreDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
