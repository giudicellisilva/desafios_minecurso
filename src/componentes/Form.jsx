import React, {useState} from "react";

const Form = ({onSubimit}) =>{
    const [formData, setFormData] = useState({name: "", email: ""});

    const handleInputechage = ( event ) =>{
        const {name, value} = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}));    
    }

    const handleSubimit = (event) =>{
        event.preventDefault();
        onSubimit(formData);
    }

    return(
        <form onSubmit={handleSubimit}>
            <label htmlFor="">Name: </label>
            <input type="text" name="name" value={formData.name} onChange={handleInputechage} />
            <label htmlFor="">Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleInputechage} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;