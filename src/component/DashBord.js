import {connect} from 'react-redux'
import React, { Component } from 'react'
import DashBord_policies from './DashBord_policies'
import DashBord_claims from './DashBord_claims'
import NoPolicies from './NoPolicies'
import NoClaims from './NoClaims'

class DashBord extends Component {

    state={
      name:'',
    }
    
    // delate  policies from state-------->
     deletePolicies = (e) => {
        let ID = e.target.id
     this.props.dispatch({
          type : 'DELETE_POLICY',
          payload:{
              name :ID ,
          }
        })
    }

    // dalete  claims from state---------->
     deleteClaims = (e) => {
        let ID = e.target.id
     this.props.dispatch({
          type : 'DELETE_CLAIM',
          payload:{
              name :ID ,
          }
        })
    }


    render() {
        return (   
            // box policies 
        <div className="row my_row DashBord">
        <div className=" col-xl-6  box_policies">
        <h1 className="title_claims">policies</h1>
        {(this.props.policies.length === 0)?(<NoPolicies />):(<DashBord_policies deleteClaims={this.deleteClaims} deletePolicies={this.deletePolicies} Fprops={this.props} />)}
           </div>

          {/* box claims */}
           <div className="col-xl-6 box_claims">
           <h1 className="title_claims">Claims</h1>
           {(this.props.claims.length === 0)?(<NoClaims />):(<DashBord_claims deleteClaims={this.deleteClaims} deletePolicies={this.deletePolicies} Fprops={this.props} />)}
       </div>
    </div>
        )
    }
}


const  mapstatetoprops = (state) => {
    return{
        money : state.bagOfMoney,
        policies : state.ListOPolicies,
        claims : state.ListOfClaimHistory,
    }
}


export default connect (mapstatetoprops)(DashBord)