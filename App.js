import React from "react"
import MenuItem from "./MenuItem"
import InfoItem from "./InfoItem"
import itemsData from "./itemsData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            items: itemsData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    
    handleChange() {
        this.setState(prevState => {
            return {
                left: prevState.left - 1
            }
         })
    }
    
    render() {
        const itemComponents = this.state.items.map(item => <MenuItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div>
                {itemComponents}
            </div>
        )    
    }
}

export default App