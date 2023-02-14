import Link from 'next/link'
import React from 'react'

export default function dashboard() {
    return (
        <>
            <section id='dashboard'>

                <div className="row">
               
                    <div className="navbar_dashboard">
                    <nav>
                            <ul>
                                <li><Link href={"/Dashboard"} >Dashboard</Link></li>
                                <li><Link href={"/Dashboard"} >Html</Link></li>
                                <li><Link href={"/Dashboard"} >Css</Link></li>
                                <li><Link href={"/Dashboard"} >Dashboard</Link></li>
                                <li><Link href={"/Dashboard"} >Dashboard</Link></li>

                            </ul>
                        </nav>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
            <div className="ID">#1</div>
                    <div className="content">
                    <div className="video mx-auto">
                          <iframe width="100%" height="400" src="https://www.youtube.com/embed/tzWggCnYVWU"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                      </div>
<div className="desc">
<h1>Tavsilot</h1>
<p>Darsda ishlatilgan codelar linki <a href="https://github.com/Sardordev1/">Shu yerda</a></p>

</div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}
