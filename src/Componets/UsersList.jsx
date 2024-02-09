import { useEffect, useState } from "react";
import Title from "../Hooks/Title";
import UsersCard from "./UsersCard";

const UsersList = () => {
const [allUsers,setAllUsers]=useState([])


    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data=>setAllUsers(data?.users))
    },[])



//  console.log(allUsers);

const handleSearch=e=>{
     e.preventDefault()
     const name=e.target.keyword.value;
     console.log(name);

    if(name===''){
        return
    }
    
    //filter because if one name used for tow object
     const searchResults = allUsers.filter(user => user.firstName.toLowerCase() === name.toLowerCase())
     setAllUsers(searchResults);
    
}

    return (
        <div>
             <Title heading={'Users'}></Title>


               {/* /searchbox implemnt */}
                <div className="my-10">
                <form onSubmit={handleSearch}>
                    
               <div className="flex items-center ">
                   
                    <input
                        type="text"
                        name="keyword"
                        placeholder="Search by users first name"
                        className="py-2 px-4 text-black mr-2 w-60 border rounded-l focus:outline-none"
                    />
                    <button type="submit" className="bg-blue-400 hover:bg-yellow-300 py-2 px-4 text-white rounded-r">
                        Search
                    </button>
                </div>
               </form>
                </div>
              


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {
                    allUsers?.map(user=><UsersCard key={UsersCard.id} card={user} />)
                 }
              </div>               




        </div>
    );
};

export default UsersList;