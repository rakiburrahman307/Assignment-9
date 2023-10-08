
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    const TostMassage = (message) => {
        toast(message, {
          position: 'top-right',
          autoClose: 3000,
        });
};

export default TostMassage;