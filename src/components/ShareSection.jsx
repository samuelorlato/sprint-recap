import styled from "styled-components";
import { Link } from 'react-router-dom';

const GradientWrapper = styled.button`
  background: linear-gradient(135deg, #9333ea, #ec4899);
  color: #fff;

  &:hover{
    opacity: 0.88;
    color: #fff} 
`;

export default function ShareSection(){
    return(
        <div className="card border-0 rounded-4 text-center mb-5 py-4">
            <p>Compartilhe seus resultados</p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mb-3">

                {/* botao colorido */}
                <GradientWrapper 
                    className="d-flex align-items-center justify-content-center gap-3 border-0 rounded-3 px-4 py-2"
                    // onClick={}
                    style={{minWidth: "230px", height: "45px"}}
                >
                    <i className="bi bi-share"></i>
                    Compartilhar com Time
                </GradientWrapper>

                {/* botao branco */}
                <button
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-3 px-4 py-2 text-dark"
                    style={{minWidth: "230px", height: "45px"}}
                >
                    <i className="bi bi-download"></i>
                    Baixar Relatório
                </button>
            </div>

            {/* barra horizontal */}
            <hr className="text-muted opacity-25 mb-4"/>

            {/* voltar ao inicio */}
            <Link 
                to="/" 
                className="text-decoration-none small fw-bold"
                style={{color:"#d81cdfff"}}
            >
                <i className="bi bi-arrow-left me-2"></i>
                Voltar ao Início
            </Link>
        </div>
        
    )
}