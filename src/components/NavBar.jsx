import React  from "react";
import '../styles/navBar.css'
import ActionButton from './subComponents/ActionButton'


const navBar = ()=>{
    return(
        <section className="nav_container">
            <div className="buttons_container">
                <a className="nav_button">About</a>
                <ActionButton children=""></ActionButton>
            </div>  
        </section>
    )
}



export default navBar