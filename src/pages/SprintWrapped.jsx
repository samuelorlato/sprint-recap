import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Adicionado o hook de navegação
import "bootstrap/dist/css/bootstrap.min.css";
import "./SprintWrapped.css";
import InnerCard from "./InnerCard";

export default function SprintWrapped() {
  const navigate = useNavigate(); // Inicializa a navegação

  const pages = [
    {
      type: "intro",
      title: "Seu Sprint Wrapped",
      titleClass: "text-anim",
      subtitle: "Sprint #47 • 21 Out - 3 Nov, 2025",
      subtitleClass: "text-anim-2",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="White" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
      ),
      iconClass: "icon-anim"
    },

    {
      type: "stats",
      icon: "<>",
      iconClass: "rotate-text",
      number: 127,
      label: "Commits",
      description: "São 9 commits por dia!"
    },

    // ----------- PÁGINA AMARELA -----------
    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
      ),
      iconClass: "rotate-text",
      number: "12.453",
      label: "Linhas de Código",
      description: "8.234 adicionadas • 4.219 deletadas",
      cardColor: "yellow-card"
    },

    // ----------- PÁGINA ROSA/VERMELHA -----------
    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
      ),
      iconClass: "rotate-text",
      number: "Maior PR Já Feito",
      numberClass: "small-label",
      description: "5.000 linhas, 0 comentários e um reviewer chorando",
      descClass: "small-desc",
      cardColor: "legend-card"
    },

    {
      type: "stats",
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="4" r="2.5" />
          <circle cx="18" cy="14" r="2.5" />
          <line x1="6" y1="6.5" x2="6" y2="18" />
          <path d="M18 11.5V4" />
        </svg>
      ),
      iconClass: "rotate-text",
      number: "23",
      numberClass: "small-number",
      label: "Pull Requests",
      description: "19 mergeados • 4 ainda abertos",
      descClass: "small-desc",
      cardColor: "green-card"
    },

    {
      type: "stats",
      icon: (
        <svg
          width="68"
          height="68"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8l-4 4V5z" />
        </svg>
      ),
      iconClass: "rotate-text",
      number: "47",
      numberClass: "small-number",
      label: "PRs Revisados",
      description: "Mais do que você escreveu!",
      descClass: "small-desc",
      cardColor: "blue-card"
    },

    {
      type: "stats",
      icon: (
        <svg
          width="58"
          height="58"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="7" r="5" />
          <path d="M8 14l-2 7 6-3 6 3-2-7" />
        </svg>
      ),
      iconClass: "rotate-text",
      number: "Revisor Profissional",
      numberClass: "small-label",
      description: "Aprovou mais PRs que escreveu código. Campeão do controle de qualidade!",
      descClass: "small-desc",
      cardColor: "purple-card"
    },

    {
      type: "stats",
      icon: (
        <svg
          width="68"
          height="68"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="
            M12 2
            C13.3 4 15.5 6 15.5 8.7
            c0 1.5-.5 2.8-1.3 3.8
            1.4-.4 2.8-1.4 3.6-2.6
            C19.3 12 20 14 20 16
            c0 3.8-3 6.5-8 6.5S4 19.8 4 16
            c0-2.3.9-4.4 2.7-6.3
            .4 1 .9 1.7 1.7 2.2
            -1.1-1.4-1.6-3-1.6-4.6
            C6.8 4.7 8 3 10 2
            c-.3 1.9.1 3.3.9 4.6
        "/>
        </svg>
      ),
      iconClass: "rotate-text",
      number: "Otimista Desinformado",
      numberClass: "small-label",
      description: "Estimou 1 story point, mas levou uma semana.Nunca perca esse otimismo!",
      descClass: "small-desc",
      cardColor: "legend-card"
    },

    {
      type: "stats",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="62"
          height="62"
        >
          <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" opacity="0.9" />
          <circle cx="5" cy="17" r="2" opacity="0.7" />
          <circle cx="19" cy="14" r="1.6" opacity="0.8" />
          <circle cx="15" cy="19" r="1.2" opacity="0.6" />
        </svg>
      ),
      iconClass: "rotate-text",
      number: "Código Mágico",
      numberClass: "small-label",
      description: "Entregou algo que funciona e ninguém entendeu como.",
      descClass: "small-desc",
    },

    {
      type: "stats",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="7" y="9" width="13" height="13" rx="2" />
          <rect x="3" y="3" width="13" height="13" rx="2" />
        </svg>
      ),
      iconClass: "rotate-text",
      number: "Deus do Ctrl+C Ctrl+V",
      numberClass: "small-label",
      description: "Reaproveitou tanto código que virou um museu de referências.",
      descClass: "small-desc",
      cardColor: "blue-card"
    },

    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bug-icon lucide-bug"><path d="M12 20v-9"/><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"/><path d="M14.12 3.88 16 2"/><path d="M21 21a4 4 0 0 0-3.81-4"/><path d="M21 5a4 4 0 0 1-3.55 3.97"/><path d="M22 13h-4"/><path d="M3 21a4 4 0 0 1 3.81-4"/><path d="M3 5a4 4 0 0 0 3.55 3.97"/><path d="M6 13H2"/><path d="m8 2 1.88 1.88"/><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/></svg>
      ),
      iconClass: "rotate-text",
      number: "Bug Whisperer",
      numberClass: "small-label",
      description: "Corrigiu um bug sem saber como quando ou por quê.",
      descClass: "small-desc",
      cardColor: "orange-card"
    },

    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down-icon lucide-trending-down"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>
      ),
      iconClass: "rotate-text",
      number: "O profeta",
      numberClass: "small-label",
      description: "Disse 'vai dar ruim' e de fato deu.",
      descClass: "small-desc",
      cardColor: "black-card"
    },

    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
      ),
      iconClass: "rotate-text",
      number: "Dark Mode Developer",
      numberClass: "small-label",
      description: "Trabalhou tanto que só sai da caverna para reuniões.",
      descClass: "small-desc",
      cardColor: "preto-card"
    },

    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
      ),
      iconClass: "rotate-text",
      number: "1 ⮕ 40",
      numberClass: "small-number",
      label: "Realidade dos Story Points",
      description: "'É só um fix rápido', disseram",
      descClass: "small-desc",
      cardColor: "orange-card"
    },

    {
      type: "stats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
      ),
      iconClass: "rotate-text",
      number: "14",
      numberClass: "small-number",
      label: "Dias de Sequência",
      description: "Incluindo fins de semana!",
      descClass: "small-desc",
      cardColor: "orange-card-plus"
    },

    {
      type: "final",
      title: "Sprint Completa!",
      titleClass: "text-anim",
      subtitle: "Mais uma sprint nos livros",
      subtitleClass: "text-anim-2",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
      ),
      iconClass: "icon-anim"
    }
  ];

  const [index, setIndex] = useState(0);

  function nextPage() {
    // Se não for a última página, avança
    if (index < pages.length - 1) {
      setIndex(index + 1);
    } else {
      // Se for a última página, navega para /summary
      navigate("/summary");
    }
  }

  function prevPage() {
    if (index > 0) setIndex(index - 1);
  }

  const page = pages[index];

  return (
    <div className="wrapped-bg d-flex justify-content-center align-items-center">
      <div className="text-center">

        {/* BARRA DE PROGRESSO ESTILO WRAPPED */}
        <div className="wrapped-steps mb-4">
          {pages.map((p, i) => (
            <div
              key={i}
              className={`step-bar ${i === index ? "active-step" : ""}`}
            />
          ))}
        </div>


        {/* CARD EXTERNO */}
        <div className="mx-auto wrapped-card position-relative">
          <div className="card-body d-flex flex-column justify-content-center align-items-center h-100">

            {/* PRIMEIRA PÁGINA e FINAL (Intro/Final) */}
            {(page.type === "intro" || page.type === "final") && (
              <>
                <div className={`icon-wrap mb-4 ${page.iconClass || ""}`}>
                  {page.icon}
                </div>

                <h6 className={`text-white-50 mb-2 ${page.titleClass || ""}`}>
                  {page.title}
                </h6>

                <h5 className={`text-white fw-semibold ${page.subtitleClass || ""}`}>
                  {page.subtitle}
                </h5>
                {/* Se for final, exibe o subtitulo extra se existir na pagina final antiga */}
                {page.type === "final" && (
                    <>
                     {/* Adicione mais estrutura aqui se o layout final diferir muito do intro */}
                    </>
                )}
              </>
            )}

            {/* PÁGINAS 2+ : quadrado interno (Stats) */}
            {page.type === "stats" && (
              <InnerCard
                key={index}
                icon={page.icon}
                iconClass={page.iconClass}
                number={page.number}
                numberClass={page.numberClass}
                label={page.label}
                labelClass={page.labelClass}
                description={page.description}
                descClass={page.descClass}
                cardColor={page.cardColor}
              />
            )}
          </div>
          
          {/* Área clicável para avançar (estilo Stories) */}
          <div className="arrow-wrap" onClick={nextPage} style={{cursor: 'pointer'}}>
             ›
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4 text-white">
          <span 
            role="button" 
            className="nav-btn" 
            onClick={prevPage}
            // Esconde o botão Anterior se for o índice 0
            style={{ visibility: index === 0 ? "hidden" : "visible" }}
          >
            Anterior
          </span>
          
          <span>{index + 1} / {pages.length}</span>
          
          <span role="button" className="nav-btn" onClick={nextPage}>
            {/* Muda o texto para Finalizar no último slide */}
            {index === pages.length - 1 ? "Finalizar" : "Próximo"}
          </span>
        </div>
      </div>
    </div>
  );
}