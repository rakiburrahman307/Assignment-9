import { useEffect, useState } from "react";
import ViewMembers from "./ViewMembers";

const OurTeam = () => {
    const [member, setMember] = useState([]);

    useEffect(()=>{
        fetch("member.json")
        .then(res => res.json())
        .then(data => setMember(data));
    },[])

    return (
        <div className="my-10">
             <h2 className="text-black font-bold text-4xl mb-5 text-center">Team Members</h2>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/51brYdf/brooke-cagle-u-HVRv-Dr7pg-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center text-neutral-content">
              
            {
                member.map(person=> <ViewMembers key={person.id} person={person}></ViewMembers>)
            }
           
            </div>
        </div>
        </div>
       
        
    );
};

export default OurTeam;