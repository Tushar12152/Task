
import { useEffect, useState } from "react";
import Title from "../Hooks/Title";
import UsersCard from "./UsersCard";
import { Link } from "react-router-dom";

const UsersList = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [sortOrder, setSortOrder] = useState({ field: '', direction: 'asc' });

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setAllUsers(data?.users))
    }, []);

    const handleSearch = e => {
        e.preventDefault();
        const name = e.target.keyword.value.toLowerCase();

        if (name === '') {
            return;
        }

        // Filter the results
        const searchResults = allUsers.filter(user => user.firstName.toLowerCase() === name);
        setAllUsers(searchResults);
    }

    const handleSort = (field) => {
        // Toggle the sort direction between 'asc' and 'desc' for the given field
        const newDirection = sortOrder.field === field && sortOrder.direction === 'asc' ? 'desc' : 'asc';

        // Sort the users based on the selected field
        const sortedUsers = [...allUsers].sort((a, b) => {
            const valueA = a[field].toLowerCase();
            const valueB = b[field].toLowerCase();

            if (newDirection === 'asc') {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        setAllUsers(sortedUsers);
        setSortOrder({ field, direction: newDirection });
    }

    return (
        <div>
            <Title heading={'Users'}></Title>


            <Link className="bg-blue-400 px-4 py-2 text-white rounded-md hover:bg-yellow-300" to='/add-user'>Add User</Link>


           <div className="lg:flex justify-between items-center">
             {/* Search box implementation */}
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

            {/* Sort buttons */}
            <div className="flex mb-4">
                <button onClick={() => handleSort('firstName')} className="bg-gray-200 py-2 px-4 text-black rounded mr-2">
                    Sort by Name {sortOrder.field === 'firstName' && sortOrder.direction === 'asc' ? '▲' : '▼'}
                </button>
                <button onClick={() => handleSort('email')} className="bg-gray-200 py-2 px-4 text-black rounded mr-2">
                    Sort by Email {sortOrder.field === 'email' && sortOrder.direction === 'asc' ? '▲' : '▼'}
                </button>
                {/* <button onClick={() => handleSort('company')} className="bg-gray-200 py-2 px-4 text-black rounded">
                    Sort by Company {sortOrder.field === 'company' && sortOrder.direction === 'asc' ? '▲' : '▼'}
                </button> */}
            </div>

           </div>

            {/* User cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allUsers?.map(user => <UsersCard key={user.id} card={user} />)}
            </div>
        </div>
    );
};

export default UsersList;
