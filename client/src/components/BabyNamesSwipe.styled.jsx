import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  background: linear-gradient(135deg, #fce7f3 0%, #dbeafe 100%);
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
`;

export const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #374151;
`;

export const CardContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 500px;
  height: 24rem;
  @media (min-width:768px) {
    height: 1000px;
    width: 70vw;
  }
  align-self: center;
`;

export const Card = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  @media (min-width:768px) {
    width: 70vw;
  }
  cursor: grab;
  transition: all 0.3s ease;
  transform: ${props => `translateX(${props.dragOffset || 0}px) rotate(${(props.dragOffset || 0) * 0.1}deg) scale(${props.isDragging ? 1.05 : 1})`};
  opacity: ${props => 1 - Math.abs(props.dragOffset || 0) * 0.002};
  background: ${(props) => {
    if (props.dragOffset > 50) { // swiped RIGHT (liked)
      return `rgb(0, ${props.dragOffset}, 0);`;
    }
    if (props.dragOffset < -50) { // swiped LEFT (did not like)
      return `rgb(${-props.dragOffset}, 0, 0);`;
    }
    return 'white;'
  }}
  &:active {
    cursor: grabbing;
  }
`;

export const BackgroundCard = styled.div`
  position: absolute;
  inset: 0;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.95);
  opacity: 0.5;
`;

export const NameText = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: #374151;
`;

export const BackgroundNameText = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: #9ca3af;
`;

export const SwipeIndicator = styled.div`
  position: absolute;
  top: 1rem;
  ${props => props.direction === 'right' ? 'right: 1rem;' : 'left: 1rem;'}
  background: ${props => props.direction === 'right' ? '#10b981' : '#ef4444'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  transform: ${props => props.direction === 'right' ? 'rotate(12deg)' : 'rotate(-12deg)'};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const ActionButton = styled.button`
  background: ${props => props.variant === 'reject' ? '#ef4444' : '#10b981'};
  color: white;
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.variant === 'reject' ? '#dc2626' : '#059669'};
    transform: scale(1.05);
  }
`;

export const ProgressContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProgressBar = styled.div`
  background: #e5e7eb;
  border-radius: 9999px;
  height: 0.5rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  background: #3b82f6;
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

export const ProgressText = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 2rem;
`;

export const LikedNamesContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const LikedNamesTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EmptyState = styled.p`
  color: #6b7280;
  text-align: center;
  padding: 1rem 0;
`;

export const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  overflow-y: auto;
  height: 100%;
`;

export const NameTag = styled.div`
  background: #fdf2f8;
  color:rgb(253, 0, 106);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
`;

export const FinishedContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FinishedCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

export const FinishedTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 1rem;
`;

export const FinishedText = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2563eb;
  }
  margin-bottom: 10px;
`;

export const MatchedNamesContainer = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr
`;

export const MatchedName = styled.p`
  font-size: 3rem;
`;