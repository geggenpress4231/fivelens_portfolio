import React, { useReducer, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const rollUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const rollDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

interface RollUpContainerProps {
  $isVisible: boolean;
}

const RollUpContainer = styled.div<RollUpContainerProps>`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  background-color: #f5f5f5;
  color: black;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1000;
  animation: ${({ $isVisible }) => ($isVisible ? rollUp : rollDown)} 0.5s ease forwards;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;

const GenreList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px;
  text-align: center;

  li {
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.8);
    margin-bottom: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;

    &:hover {
      background-color: #ddd;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

interface RollUpProps {
  isVisible: boolean;
  onClose?: () => void;
}

type State = {
  initialized: boolean;
};

type Action = { type: 'INITIALIZE' };

const initialState: State = { initialized: false };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INITIALIZE':
      return { initialized: true };
    default:
      throw new Error('Unknown action');
  }
}

const RollUp: React.FC<RollUpProps> = ({ isVisible, onClose }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.initialized) {
      dispatch({ type: 'INITIALIZE' });
      console.log('RollUp initialized');
    }
  }, [state.initialized]);

  useEffect(() => {
    console.log('RollUp visibility changed:', isVisible);
  }, [isVisible]);

  console.log('RollUp rendering:', { isVisible, initialized: state.initialized });

  if (!state.initialized) {
    console.log('RollUp not initialized yet');
    return null; // Don't render until initialized
  }

  return (
    <RollUpContainer $isVisible={isVisible}>
      <GenreList>
        <li onClick={onClose}>Landscape</li>
        <li onClick={onClose}>Portrait</li>
        <li onClick={onClose}>Wildlife</li>
        <li onClick={onClose}>Urban</li>
      </GenreList>
    </RollUpContainer>
  );
};

export default RollUp;
