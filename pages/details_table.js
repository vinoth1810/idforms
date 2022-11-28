import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import Link from "next/link";




export const Details_table = () => {

  const router = useRouter();

  const [profiles, setProfiles] = useState()


  const api = async () => {
    const { data } = await axios.get('/api/get');
    console.log(data)
    setProfiles(data.results)

  }

  useEffect(() => {

    api();

  }, [])


  const handleRemoveUser = (id) => {
    try {
      const { data } = axios.delete(`/api/delete/${id}`);
      router.reload(window.location.pathname)

      toast.error("Deleted");

    } catch (err) {
      toast(err)
    }


  }


  console.log("--->", profiles)


  return (

    <div style={{ padding: "80px" }}>


      {profiles && profiles.map(
        ({ name, mobile, role, Address, avatar, DOB, email, id_number, Blood, id }) => (
          <>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Blood</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{mobile}</td>
                  <td>{DOB}</td>
                  <td>{Blood}</td>
                  <td>{email}</td>
                  <td>{Address.slice(0, 5)}...
                  </td>



                  <td >
                    <button className="btn btn-primary" style={{ marginRight: "10px" }} >Edit</button>
                    <button className="btn btn-danger" style={{ marginRight: "10px" }} onClick={() => handleRemoveUser(id)}>Delete</button>
                    <button className="btn btn-success" style={{ marginRight: "10px" }}>View</button>
                  </td>



                </tr>

              </tbody>
            </table>


          </>
        )
      )}



      <Link href="/forms">
        <button style={{ position: "fixed", bottom: 50, right: 50 }}>
          Add Data's
        </button>F
      </Link>


    </div>

  )
}


export default Details_table
