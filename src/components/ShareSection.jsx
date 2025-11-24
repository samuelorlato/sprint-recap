import styled from "styled-components";
import { Link } from 'react-router-dom';

const GradientWrapper = styled.button`
  background: linear-gradient(135deg, #9333ea, #ec4899);
  color: #fff;
  transition: all 0.3s ease; /* Suaviza o hover */

  &:hover{
    opacity: 0.9;
    transform: translateY(-2px); /* Pequeno efeito de elevação */
    color: #fff;
  } 
`;

export default function ShareSection(){
    return(
        /* ADICIONADO: px-3 (padding lateral no mobile) e px-md-5 (padding lateral maior no PC) */
        <div className="card border-0 rounded-4 text-center mb-5 py-4 px-3 px-md-5">
            
            <p className="mb-4 fw-medium">Compartilhe seus resultados</p>
            
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mb-3">

                {/* botao colorido */}
                <GradientWrapper 
                    className="d-flex align-items-center justify-content-center gap-2 border-0 rounded-3 px-4 py-2 fw-semibold"
                    // ADICIONADO: width: 100% no mobile para garantir que preencha
                    style={{minWidth: "230px", height: "48px", width: "100%", maxWidth: "300px"}}
                >
                    <i className="bi bi-share-fill"></i>
                    Compartilhar com Time
                </GradientWrapper>

                {/* botao branco */}
                <button
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 px-4 py-2 text-dark fw-semibold"
                    // ADICIONADO: width: 100% no mobile
                    style={{minWidth: "230px", height: "48px", width: "100%", maxWidth: "300px"}}
                >
                    <i className="bi bi-download"></i>
                    Baixar Relatório
                </button>
            </div>

           {/* barra horizontal */}
            <hr className="text-muted opacity-25 mb-4 mx-auto" style={{width: "80%"}}/>

            {/* voltar ao inicio - AGORA COM WRAPPER CENTRALIZADOR */}
            <div className="d-flex justify-content-center">
                <Link 
                    to="/" 
                    className="text-decoration-none small fw-bold d-flex align-items-center"
                    style={{color:"#d81cdfff"}}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Voltar ao Início
                </Link>
            </div>
        </div>
        
    )
}