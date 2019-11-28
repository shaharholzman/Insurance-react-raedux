import React from 'react'

export default function DashBord_claims(props) {
    return (
        <div>
                   <h3 className="num_claims">Number of active claims : {props.Fprops.claims.length}</h3>
       <h3 className="last_claims">Last claim : {props.Fprops.claims[props.Fprops.claims.length-1].name} filed suit in amount of {props.Fprops.claims[props.Fprops.claims.length-1].amount} ₪</h3>
       <h3 className="box_title">all claims :  </h3>
       <div className="Sbox_rows">
       {props.Fprops.claims.map(obj =>(
        <p className="name_row" >{obj.name} Filed suit In the amount of {obj.amount} ₪ <button className="btn_x" id={obj.name} onClick={props.deleteClaims}>x</button></p>   
       ))}
       </div>

        </div>
    )
}
