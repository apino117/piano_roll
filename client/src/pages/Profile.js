import React from "react";

function Profile() {
    return (
        <>

            <div class="container">

                <div class="page-header text-center">
                    <h1><span class="fa fa-anchor"></span> Profile Page</h1>
                    <a href="/logout" class="btn btn-default btn-sm">Logout</a>
                </div>

                <div class="row">

                    {/* <!-- LOCAL INFORMATION --> */}
                    <div class="col-sm-6">
                        <div class="well">
                            <h3><span class="fa fa-user"></span> Local</h3>

                            <p>
                                <strong>id</strong><br />
                                <strong>email</strong><br />
                                <strong>password</strong>
                            </p>

                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default Profile;