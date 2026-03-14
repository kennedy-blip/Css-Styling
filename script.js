// Parallax Background Effect
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.background-blobs');
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;

    blobs[0].style.transform = `translate(${x}px, ${y}px)`;
    blobs[1].style.transform = `translate(${-x}px, ${-y}px)`;
});

// Button Interaction Feedback
function triggerEffect() {
    const btn = document.querySelector('.liquid-btn');
    btn.textContent = "Calculating...";
    
    setTimeout(() => {
        btn.textContent = "Run Computation";
        alert("Numerical Iteration Complete!");
    }, 1500);
}