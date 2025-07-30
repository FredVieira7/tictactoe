import { useEffect, useState } from 'react'
import { ToastContainer } from './styles';

const Toast = ({ children, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timeout);
    }, [duration]);
  
    if (!visible) return null;
  
    return <ToastContainer visible={visible}>{children}</ToastContainer>;
  };
  
  export default Toast;