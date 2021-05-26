import React from "react"

function InfoItem(props) {
    return (
        <div className="info">                          
            <ul>
                <li>Price: ${props.item.price}</li>
                <li>Quantity: 
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </li>
                <li>Date of pickup: <br />
                    <input style={{width: "100px"}} type="date" />
                </li>
                <li><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></li>
            </ul>
        </div>
    )
}

export default InfoItem