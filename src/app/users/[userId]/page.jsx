import React from 'react';

const UserDetailsPage = async({params}) => {
    const{userId}= await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user= await res.json();
    return (
        <div>
            <h2>User Details Page</h2>
            <p>User Id: {user.id}</p>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
            <p>User Phone: {user.phone}</p>
            <p>User Website: {user.website}</p>
            <p>User Company: {user.company.name}</p>
        
        </div>
    );
};

export default UserDetailsPage;