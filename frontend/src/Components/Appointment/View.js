import React from 'react';


export const View = ({customer: {name, lastName, phoneNumber}}) => {
    return (
        <>
        <h1>Customer name</h1>
        <h1>{name}</h1>
        <h1>{lastName}</h1>
        <h1>{phoneNumber}</h1>
        </>
    );
}