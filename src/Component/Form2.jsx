import { RegistrationContext } from "../Context/RegistrationContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export const Form2=()=>{
    const {name, age, DOB,residence,address,pincode,dispatch,submitData}=useContext(RegistrationContext);
    if(!name|| !age || !DOB){
        return <Navigate to='/registration/one'/>
    }


    return(
    <>
    <div>
        <h2>Enter your details...</h2>
        <label htmlFor="">Residence</label><br />
        <input type="text" placeholder="Enter your residence state" value={residence}
        onChange={(e)=>dispatch({type:"change_residence",payload:e.target.value})} /><br/>
          <label htmlFor="">Address</label><br />
        <textarea name="" id="" cols="18" rows="15" value={address} placeholder="Enter your address"
        onChange={(e)=>dispatch({type:"change_address",payload:e.target.value})}>
        </textarea><br />
        <label htmlFor="">Pin Code</label><br />
        <input type="Number" placeholder="Enter your pincode" value={pincode} 
        onChange={(e)=>dispatch({type:"change_pin",payload:e.target.value})}/><br />
        <button 
        disabled={!residence || !address || !pincode}
        onClick={submitData}
        >Submit</button>
    </div>
    </>
    )
}