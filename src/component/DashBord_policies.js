import React from 'react'

export default function DashBord_policies(props) {
    return (
        <div>
                   <h3 className="h3_costomers">number of active policies : {props.Fprops.policies.length}</h3>
       <h3 className="h3_costomers">new costomer : {props.Fprops.policies[props.Fprops.policies.length-1].name} field policie in amount of {props.Fprops.policies[props.Fprops.policies.length-1].amount} ₪</h3>
       <h3 className="box_title">all costomers :  </h3>
               <div className="Sbox_rows">
       {props.Fprops.policies.map(obj => (
           <p className="name_row" key = {Math.random()}>{obj.name} field policie in amount of {obj.amount} ₪ <button className="btn_x" id={obj.name}  onClick={props.deletePolicies}>x</button></p>
       ))}
               </div>

        </div>
    )
}
