import React from "react";
import '../../styles/actionButton.css'

const ActionButton = (props)=>{
    return(
        <a className="nav_button" id="get_started">
            {props.children}
            <span id="call_to_action_border" ></span>
        </a>
    )
}

export default ActionButton