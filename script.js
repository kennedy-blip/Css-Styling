// Optimized Mouse Tracking (Disabled on touch devices for performance)
if (window.matchMedia("(min-width: 768px)").matches) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blobs = document.querySelectorAll('.background-blobs');
        if (blobs.length > 1) {
            blobs[0].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            blobs[1].style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
        }
    });
}

// Portfolio Diagnostic Feedback
function triggerEffect() {
    const btn = document.querySelector('.liquid-btn');
    if (!btn) return;

    const originalText = btn.textContent;
    btn.textContent = "⚡ SYSTEM SYNCING...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.opacity = "1";
        alert("Portfolio Health: Optimal. Nice work, Kennedy.");
    }, 1800);
}

// Live Search/Filter Logic
const search = document.querySelector('.glitch-search');
if (search) {
    search.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            const content = card.textContent.toLowerCase();
            card.style.display = content.includes(term) ? "block" : "none";
        });
    });
}