import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoadingContainer, LoadingCounter } from './styles'

const Loading: React.FC = () => {
    const navigate = useNavigate();

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (counter < 100) {
            setCounter(counter + 1);
        } else {
            navigate('/home', { replace: true });
        }
      }, 20);
  
      return () => clearInterval(interval);
    }, [counter]);

    return (
        <LoadingContainer>
            <LoadingCounter>{counter}%</LoadingCounter>
        </LoadingContainer>
    )
}

export default Loading