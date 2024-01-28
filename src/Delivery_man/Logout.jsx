import React from 'react'
import Swal from 'sweetalert2';
const Logout = () => {
    Swal.fire({
        title: "Logout successfully",
        // text: "That thing is still around?",
        icon: "success" ,
        timer: 1500
      }).then(()=>[
        window.location.href="/Delivery_man/Dashboard"
      ]);
  return (
    <div></div>
  )
}

export default Logout