document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.getElementById("heartsContainer");
    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseContainer = document.getElementById("surpriseContainer");
    const message = document.getElementById("message");
    const heart = document.getElementById("heart");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const toggleMusicButton = document.getElementById("toggleMusicButton");
    const matchmakingButton = document.getElementById("matchmakingButton");
    const matchmakingContainer = document.getElementById("matchmakingContainer");
    const matchmakingForm = document.getElementById("matchmakingForm");
    const matchResult = document.getElementById("matchResult");

    // 🎵 Muziek aan/uit functie
    let isPlaying = false;

    function toggleMusic() {
        if (isPlaying) {
            backgroundMusic.pause();
            toggleMusicButton.textContent = "🎵 Speel Muziek";
        } else {
            backgroundMusic.play().catch(error => console.log("Autoplay geblokkeerd:", error));
            toggleMusicButton.textContent = "⏸ Stop Muziek";
        }
        isPlaying = !isPlaying;
    }

    toggleMusicButton.addEventListener("click", toggleMusic);

    backgroundMusic.addEventListener("ended", function () {
        if (isPlaying) {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
        }
    });

    // 🎈 Achtergrond hartjes genereren
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart-floating");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);
    }

    // 🎁 Surprise functie
    surpriseButton.addEventListener("click", function () {
        surpriseContainer.classList.remove("hidden");
        surpriseButton.style.display = "none";
    });

    // ❤️ Klik op het hartje
    heart.addEventListener("click", function () {
        message.classList.remove("hidden");
        message.style.opacity = "1";
    });

    // 🤝 Matchmaking functie
    matchmakingButton.addEventListener("click", function () {
        matchmakingContainer.classList.remove("hidden2");
        matchmakingButton.style.display = "none";
        surpriseButton.style.display = "none";
    });

    matchmakingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name1 = document.getElementById("name1").value;
        const name2 = document.getElementById("name2").value;
        const dob1 = document.getElementById("dob1").value;
        const dob2 = document.getElementById("dob2").value;

        // Gebruik localStorage om gegevens op te slaan en vergelijk de waarden
        const savedData = JSON.parse(localStorage.getItem("matchData"));

        if (savedData && savedData.name1 === name1 && savedData.name2 === name2 && savedData.dob1 === dob1 && savedData.dob2 === dob2) {
            // Toon de eerder opgeslagen score
            matchResult.textContent = `${savedData.score}%`;
        } else {
            // Bereken een score (hier simpel voor het voorbeeld)
            const score = Math.floor(Math.random() * 80)+20;
            matchResult.textContent = `${score}%`;

            // Sla de gegevens en score op in localStorage
            const matchData = { name1, name2, dob1, dob2, score };
            localStorage.setItem("matchData", JSON.stringify(matchData));
        }
        
    });
});
