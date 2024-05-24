import { useState } from 'react';

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const inputType = visible ? 'text' : 'password';

  return [inputType, toggleVisibility];
};

export default usePasswordToggle;
