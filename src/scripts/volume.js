const volumeSlider = document.querySelector(".volume-slider input");

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);