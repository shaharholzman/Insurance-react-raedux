import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


 function NavBar(props) {
    return (
        <div className="navbar">
        <h3 className="col-xl-4  navbar_title">Company equity : {props.money} ₪</h3>
       <NavLink className="col-xl-2 " to="/Home"><button className="btn btn-outline-primary navlink" >DashBord</button></NavLink>    
        <NavLink className="col-xl-2" to="/Claim"><button className="btn btn-outline-primary navlink">Claims </button></NavLink>    
        <NavLink className="col-xl-2" to="/Policies"><button className="btn btn-outline-primary navlink">Policies</button></NavLink>    
        </div>
    )
}


const  mapstatetoprops = (state) => {
    return{
        money : state.bagOfMoney,
        policies : state.ListOPolicies,
        claims : state.ListOfClaimHistory,
    }
  }
  
  
  export default connect (mapstatetoprops)(NavBar)
  