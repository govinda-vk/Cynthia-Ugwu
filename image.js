const cursor = document.getElementById("cursor");
const images = document.querySelectorAll(".hover-image");

let followMouse = true;
let targetImage = null;


document.addEventListener("mousemove", (e) => {
  if (followMouse) {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out",
    });
  }
});


images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    followMouse = false;
    targetImage = img;
    cursor.style.transform = "translate(-50%, -50%) scale(3)";
    updateCursorToImageCenter();
  });

  img.addEventListener("mouseleave", () => {
    followMouse = true;
    targetImage = null;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

function updateCursorToImageCenter() {
  if (!targetImage) return;

  const rect = targetImage.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  gsap.to(cursor, {
    x: x,
    y: y,
    duration: 0.2,
    ease: "power2.out",
  });

}