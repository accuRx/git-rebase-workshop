const onStart = () => {
    console.log("javascipt is loading");
}


onStart();


function sprinkle() {
    console.log("sprinkle");
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
}

const clickMeButton = document.getElementById("surprise");
if (clickMeButton) {
    clickMeButton.addEventListener("click", handleClick);
}

function handleClick() {
    console.log("handle click");
    sprinkle();
}
