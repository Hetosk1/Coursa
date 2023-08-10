let mouseX = 0;
let mouseY = 0;
let isMoving = false;
let trailingX = 0;
let trailingY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX + window.pageXOffset;
  mouseY = e.clientY + window.pageYOffset;

  if (!isMoving) {
    isMoving = true;
    requestAnimationFrame(updateCirclePosition);
  }
});



function updateCirclePosition() {
  const cursorFollower = document.querySelector('.cursor-follower');
  cursorFollower.style.left = mouseX - 10 + 'px'; // Offset to center the circle
  cursorFollower.style.top = mouseY - 10 + 'px'; // Offset to center the circle
  isMoving = false;

}

function updateTrailingCirclePosition() {
  const trailingCircle = document.querySelector('.trailing-circle');
  trailingCircle.style.left = trailingX + 'px';
  trailingCircle.style.top = trailingY + 'px';
}
