const validateRegisterForm = (formData , dispatchFormData) => {
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

    if (!formData.confirmPassword) {
        dispatchFormData({
            type: "SET_ERROR",
            field: "confirmPassword",
            payload: "Please confirm password",
        });
        isValid = false;
    }else if(formData.password !== formData.confirmPassword) {
  dispatchFormData({
            type: "SET_ERROR",
            field: "confirmPassword",
            payload: "Password is not match",
        });
} else {
        dispatchFormData({ type: "SET_ERROR", field: "job", payload: "" });
    }

    return isValid;
}
export default validateRegisterForm