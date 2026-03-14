// Parallax Background Movement
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const blobs = document.querySelectorAll('.background-blobs');
    if (blobs.length > 1) {
        blobs[0].style.transform = `translate(${x * 40}px, ${y * 40}px)`;
        blobs[1].style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
    }
});

// Interactive Button Logic
function triggerEffect() {
    const btn = document.querySelector('.liquid-btn');
    const originalText = btn.textContent;
    
    btn.textContent = "⚡ PROCESSING REQUEST...";
    btn.style.filter = "hue-rotate(90deg)";
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.filter = "none";
        alert("System operational. Welcome, Kennedy.");
    }, 2000);
}

// Search Filter Logic
const searchInput = document.querySelector('.glitch-search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(term) ? "block" : "none";
        });
    });
}