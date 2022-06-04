import React , { memo } from "react";
import App from "./App";


function Container ()
{
    return (
        <div
            style={
                {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    overflow: "auto",
                }
            }
        >
            <App />
        </div>
    )
}


export default memo(Container);