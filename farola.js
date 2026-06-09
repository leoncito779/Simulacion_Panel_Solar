
// --- farola.js ---
function actualizarFarola(descargando, focoPotencia) {
    const bulbGlow = document.getElementById('bulb-glow');
    const lampBeam = document.getElementById('lamp-beam');
    
    if (descargando) {
        let op = Math.max(0.1, Math.min(1, focoPotencia / 30.0));
        if(bulbGlow) bulbGlow.style.opacity = op;
        if(lampBeam) lampBeam.style.opacity = op * 0.95;
    } else {
        if(bulbGlow) bulbGlow.style.opacity = 0;
        if(lampBeam) lampBeam.style.opacity = 0;
    }
}