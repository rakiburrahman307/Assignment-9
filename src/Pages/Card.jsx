
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const { id, title, description, image} = service;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-2xl">
            <figure><img className='h-48' src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
              <p>  {
                description.length > 50 && description.slice(0, 65)
            }</p>
                <div className="card-actions justify-center">
                    <Link to={`/cardDetail/${id}`} className="btn btn-outline btn-info">Read More</Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    service:PropTypes.object
};

export default Card;