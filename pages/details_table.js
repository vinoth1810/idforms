import React from 'react'

export const Details_table = () => {
  return (
    <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Mobile</th>
        <th scope="col">DOB</th>
        <th scope="col">Blood</th>
        <th scope="col">Email</th>
        <th scope="col">Avatar</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">SHB0013</th>
        <td>vinoth</td>
        <td>8637656043</td>
        <td>30-03-2001</td>
        <td>B+</td>
        <td>vinothshanu310@gmail.com</td>
        <td>image</td>
        <td>Daven villai,
            Erranchili,
            Palliyadi(PO)
            629169
        </td>

        <td>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-success">View</button>
        </td>

      </tr>
   
    </tbody>
  </table>
  )
}


export default Details_table;
