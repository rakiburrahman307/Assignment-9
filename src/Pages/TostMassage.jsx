
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    const TostMassage = (message, type = 'info') => {
        toast[type](message, {
          position: 'top-right',
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
};

export default TostMassage;