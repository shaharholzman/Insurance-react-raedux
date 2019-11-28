import React from 'react'
import {connect} from 'react-redux'


 class CreateClaim extends React.Component {

    state = {
        name : '',
        amount : 0
    }

onChange = (e) => {
this.setState({
[e.target.id] : e.target.value
})
}

 onSumbit = (e) => {
     e.preventDefault()
    this.props.dispatch({
        type : 'CREATE_CLAIM',
        payload : {
            amount :this.state.amount ,
            name :this.state.name ,
        }
    })

}
render(){
    return (
        <div className="component_page">
            <h1>If you want to file a claim for injury, all you have to do is fill in your full name and the amount of the claim</h1>
            <h3>Create new claim</h3>
           <form onSubmit = {this.onSumbit}>
               <input onChange={this.onChange} id="name" type="text" placeholder="full name plz" />
               <input  onChange={this.onChange} id="amount" type="number" placeholder="amount" />
               <input type="submit" value="add"/>
               </form> 
        </div>
    )
}
}



const setProps = (state) => ({
claims : state.ListOfClaimHistory
})


export default connect (setProps)(CreateClaim)