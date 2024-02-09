



const Banner = () => {
    return (
       
           

<div
            className="relative min-h-screen rounded-lg mt-5 z-0"
            style={{ backgroundImage: `url('https://i.ibb.co/9WsyRG4/Screenshot-5.png')`  , backgroundRepeat:'no-repeat',backgroundSize:'cover',}} // Replace 'path_to_your_image.jpg' with the actual path to your image
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center py-20">
                
                <h1 className="text-4xl font-bold pb-5">Search Users By Users Name</h1>
              
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 px-4 text-black mr-2 w-60 border rounded-l focus:outline-none"
                    />
                    <button className="bg-blue-400 hover:bg-yellow-300 py-2 px-4 text-white rounded-r">
                        Search
                    </button>
                </div>
            </div>
        </div>
       
    );
};

export default Banner;