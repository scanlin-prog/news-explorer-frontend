export function showInputError(valueInput, errorInput, nameForm) {
    valueInput.current.classList.add(`${nameForm}__input_type_error`);
    errorInput.current.classList.add(`${nameForm}__input-error_active`);
    errorInput.current.textContent = valueInput.current.validationMessage;
}

export function hideInputError(valueInput, errorInput, nameForm) {
    valueInput.current.classList.remove(`${nameForm}__input_type_error`);
    errorInput.current.classList.remove(`${nameForm}__input-error_active`);
    errorInput.current.textContent = '';
}

export function checkInputValidity(valueInput, errorInput, buttonElement, error, nameForm) {
    if (!valueInput.current.validity.valid) {
        showInputError(valueInput, errorInput, nameForm)
        toggleButtonState(buttonElement, error, nameForm)
    } else {
        hideInputError(valueInput, errorInput, nameForm)
        toggleButtonState(buttonElement, error, nameForm)
    }
}

export function toggleButtonState(buttonElement, error, nameForm) {
    if (!error) {
        buttonElement.current.classList.add(`${nameForm}__button-create_inactive`);
        buttonElement.current.setAttribute('disabled', true);
    } else {
        buttonElement.current.classList.remove(`${nameForm}__button-create_inactive`);
        buttonElement.current.removeAttribute('disabled');
    }
}