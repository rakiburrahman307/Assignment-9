import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card.id === parseInt(id));
    const { title, description, image } = card;

    return (

        <div className="card w-auto glass px-5 md:mx-24 lg:mx-36 mt-16 h-[600px]" data-aos="zoom-in-right">
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold ">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <Link to='/' className="btn btn-outline btn-error">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;