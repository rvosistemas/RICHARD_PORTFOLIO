interface LinkElement {
    classList: any;
    className: string;
}

const responsiveClass = "responsive";
const selectedClass = "selected";

function select(link: LinkElement) {
    const options = document.querySelectorAll("a");

    options.forEach((option) => {
        option.classList.remove(selectedClass);
    });

    link.classList.add(selectedClass);

    const x = document.getElementById("nav");
    x?.classList.remove(responsiveClass); // We add an optional verification to avoid errors if "x" is null
}

function responsiveMenu() {
    const x = document.getElementById("nav");
    // We use the ternary operator to alternate the "Responsive" class
    x?.classList.toggle(responsiveClass);
}

export { select, responsiveMenu }