import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { RegistrationContext } from "../Context/RegistrationContext"
export const Form1 = () => {
     const navigate=useNavigate();
    const { name, age, DOB, dispatch } = useContext(RegistrationContext);
    console.log(name,age,DOB);
    return (
     
        <>
            <div>
                <h2>Enter your details...</h2>
                <label htmlFor="">Name</label><br />
                <input type="text" value={name} placeholder="Enter your name"
                    onChange={(e) => dispatch({ type: "change_name", payload: e.target.value })} /><br />
                  <label htmlFor="">Age</label><br />
                <input type="Number" value={age} placeholder="Enter your age" 
                    onChange={(e)=>dispatch({type:"change_age",payload:e.target.value})} /><br/>
                  <label htmlFor="">DOB</label><br />
                <input type="date" value={DOB} placeholder="Select your birth" 
                    onChange={(e)=>dispatch({type:"change_DOB",payload:e.target.value})}/><br/><br/>
                    
                <button
                disabled={!name || !age || !DOB}
                 onClick={()=>navigate(`/registration/two`)}>NEXT</button>

            </div>




        </>

    )
}