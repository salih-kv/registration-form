import {useState} from "react";

const useForm = () => {
    const [values, setValues] = useState({fullname: "", email: "", password: "", confirmPassword: ""});

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const reset = () => {
        setValues({fullname: "", email: "", password: "", confirmPassword: ""});
    };

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (values.fullname.length < 3) {
            newErrors.fullname = "Too short";
        }

        if (!values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            newErrors.email = "Not a valid email";
        }

        if (values.password.length < 8) {
            newErrors.password = "Too short";
        } else if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = "Passwords doesn't match";
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    };


    return {
        values,
        handleInput,
        reset,
        validate,
        errors
    };
};

export {
    useForm
};
