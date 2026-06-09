
// --- estrellas.js ---
const numStars = 150;
const stars = [];
for(let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random(), 
        y: Math.random() * 0.65, 
        r: Math.random() > 0.85 ? Math.random() * 1.5 + 1.0 : Math.random() * 0.8 + 0.5, 
        speed: Math.random() * 0.05 + 0.02, 
        offset: Math.random() * Math.PI * 2, 
        color: Math.random() > 0.7 ? '210, 230, 255' : '255, 255, 255' 
    });
}

function actualizarEstrellas(ctxStars, starsCanvas, incidencia, frameCount) {
    if (!ctxStars || !starsCanvas) return;
    ctxStars.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
    if(incidencia >= 0.3) return; 
    const globalAlpha = Math.max(0, Math.min(1, (0.3 - incidencia) * 4));
    for(let i = 0; i < stars.length; i++) {
        let s = stars[i];
        let x = s.x * starsCanvas.width;
        let y = s.y * starsCanvas.height;
        let twinkle = (Math.sin(frameCount * s.speed + s.offset) + 1) / 2;
        let starAlpha = globalAlpha * (0.3 + twinkle * 0.7); 
        ctxStars.beginPath();
        if (s.r > 1.0) {
            ctxStars.shadowBlur = 15; // Difuminado fuerte
            ctxStars.shadowColor = `rgba(${s.color}, ${starAlpha})`;
        } else {
            ctxStars.shadowBlur = 0;
        }
        ctxStars.fillStyle = `rgba(${s.color}, ${starAlpha})`;
        ctxStars.arc(x, y, s.r, 0, Math.PI*2);
        ctxStars.fill();
    }
    ctxStars.shadowBlur = 0;
}