// Functie om de verrassing te tonen
function showMessage() {
    const message = document.getElementById('message');
    const heart = document.getElementById('heart');
    const music = document.getElementById('backgroundMusic');

    // Toon het bericht
    message.classList.remove('hidden');

    // Speel achtergrondmuziek af
    music.play();

    // Verwijder de klikfunctie van het hartje
    heart.style.pointerEvents = 'none';
}

// Voeg een geluidseffect toe bij het laden van de pagina
window.onload = function () {
    const audio = new Audio('click-sound.mp3');
    audio.play();
};