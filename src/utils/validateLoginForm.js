const validateLoginForm = (formData , dispatchFormData) => {
    let isValid = true;
    if (!formData.name) {
        dispatchFormData({
            type: "SET_ERROR",
            field: "name",
            payload: "Name is required",
        });
        isValid = false;
    } else {
        dispatchFormData({ type: "SET_ERROR", field: "name", payload: "" });
    }

    
    if (!formData.password) {
        dispatchFormData({
            type: "SET_ERROR",
            field: "password",
            payload: "Password is required",
        });
        isValid = false;
    } else if (formData.password.length < 5) {
        dispatchFormData({
            type: "SET_ERROR",
            field: "password",
            payload: "Password is short",
        });
        isValid = false;
    } else {
        dispatchFormData({ type: "SET_ERROR", field: "email", payload: "" });
    }
    return isValid;
}
export default validateLoginForm