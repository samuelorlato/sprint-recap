import React from 'react';
import styled from 'styled-components';
import StatCard from '../components/StatCard';
import {statsData} from '../data/statsData';
import {achievementsData} from '../data/achievementsData';
import Achievements from '../components/Achievement';
import ShareSection from '../components/ShareSection';


import "./SprintWrapped.css"; 

const GradientWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #9333ea, #ec4899, #fb923c);
  padding-bottom: 40px;
  overflow-x: hidden;
`;

const HeroIcon = styled.i`
  font-size: 5rem;
  display: block;
  margin: 0 auto 1rem auto;
`;

export default function Summary() {
  return (
    <GradientWrapper>

      {/* icone e escrita superior */}
      <div className="container text-white">
        <div className="text-center py-5">
          <HeroIcon className="bi bi-trophy icon-anim" />
          <p className="fw-bold fs-2 text-anim">Sprint #47 Completa!</p>
          <p className='opacity-75 fs-5 text-anim-2'>
            21 Out - 3 Nov, 2025
          </p>
        </div>
      </div>

      {/* Colunas de Cartões */}
      <div className='container py-4'>
        <div className='row g-4'>
          {statsData.map(function(stat, index){
              return(
                <StatCard
                  key={stat.id}
                  className="text-anim"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                  
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  subtext={stat.subtext}
                />
              )
            })
          }
        </div>
      </div>

      {/* Conquistas */}
      <div className='text-white my-5'>
        <h5 className='text-center text-anim-3'>Suas Conquistas</h5>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            {achievementsData.map(function(achievement, index){
                return(
                  <Achievements
                    key={achievement.id}
                    className="text-anim"
                    style={{ animationDelay: `${(index * 0.15) + 0.3}s`, opacity: 0 }}

                    icon={achievement.icon}
                    iconColor={achievement.iconColor}
                    iconBg={achievement.iconBg}
                    title={achievement.title}
                    description={achievement.description}
                    rarityLabel={achievement.rarityLabel}
                    rarityBg={achievement.rarityBg}
                  />
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Cartão de compartilhar/baixar/voltar ao inicio */}
<div className='row justify-content-center mt-5'>
    <div className='col-11 col-md-10 col-lg-8 col-xl-6 text-anim-4' style={{ opacity: 0 }}>
      <ShareSection/>
    </div>
</div>

      {/* Rodapé */}
      <div className='row justify-content-center text-white small text-center mt-4 pb-4'>
            <div className='col-md-12 text-anim-4' style={{ animationDelay: '0.5s', opacity: 0 }}>
              Continue com o ótimo trabalho! Nos vemos na próxima sprint. 🚀
            </div>
      </div>
    </GradientWrapper>
  );
}