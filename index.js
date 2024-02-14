
onload = () => {
    const c = setTimeout(() => {
        let divFlowers = document.querySelector("#divFlowers");
        divFlowers.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};