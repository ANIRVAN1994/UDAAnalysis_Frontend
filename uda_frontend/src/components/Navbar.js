import React from "react"

const bg_col ={
    color : "black"
}
export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-lg bg-lg">
            <div><img src="Pwclogo.jpg" alt="" width="70" height="50"/></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <b>
                        <a className="nav-link" href="#" style={bg_col}> <span className="sr-only">(current)</span></a>
                        </b>
                    </li>
                    <li className="nav-item active">
                        <b>
                        <a className="nav-link" href="#" style={bg_col}>Home <span className="sr-only">(current)</span></a>
                        </b>
                    </li>
                    <li className="nav-item active">
                        <b>
                        <a className="nav-link" href="#" style={bg_col}>Contact Us<span className="sr-only">(current)</span></a>
                        </b>
                    </li>
                </ul>
                <button type="button" class="btn btn-success">Register Here</button>
            </div>
        </nav>
        </>
    )
}