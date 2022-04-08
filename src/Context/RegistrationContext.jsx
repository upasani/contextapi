import { createContext, useReducer } from "react";

//Before going on we need to create a context;


const intialState = {
    name: "",
    age: "",
    DOB: "",
    residence: "",
    address: "",
    pincode: ""
}
const reducer = (state, action) => {
    switch (action.type) {
        case "change_name":
            return { ...state, name: action.payload };
        case "change_age":
            return { ...state, age: action.payload };
        case "change_DOB":
            return { ...state, DOB: action.payload };
        case "change_residence":
            return { ...state, residence: action.payload };
        case "change_address":
            return { ...state, address: action.payload };
        case "change_pin":
            return { ...state, pincode: action.payload };
        default:
            throw new Error();
    }

}


//We are gone be created the context 
export const RegistrationContext = createContext();

//after creating it simply provided it
export function RegistartionContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, intialState);
    const { name, age, DOB, residence, address, pincode } = state;
    const submitData = () => {
        // console.log("data is submitted");
        fetch('http://localhost:8080/users', {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": 'application/json'
            }

        }).then((res) => {
            alert("request send succesfully")

            console.log(res)
        });
    }

    return (
        <RegistrationContext.Provider value={{ name, age, DOB, residence, address, pincode, dispatch, submitData }}>{children}</RegistrationContext.Provider>
    )

}