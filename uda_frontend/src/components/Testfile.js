import React, {useState} from "react";


export default function Testfile(){
    return(
        <body>
    <div className="container my-3">
        <form action="http://127.0.0.1:8000/register/" method="post">
            <div className="mb-3">
                <label for="userId" className="form-label">USER ID</label>
                <input type="userId" className="form-control" name="userId" id="userId" aria-describedby="userId"/>
            </div>

            <select className="form-control" aria-label="LoginOrLogoff" name="loginorlogoff" id="loginorlogoff" aria-describedby="loginorlogoff">
                <option selected>Open this select menu</option>
                <option value="login">Login</option>
                <option value="logoff">Logoff</option>
            </select>

            <div className="container" align="center">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>
</body>
    )
}