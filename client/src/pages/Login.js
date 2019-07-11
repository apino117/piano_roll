import React from "react";

function Login() {
    return (
        <>

            <div class="container">

                <div class="col-sm-6 col-sm-offset-3">

                    <h1><span class="fa fa-sign-in"></span> Login</h1>

                    {/* <!-- show any messages that come back with authentication --> */}
                    {/* <% if (message.length > 0) { %> */}
                    <div class="alert alert-danger"></div>


                    {/* <!-- LOGIN FORM --> */}
                    <form action="/login" method="post">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" name="email" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" />
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg">Login</button>
                    </form>

                    <hr />

                    <p>Need an account? <a href="/signup">Signup</a></p>
                    <p>Or go <a href="/">home</a>.</p>

                </div>

            </div>



        </>
    )
}

export default Login;