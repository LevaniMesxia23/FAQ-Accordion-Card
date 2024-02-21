const questions = document.querySelectorAll(".sentence-box")

questions.forEach(elem =>
    elem.addEventListener("click", () => {
        elem.classList.toggle("open")

        questions.forEach(otherElem => {
            if (otherElem !== elem) {
                otherElem.classList.remove("open")
                setTimeout(() => {
                    otherElem.classList.add("close");
                }, 2000);
            }
        });
    })
);

