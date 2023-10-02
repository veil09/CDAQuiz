function animateElement(element, property, value, duration) {
  const targetElement = document.querySelector(element);
  const animationInterval = setInterval(() => {
    targetElement.style[property] = value;
  }, duration);

  setTimeout(() => {
    clearInterval(animationInterval);
  }, duration);
}

animateElement(".female", "opacity", "1", 100);
animateElement(".headline_1", "left", "0", 1000);
animateElement(".female", "display", "none", 3000);
animateElement(".headline_1", "display", "none", 5000);
animateElement(".headline_2", "right", "0", 4000);
animateElement(".subHeadline", "opacity", "1", 5000);
animateElement(".learnmore", "opacity", "1", 5500);
animateElement(".logo", "left", "15rem", 6000);
animateElement(".replay", "opacity", "1", 6500);
