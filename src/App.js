import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./App.css";
import axios from "axios";


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(' http://localhost:3000/users')
    .then(res =>
      setData(res.data)
    )
    .catch((e) => console.log(e))

  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this user!');

    if(confirm) {
      axios.delete(`http://localhost:3000/users/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => console.log(e))
    }
    
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center align-items-center py-3">
        <div className="col-md-9 shadow py-2">
        <div className="d-block">
            <a className="btn btn-primary">
              + Add New
            </a>
          </div>
          <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
            {data.map((item, index) => {
              return <tr key={index}>
                  <td>{item.name} </td>
                  <td>{item.email} </td>
                  <td>{item.phone} </td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link to={`view/${item.id}`} className="btn btn-warning">view</Link>
                      <Link to={`edit/${item.id}`} className="btn btn-primary">edit</Link>
                      <button onClick={e => handleDelete(item.id)} className="btn btn-danger">delete</button>
                    </div>
                  </td>
              </tr>
               })}
            </tbody>

          </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
