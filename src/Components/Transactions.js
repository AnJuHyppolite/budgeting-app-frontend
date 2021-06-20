import React from "react"
import { render } from "react-dom"

class Transactions extends React.Component {

    async componentDidMount () {
        const res = await axios.get("http://localhost:8888/transactions")
    
    }

    render () {
        return(
            <h1>Welcome to Transactions!</h1> 
        )
    }
}

    
 export default Transactions