export const checkValidData = (email, password, name) => {
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
        );
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNamevalid =/^^[A-Za-z]+([\s][A-Za-z]+)*$/.test(name);

    
    if (!isEmailvalid) return "Email is not valid";
    // if(!isNamevalid) return "Name is not valid";
    if (!isPasswordvalid) return "Password is not valid";
    
    
    return null;

};

