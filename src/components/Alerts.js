import React from 'react'

function Alerts(props) {
  return (
    props.showalert &&<div className="alert alert-success" role="alert">
      {props.showalert}
    
</div>
  )
}

export default Alerts

