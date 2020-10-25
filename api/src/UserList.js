import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get( "https://jsonplaceholder.typicode.com/users");
            setListOfUser(result.data)
        }
        fetchData();
    }, [])



    return (
        <div>
            {listOfUser.map((item)=> (
            <Table striped bordered hover>
            
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Street</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.address.street}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.address.street}</td>
    </tr>
    <tr>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.address.street}</td>
    </tr>
  </tbody>

</Table>
))}
        </div>

            
    )
}

export default UserList
