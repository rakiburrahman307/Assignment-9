import { FaMicrophone, FaVoicemail } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-400 to-blue-700 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-5xl">
                <h1 className="text-4xl font-bold mb-6 text-indigo-800 text-center">Get in Touch</h1>
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <FaVoicemail className="text-indigo-600 mr-2" />
                        <p className="text-lg text-gray-700">Email: rakiburrahman307@gmail.com</p>
                    </div>
                    <div className="flex items-center">
                        <FaMicrophone className="text-indigo-600 mr-2" />
                        <p className="text-lg text-gray-700">Phone: (+88) 0174918XXXX</p>
                    </div>
                </div>
                <p className="text-lg mb-6 text-gray-700">
                    Have questions or Ans? We love to hear from you!
                </p>

                <div className="join join-vertical w-full mb-5">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What is the purpose of the Health Fair?
                        </div>
                        <div className="collapse-content">
                            <p>The Health Fair is dedicated to promoting health and wellness in our community. Our goal is to provide valuable information, screenings, and resources to help individuals lead healthier lives.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What can I expect at the Health Fair?
                        </div>
                        <div className="collapse-content">
                            <p> The Health Fair offers a day filled with educational sessions, interactive activities, and opportunities to connect with healthcare professionals. You all find workshops, health screenings, and a variety of exhibits covering nutrition, fitness, mental well-being, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How can I participate in the Health Fair?
                        </div>
                        <div className="collapse-content">
                            <p> Participation is easy! Simply check our event schedule and attend the sessions or activities that interest you. Registration may be required for some workshops or screenings, and you can find details on our website.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://source.unsplash.com/400x200/?contact" // Replace with your image URL or use Unsplash for free images
                        alt="Contact"
                        className="rounded-lg shadow-md w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;