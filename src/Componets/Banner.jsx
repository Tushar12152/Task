



const Banner = () => {
    return (
       
           

        <div 
            className="relative min-h-screen rounded-lg mt-5 z-0"
            style={{ backgroundImage: `url('https://i.ibb.co/9WsyRG4/Screenshot-5.png')`  , backgroundRepeat:'no-repeat',backgroundSize:'cover',}} // Replace 'path_to_your_image.jpg' with the actual path to your image
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center py-20">
                
                <h1 className="text-4xl font-bold pb-5">Assignment for Front-end Devs</h1>
                <p className="w-[50%] py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque molestiae velit itaque? Et architecto ipsa hic, error ut provident possimus. Beatae autem illo porro quis numquam?</p>
                <button className="bg-blue-400 px-4 py-2 text-white rounded-md hover:bg-yellow-300 ">Lets Explore</button>
              
              
            </div>
        </div>
       
    );
};

export default Banner;