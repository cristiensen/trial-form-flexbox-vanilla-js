function setInputErrorState(inputField, state) {

    const inputLabel = document.querySelector(`label[for="${inputField.id}"]`);
    const errorImg = document.getElementById(`${inputField.id}-error`);

    if (state) {
        inputField.classList.add("empty-input");
        inputLabel.classList.remove("hidden");
        errorImg.classList.remove("hidden");
    } else {
        inputField.classList.remove("empty-input");
        inputLabel.classList.add("hidden");
        errorImg.classList.add("hidden");
    }
}

function validateInputField(inputField) {
    const isEmail = inputField.type == "email" ? true : false;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const inputState = (inputField.value == "") || (isEmail && !emailPattern.test(inputField.value)) ? true : false;

    setInputErrorState(inputField, inputState);

    return !inputState;
}

const submitBtn = document.getElementById("submit-btn");
const inputFields = document.querySelectorAll(".input-field");

submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let correctFieldsCount = 0;

    for (let inputField of inputFields) {
        if (validateInputField(inputField)) {
            correctFieldsCount++;
        }
    }

    if (correctFieldsCount === 4) {
        alert("Submitted!");
    }
})

inputFields.forEach((inputField) => {
    inputField.addEventListener("focus", () => {
        setInputErrorState(inputField, false);
    })

    inputField.addEventListener("blur", () => {
        validateInputField(inputField);
    })
})