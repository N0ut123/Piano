
const keysCheck = document.querySelector(".keys-check input");

const showHideKeys = () => {
    pianoKeys.forEach(key => key.
        classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHideKeys)