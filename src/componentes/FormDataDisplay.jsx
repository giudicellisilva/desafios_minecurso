import React from "react";

const formDataDisplay = ({formData}) =>{

    return(
        <div>
            <h2>Submitted Data</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
        </div>
    )
}

export default formDataDisplay;