import React from 'react';
import ConfigCardErro from './styles';

const CardErro: React.FC = ({children}) => {
  return (<ConfigCardErro>
      {children}
  </ConfigCardErro>)
}

export default CardErro;