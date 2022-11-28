import React, { useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { useRouter } from "next/router";



function Form() {


  const router = useRouter();



  const [input, setInput] = useState({
    "name": "",
    "role": "",
    "IdNumber": "",
    "mobile": "",
    "image": "",
    "dob": "",
    "blood": "",
    "email": "",
    "address": ""
  });

  const api = async () => {
    const {data} = await axios.get('/api/get');
    console.log(data)

  }

  React.useEffect( () => {

    api();

  }, [])


  const handlechange = async(e) => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value });


    try {
			const { data } = await axios.post(
				`/api/postdata`, {

				name : input.name,
				email : input.email,
				dob : input.dob,
				blood : input.blood,
        mobile : input.mobile,
        address: input.address,
        avatar: "sajdas",
        role : input.role,
        id_number: input.IdNumber

			},
			);

			router.push("/");

			toast.success("data added");
		} catch (err) {
			console.log(err);
			toast.error(" add failed");
		}
  }

  console.log("-->", input)

  return (

    <div className='' style={{ display: "grid", placeItems: "center", marginTop: '50px', marginBottom: '50px' }}>
      <form onSubmit={handlechange}>
        <h1>FILL THE DETAILS</h1>

        <div class="form-group ">
          <label for="name">Name</label>
          <input onChange={(e) => setInput({ ...input, name: e.target.value })} value={input.name} type="text" class="form-control" id="name" placeholder="Name" />
        </div>
        <br></br>

        <div class="form-group ">
          <label for="role">Role</label>
          <input type="text" onChange={(e) => setInput({ ...input, role: e.target.value })} class="form-control" id="inputAddress2" placeholder="Enter Role" />
        </div>

        <br></br>

        <div class="form-group ">
          <label for="role">ID Number</label>
          <input type="text" onChange={(e) => setInput({ ...input, IdNumber: e.target.value })} class="form-control" id="inputAddress2" placeholder="Enter ID Number" />
        </div>

        <br></br>

        <div class="form-group ">
          <label for="mobile">Mobile</label>
          <input type="number" onChange={(e) => setInput({ ...input, mobile: e.target.value })} value={input.mobile} class="form-control" id="mobile" placeholder="Mobile" />
        </div>
        <br></br>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="dob">DOB</label>
            <input type="date" onChange={(e) => setInput({ ...input, dob: e.target.value })} value={input.dob} class="form-control" id="Dob" />
          </div>

          <div class="form-group col-md-6">
            <label for="blood">Blood</label>
            <input type="text" onChange={(e) => setInput({ ...input, blood: e.target.value })} value={input.blood} class="form-control" id="blood" />
          </div>
        </div>
        <br></br>

        <div class="form-group ">
          <label for="email">E Mail</label>
          <input type="email" class="form-control" onChange={(e) => setInput({ ...input, email: e.target.value })} value={input.email} placeholder="email" />
        </div>

        <br></br>

        <div class="form-group ">
          <label for="image">Your Image</label>
          <input type="file" class="form-control" id="image" />
        </div>



        <br></br>

        <div class="form-group ">
          <label for="exampleFormControlTextarea1">Address</label>
          <textarea class="form-control" onChange={(e) => setInput({ ...input, address: e.target.value })} value={input.address} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default Form

