import React from "react";


const DashboardDisplay = (props) =>(
    <div 
    style={{    
                alignItems: "center",
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 5,
                textAlign: "center"
        }}
        >

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, fontSize: 20 }}>
                <div>
                    <div>{props.nome} </div>
                    
                </div>
                <div>

                    <div>{ props.pontos} </div>
                </div>
            </div>
    </div>
)

export default DashboardDisplay;