// Parallax Background Movement
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const blobs = document.querySelectorAll('.background-blobs');
    blobs[0].style.transform = `translate(${x * 40}px, ${y * 40}px)`;
    blobs[1].style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
});

// Interactive Button Logic
function triggerEffect() {
    const btn = document.querySelector('.liquid-btn');
    const originalText = btn.textContent;
    
    btn.textContent = "⚡ SYNCING SYSTEM...";
    btn.style.filter = "hue-rotate(90deg)";
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.filter = "none";
        alert("Portfolio Sync Complete. Welcome, Kennedy.");
    }, 2000);
}

// Search Filter Logic (Simulated)
document.querySelector('.glitch-search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
        card.style.opacity = text.includes(term) ? "1" : "0";
    });
});