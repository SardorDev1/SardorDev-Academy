import React, { useEffect } from 'react'

export default function contact() {
  useEffect(() => {
    
    if(window.location.pathname === "/contact"){
        window.replainSettings = { id: 'de664a75-05e4-4964-a2c3-b695af76a957' };
           (function (u) {
             var s = document.createElement('script'); s.async = true; s.src = u;
             var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
           })('https://widget.replain.cc/dist/client.js');
      
      }
  })
    return (
<>
<h1>Aloqa</h1>

<div className="container">
    <div className="row">
        <div className="col-lg-6">
            
        </div>
    </div>
</div>
</>
  )
}
