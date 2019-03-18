import React, { Component } from 'react';
 
 const AddPlayerForm = () => {
return(
    <form>
        <input 
        type = "text"
        placeholder = "Enter a Players name"

        />
        <input type="submit" value="Add Player"/>
        </form>
)



}
export default AddPlayerForm;