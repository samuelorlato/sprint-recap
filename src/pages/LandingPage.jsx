import { Link } from "react-router-dom";
import styled from "styled-components"


const GradientWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #9333ea, #ec4899, #fb923c);
`;

const HeroIcon = styled.i`
  font-size: 5rem;
  display: block;
  margin: 0 auto 1rem auto;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 1rem;
  color: white;
`;

const GradientSection = styled.div`
  background: linear-gradient(to right, #4ade80, #22d3ee);
  color: white;
  padding: 4rem 0;
`;

const CTAButton = styled.button`
  background: linear-gradient(to right, #a855f7, #ec4899);
  border: none;
`;

const LightButton = styled.button`
  background: white;
  border: none;
  color: #9333ea;
  font-weight: 600;

  &:hover {
    background: #f0f0f0;
  }
`;

export default function LandingPage() {
  return (
    <GradientWrapper>
      {/* Hero Section */}
      <div className="container text-white py-5">
        <div className="text-center">
          <HeroIcon className="bi bi-rocket" />

          <h1 className="fw-bold mb-3">Sprint Recap</h1>

          <p
            className="lead opacity-75 mx-auto mb-5"
            style={{ maxWidth: "600px" }}
          >
            Já se perguntou como foi sua sprint de verdade? Agora você pode
            reviver todo o caos, conquistas e decisões questionáveis em um
            formato divertido e compartilhável.
          </p>

          <Link to="/wrapped">
            <LightButton className="btn btn-lg px-4 py-3 shadow">
              Veja uma simulação
            </LightButton>
          </Link>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-5">O Problema</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4 rounded bg-light">
                <i className="bi bi-graph-up text-danger fs-2 mb-3"></i>
                <h4 className="fw-bold">Retrospectivas chatas</h4>
                <p className="text-muted">
                  As revisões de sprint costumam ser secas e não capturam o
                  verdadeiro espírito do que aconteceu.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 rounded bg-light">
                <i className="bi bi-people text-warning fs-2 mb-3"></i>
                <h4 className="fw-bold">Momentos perdidos</h4>
                <p className="text-muted">
                  Os momentos engraçados, estatísticas impressionantes e
                  vitórias da equipe são esquecidos.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 rounded bg-light">
                <i className="bi bi-bullseye text-primary fs-2 mb-3"></i>
                <h4 className="fw-bold">Sem reconhecimento</h4>
                <p className="text-muted">
                  Contribuições individuais, conquistas peculiares e recordes
                  pessoais passam despercebidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <GradientSection>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">A Solução: Sprint Recap</h2>

          <p
            className="lead opacity-75 mx-auto mb-5"
            style={{ maxWidth: "600px" }}
          >
            Uma forma divertida e envolvente de recapitular sua sprint com
            conquistas personalizadas, estatísticas e destaques que celebram o
            trabalho da sua equipe.
          </p>

          <div className="row g-4 text-start">
            <div className="col-md-6">
              <GlassCard>
                <i className="bi bi-award fs-3 mb-2"></i>
                <h4 className="fw-bold">Conquistas divertidas</h4>
                <p>
                  Desbloqueie badges pelas suas atividades na sprint — desde
                  "Campeão do Café" até "Mestre do Merge".
                </p>
              </GlassCard>
            </div>

            <div className="col-md-6">
              <GlassCard>
                <i className="bi bi-code-slash fs-3 mb-2"></i>
                <h4 className="fw-bold">Estatísticas reais</h4>
                <p>
                  Veja seus commits, PRs, linhas de código e contagem de reviews
                  visualizados lindamente.
                </p>
              </GlassCard>
            </div>

            <div className="col-md-6">
              <GlassCard>
                <i className="bi bi-people fs-3 mb-2"></i>
                <h4 className="fw-bold">Momentos da equipe</h4>
                <p>
                  Celebre os altos, ria dos baixos e lembre dos momentos que
                  tornaram esta sprint única.
                </p>
              </GlassCard>
            </div>

            <div className="col-md-6">
              <GlassCard>
                <i className="bi bi-rocket-takeoff fs-3 mb-2"></i>
                <h4 className="fw-bold">Compartilhável</h4>
                <p>
                  Compartilhe seu Sprint Recap com sua equipe e celebrem juntos.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </GradientSection>

      {/* CTA Section */}
      <div className="bg-dark py-5 text-center">
        <h2 className="text-white mb-4 fw-bold">
          Pronto para reviver sua sprint?
        </h2>

        <Link to="/wrapped">
          <CTAButton className="btn btn-lg text-white px-4 py-3 shadow">
            Ver simulação
          </CTAButton>
        </Link>
      </div>
    </GradientWrapper>
  );
}
