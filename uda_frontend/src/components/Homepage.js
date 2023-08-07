import React, {useState} from "react";
import Axios from "axios";

export default function HomePage(){
    const url = "http://127.0.0.1:8000/register/"
    const [data, setData] = useState({
        userId: "",
        loginorlogoff: ""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            userId: parseInt(data.userId),
            loginorlogoff: data.loginorlogoff
        })
        .then(res=>{
            console.log(res)
        })
    }
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <>
        <h1 align="center">ENTER USER DETAILS</h1>
        <h1 align="center">...</h1>
        <div>
            <form onSubmit={(e)=> submit(e)}>
            <div class="mb-3">
                <div className="conatiner" align="center">
            <b><label for="userId" class="form-label mb-3">User Id</label></b>
            </div>
                <div className="container">
                <input className="form-control" onChange={(e)=> handle(e)} id="userId" value={data.userId} placeholder="userId" type="number"></input>
                </div>
            </div>
            <div class="mb-3">
                <div className="container" align="center">
            <b><label for="loginorlogoff" class="form-label mb-3">Login Or Logoff</label></b>
            </div>
            </div>

            <div className="form-group">
                <div className="container">
                <select className="form-control" id="loginorlogoff" onChange={(e)=> handle(e)}>
                    <option value="login">Login</option>
                    <option>Logoff</option>
                </select>
                </div>
            </div>
            <div className="container" align="center">
            <button type="button" class="btn btn-info">SUBMIT</button>
            </div>
            </form>
        </div>
        </>
    )
}