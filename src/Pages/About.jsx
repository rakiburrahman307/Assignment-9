

const About = () => {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
          <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-2xl">
            <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">About Health Fair</h1>
            <p className="text-lg mb-4 text-gray-700">
              Welcome to our vibrant Health Fair! We are committed to fostering health and well-being in our community.
              Our vision is to create a joyful and informed community that embraces a holistic approach to health.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Immerse yourself in a day of inspiration and discovery. From engaging workshops to personalized health assessments,
              our Health Fair is designed to uplift and empower. Join us on this exciting journey towards a healthier lifestyle.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Explore the latest trends in nutrition, fitness, and mental well-being. Connect with healthcare experts
              and like-minded community members who share your commitment to well-being.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              At Health Fair, we believe that a vibrant community starts with individual well-being. Take the leap towards a
              healthier life, and let us be your companion on this delightful and transformative adventure.
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="https://source.unsplash.com/600x300/?health"
                alt="Health Fair"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      );
};

export default About;