"use client"

import { useState, type ChangeEvent } from "react"

export default function FormPerson(){
    const [person, setPerson] = useState({
        personId: "1001",
        firstName: "zhang",
        lastName: "shan",
        email: "zhangshan@email.com",
        mobile: "13612345678",
        gender: "男",
        birth: "1997-08-01"
    });


    function handleMobileChange(e: ChangeEvent<HTMLInputElement>){
        setPerson({
            ...person,
            mobile: e.target.value
        });
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>){
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>ID:{person.personId}</td>
                </tr>
                <tr>
                    <td>First Name:{person.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name:{person.lastName}</td>
                </tr>
                <tr>
                    <td>Mobile:
                    <input value={person.mobile} onChange={handleMobileChange} /></td>
                </tr>
                <tr>
                    <td>Email:
                    <input value={person.email} onChange={handleEmailChange} /></td>
                </tr>
                <tr>
                    <td>Gender:{person.gender}</td>
                </tr>
                <tr><td>Birth:{person.birth}</td></tr>
                </tbody>
            </table>
            <p>
                {person.personId} 
                {person.firstName} 
                {person.lastName} 
                {person.mobile} 
                {person.email} 
                {person.gender} 
                {person.birth} 
            </p>
        </div>
    );
}
