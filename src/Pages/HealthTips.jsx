import { useEffect, useState } from "react";


const HealthTips = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('tips.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold mb-10 text-center text-red-500">Health Tips and <span className="text-blue-700 font-extrabold" data-aos="zoom-in-up">Articles</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((tip) => (
                    <div key={tip.id} className="bg-blue-300 p-6 rounded-lg shadow-md" data-aos="fade-up-right">
                        <h2 className="text-xl font-bold mb-4">{tip.title}</h2>
                        <p className="text-gray-700">{tip.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthTips;