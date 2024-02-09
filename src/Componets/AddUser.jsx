// import axios from "axios";
import { imageUpload } from "../Hooks/imageUpload";

const AddUser = () => {
 
    const handleAdd=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const firstName=form.firstName.value;
        const lastName=form.lastName.value;
        const email=form.email.value;
        const photo=form.photo.files[0]
        const img=await imageUpload(photo)
        const image=img?.data?.display_url;
        const address=form.address.value;
        const state=form.state.value;
        const city=form.city.value;
        const name=form.companyName.value;


        const users={
            firstName,lastName,email, image,address:{address,state,city},company:{name}
        }
        
        
        // console.log(users);

    //   const dataPost=await axios.post('https://dummyjson.com/users',users)

    fetch('https://dummyjson.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(users)
})
.then(res => res.json())
.then(data=>console.log(data));
            
      

    }



  return (
    <div>
      <form onSubmit={handleAdd}>

      <div className="flex gap-2">
        <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered border-purple-500"
            required
          />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered border-purple-400"
            required
          />
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input border-purple-300 input-bordered"
            required
          />
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="address"
            className="input border-pink-400 input-bordered"
            required
          />
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
            className="input border-pink-500 input-bordered"
            required
            type="file"
            id="image"
            name="photo"
            accept="image/*"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">state</span>
          </label>
          <input
            type="text"
            name="state"
            placeholder="state"
            className="input input-bordered border-purple-500"
            required
          />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="input input-bordered border-purple-400"
            required
          />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">city</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="city"
            className="input input-bordered border-purple-400"
            required
          />
        </div>

        <div className="form-control mt-8  w-[20%]">
        
          <button className="btn text-white bg-blue-400 ">Add This user</button>
      
        </div>

       

        
      </div>


      </form>
    </div>
  );
};

export default AddUser;
