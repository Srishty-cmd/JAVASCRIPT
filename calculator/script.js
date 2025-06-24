const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "AC") {
            input.value = "";
        }
        else if (value === "DE") {
            input.value = input.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "error";
            }
        }
        else {
            input.value += value;
        }
    });
});