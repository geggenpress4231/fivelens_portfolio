import React, { useReducer, useEffect } from 'react';

import './Rollup.scss';

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
    <div className={`RollUpContainer ${isVisible ? 'isVisible' : 'isHidden'}`}>
      <ul className="GenreList">
        <li onClick={onClose}>Landscape</li>
        <li onClick={onClose}>Portrait</li>
        <li onClick={onClose}>Wildlife</li>
        <li onClick={onClose}>Urban</li>
      </ul>
    </div>
  );
};

export default RollUp;
