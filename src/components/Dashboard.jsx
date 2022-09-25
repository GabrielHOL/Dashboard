import React from "react";
import api from "../services/service";
import DashboardDisplay from "./DashboardDisplay";

class Dashboard extends React.Component {

    state = {
        pontos: []
    }



  componentDidMount(){
    api
      .get("/ranking.json")
      .then(response =>{
        const resultados = []
        for(let i in response.data){
          console.log(response.data[i])
            resultados.unshift({
                id:i,
                pontos:response.data[i],
            })
        }
        this.setState({pontos:resultados})
        console.log(resultados)
      })
  }


  render(){
    return(
        <div 
          style={{ 
            width: "35%",
            height: "100%",
            background: "rgba(0, 168, 232, 0.79)",
            textAlign: "center",
            borderRadius: "5px 5px 0 0",
            borderStyle: "solid",
            margin: "10%"
          }}
        >

            <h2 style={{margin: 0, color: "white", paddindTop: "20px", fontSize: 44}}>
              Pontuações
            </h2>


            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0, fontFamily: "sans-serif", fontSize:24 }}>
                <div>Nome</div>
                <div>Pontos</div>
            </div>


            
            {this.state.pontos.map(ponto => (
                <DashboardDisplay 
                nome={ponto.id}
                pontos={ponto.pontos}
                />
            ))}
        </div>
    )
  }
}

export default Dashboard;