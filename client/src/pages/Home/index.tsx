import React from "react";
import ReactDOM from "react-dom";
import {Helmet} from "react-helmet";

function Home():React.ReactElement{
    return(
        <>  
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home Page" />
            </Helmet>

            <p>Home Page</p>
        </>
    )
}




export default Home;