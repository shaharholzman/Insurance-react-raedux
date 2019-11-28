import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Policies extends Component {
     state={
      name:'',
      amount:0
     }

     onChange = (e) => {
        this.setState({
        [e.target.id] : e.target.value
        })
        }
        
        onSumbit = (e) => {
            e.preventDefault()
           this.props.dispatch({
               type : 'CREATE_POLICY',
               payload : {
                   amount :this.state.amount ,
                   name :this.state.name ,
               }
           })
        }       
        
    render() {
        return (
            <div className="component_page">
            <h1>With us you can take out full and personal insurance,
             All you have to do is enter your full name and the amount of money you want to put on the policy</h1>
            <h3>Create new policies</h3>
           <form onSubmit = {this.onSumbit}>
               <input onChange={this.onChange} id="name" type="text" placeholder="full name plz" />
               <input  onChange={this.onChange} id="amount" type="number" placeholder="amount" />
               <input type="submit" value="add"/>
               </form> 

            </div>
        )
    }
}

const  mapstatetoprops = (state) => {
    return{
        // money : state.bagOfMoney,
        policies : state.ListOPolicies,
        // claims : state.ListOfClaimHistory,
    }
}


export default connect (mapstatetoprops)(Policies)