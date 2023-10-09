

import { useEffect, useState } from "react";
import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Services = () => {


    const [searchResult, setSearchResult] = useState('');
    const [data, setData] = useState([])
    const handleSearch = e => {
        e.preventDefault();
        const searchValue = e.target.value;
        setSearchResult(searchValue);
    }



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data);

            });
    }, []);

    return (
        <div className="my-10 mx-auto">
            <h2 className="text-center text-4xl font-bold mb-10">Our Service</h2>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/Ny1wd03/successful-medical-team-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mb-16">
                    <div className="max-w-md" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h1 className="mb-5 text-5xl font-bold">Find Service</h1>
                    </div>

                </div>
                <div className="mt-20">
                    <form>
                        <input onChange={handleSearch} type="text" name="search" placeholder="Search here" className="input input-bordered input-info w-full max-w-4xl" />
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 mx-24">
                {data
                    .filter((service) => {
                        if (searchResult === "") {
                            return service;
                        } else if (service.title.toLowerCase().includes(searchResult.toLowerCase())) {
                            return service;
                        }
                    })
                    .map((service) => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>

    );
};

Services.propTypes = {

};

export default Services;