const imageFemale = document.querySelector(".female");
const fadeInFemale = setInterval(() => {
  imageFemale.style.opacity = "1";
}, 100);

const headline_one = document.querySelector(".headline_1");
const headline_1 = setInterval(() => {
  headline_one.style.left = "0";
}, 1000);

const hideFirstEffect = setTimeout(() => {
  imageFemale.style.display = "none";
}, 3000);

const hideHealineOne = setTimeout(() => {
  headline_one.style.display = "none";
}, 5000);

const headline_two = document.querySelector(".headline_2");
const headline_2 = setInterval(() => {
  headline_two.style.right = "0";
}, 4000);

const subHeadline_one = document.querySelector(".subHeadline");
const subHeadline_1 = setInterval(() => {
  subHeadline_one.style.opacity = "1";
}, 5000);

const learnmore = document.querySelector(".learnmore");
const learnmore_1 = setInterval(() => {
  learnmore.style.opacity = 1;
}, 5500);

const logos = document.querySelector(".logo");
const logo = setInterval(() => {
  logos.style.left = "15rem";
}, 6000);

const replayImg = document.querySelector(".replay");
const replay = setInterval(() => {
  replayImg.style.opacity = "1";
}, 6500);
