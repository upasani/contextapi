import { useEffect, useState } from "react";
import '../App.css';
export const Users = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/users').then((res) => res.json()).then((res) => {
            // console.log(res);
            setUser(res);
        });
    }, [])
    console.log("The data is ", user);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>Date_Of_Birth</th>
                        <th>Residence</th>
                        <th>Address</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>

                    {user.map((e) => (
                        <>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.DOB}</td>
                                <td>{e.residence}</td>
                                <td>{e.address}</td>
                                <td>{e.pincode}</td>
                            </tr>
                        </>

                    ))}

                </tbody>
            </table>
        </>
    )

}

