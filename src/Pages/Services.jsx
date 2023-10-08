
// import PropTypes from 'prop-types';

import { useState } from "react";

const Services = () => {
    const [searchResult, setSearchResult]= useState('');
    const handleSearch = e =>{
        e.preventDefault();
        const searchValue = e.target.value;
        setSearchResult(searchValue);
    }
    return (
        <div className="my-10 mx-auto">
            <h2 className="text-center text-4xl font-bold mb-10">Our Service</h2>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/Ny1wd03/successful-medical-team-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mb-16">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Service</h1>
                    </div>
                 
                </div>
                <div className="mt-20">
                  <form>
                  <input onChange={handleSearch} type="text" name="search" placeholder="Search here" className="input input-bordered input-info w-full max-w-4xl" />
                    </form>
                  </div>
            </div>

            <div>
                
            </div>
        </div>

    );
};

Services.propTypes = {

};

export default Services;