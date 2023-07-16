const laptop = document.querySelector('.laptop');

document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  const laptopRect = laptop.getBoundingClientRect();

  // Calculate the cursor position relative to the laptop element
  const mouseX = event.clientX - laptopRect.left;
  const mouseY = event.clientY - laptopRect.top;

  // Calculate the rotation values based on the cursor position
  const rotateX = (mouseY / laptopRect.height - 0.5) * 20;
  const rotateY = (mouseX / laptopRect.width - 0.5) * 20;

  // Apply the transform style to the laptop element
  laptop.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
