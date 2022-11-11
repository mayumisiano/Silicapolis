import React from "react";
import "./styles.css";

function Card() {
  return (    
    <div className="card--content row container">
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={"https://avatars.githubusercontent.com/u/62121416?v=4"} alt="img Mayumi" />
        </div>
        <div className="card-title">
          <h4>Paula Mayumi</h4>
          <p>Desenvolvedora de Software</p>
        </div>
        <div className="card-info">
          <p>
          Sou desenvolvedora Java Full Stack pela Generation Brasil. Academicamente, sou tecnóloga em Microeletrônica e já atuei como analista de P&D para empresas de Engenharia e Tecnologia de acordo com as Leis da Informática. 
          Estudei as tecnologias: <span className="span">Java, Springboot, SQL, HTML, CSS, JavaScript, React e Typescript</span>. No meu tempo livre gosto de estudar e ler. Sou movida por desafios, café, código, e tenho paixões nada secretas por back-end, gatos e videogames. 
          </p>

          <p>
            Caso queira ver outros projetos web que desenvolvi, acesse meu portfólio:
          </p>
        </div>       
        <div className="card-social">    
           
          <a
            href="https://github.com/mayumisiano"                               
            target="_blank"
            rel="noreferrer"          
            >           
            
            <img href="https://github.com/mayumisiano" src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" width= "60px" height="60px"></img>                      
                      
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-moura-a0111411b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/mourarafaell/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>      
    </div> 
     
  );
}
export default Card;