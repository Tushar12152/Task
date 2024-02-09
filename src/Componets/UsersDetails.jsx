import { useLoaderData } from "react-router-dom";


const UsersDetails = () => {
    const user=useLoaderData()
    // console.log(user);
    return (
       <div className="mt-20">






         <div className="mt-10 w-[80%] mx-auto">
                    

        

        <div className="border-2 border-b-0 border-black  w-full">
        <figure>
          <div className="avatar my-5 flex items-center justify-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.image} />
            </div>
          </div>
        </figure>
                         </div>


                    <div className="flex w-">
                         <div className="border-2 border-black  w-[50%]">
                            <h1 className="text-center">First Name</h1>
                         </div>
                         
                         <div className="border-2 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{user?.firstName}</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Last Name</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{user?.lastName}</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Email</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{user?.email} </h1>
                         </div>   
                    </div>


                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Address</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                               <div>
                                     <h1 className="text-center">street: {user?.address?.address}</h1>
                                     <h1 className="text-center">Suite: {user?.address?.state}</h1>
                                     <h1 className="text-center">City: {user?.address?.city}</h1>
                               </div>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Company Name</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{user?.company?.name} </h1>
                          
                         </div>   
                    </div>

        </div>
       </div>
    );
};

export default UsersDetails;