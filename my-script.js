const onStart = () => {
    console.log("javascipt is loading");
}

onStart();


const sprinkle = () => {
    console.log("sprinkle");
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
}

const clickMeButton = document.getElementById("surprise");
if (clickMeButton) {
    clickMeButton.addEventListener("click", handleClick);
}

function handleClick() {
    console.log("handle click");
    sprinkle();
}

/**
 * More button
 */
const clickMoreButton = document.getElementById("more");
let count = 0;
const handleMoreClick = () => {
    console.log("more button")
    clickMoreButton.classList.add(`more-${count}`);
    count += 1;
    sprinkle();
}

if (clickMoreButton) {
    clickMoreButton.addEventListener("click", handleMoreClick);
}
