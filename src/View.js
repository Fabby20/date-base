import React, { useEffect, useState } from 'react'
import {Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {

    const [data, setData] = useState([]);

    let { userId } = useParams();
   useEffect(() => {
    axios.get(`http://localhost:3000/users/${userId}`)
    .then(res =>
      setData(res.data)
    )
    .catch((e) => console.log(e))
   }, [])
  return (
    <React.Fragment>
        <div className="row justify-content-center align-items-center py-3">
            <div className="col-md-9 shadow py-2">
            <div class="card border-0" style={{width: '18rem'}}>
                <h5 className='fw-bolder m-0 p-0'>{data?.name}</h5>
                <p className='text-muted m-0 p-0'><small>@{data?.username}</small> | <small>{data?.email}</small></p>

                <div className='d-block mt-3'>
                    <p className='text-muted m-0 p-0'><small>{data?.address?.street}</small>, <small>{data?.address?.suite}</small>, <small>{data?.address?.city}</small></p>
                    <p className='text-muted m-0 p-0'><small>{data?.address?.zipcode}</small></p>
                </div>

                <div className='d-block my-3'>
                    <p className='m-0 p-0'><span className='fw-bolder'>Phone:</span> <span>{data?.phone}</span></p>
                    <p className='m-0 p-0'><span className='fw-bolder'>Website:</span> <span>{data?.website}</span></p>
                    <p className='m-0 p-0'><span className='fw-bolder'>Company:</span> <span>{data?.company?.name}</span></p>
                </div>
            </div>
                <div className='d-flex gap-1 mt-2'>
                    <Link to={`edit/${userId}`} type="button" class="btn btn-primary">Edit</Link>
                    <Link to={'/'} class="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default View