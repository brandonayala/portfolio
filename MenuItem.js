import React from "react" 
import InfoItem from "./InfoItem"

function MenuItem(props) {
    const completedStyle = {
        fontStyle: "italic",
    }
    return (
        <div className="itemContainer" style={{background: props.item.left <= 5 ? "#d3d3d3" : "null"}}>
            <h3>{props.item.name}</h3>
            <img src={props.item.image}></img>
            <InfoItem {...props}/>
            <button className="cursive">Add to Cart</button>
        </div>
    )
}

export default MenuItem