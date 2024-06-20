export const checkValidate = ({email, password}) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if (!isEmailValid) return "Email is Not Valid";
    if (!isPasswordValid) return "Password is not valid";
    return null;
};

