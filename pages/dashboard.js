import Link from 'next/link'
import React from 'react'

export default function dashboard() {
    return (
        <>
            <section>

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
                      <div className="content mx-auto">
                          <iframe width="100%" height="400" src="https://www.youtube.com/embed/tzWggCnYVWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                      </div>
                    </div>
                </div>
            </section>

        </>
    )
}
