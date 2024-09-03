let transitioning = false;
let transition;

document.addEventListener("load", () => {
    transition = document.getElementById("transition");
    transition.classList.add("hidden");
});

export function StartTransition(side, navMethod)
{
    if (transitioning) return;

    document.getElementById("transition").classList.remove("hidden");
    document.getElementById("transition").classList.add(side);

    transitioning = true;
    setTimeout(() => {
        navMethod();
        setTimeout(() => {
            document.getElementById("transition").classList.remove("left");
            document.getElementById("transition").classList.remove("right");
            document.getElementById("transition").classList.add("hidden");
            transitioning = false;
        }, 750);
    }, 750);
}