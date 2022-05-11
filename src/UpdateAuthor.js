import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateAuthor = () => {
  
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
 

  const [author ,setAuthor] = useState({
      name:"",
      year:""
  })

  const { name, year} = author;

  const onInputChange = e => {
    setAuthor({ ...author,[e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadAuthor();
  }, []);

  
  const updateAuthor= async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/v1/author/${id}`,author);
    history.push("/author");
  };

  const loadAuthor =  () => {
    fetch(`http://localhost:8000/v1/author/${id}`,{
			method: "GET",
		  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setAuthor({
        name: result.name,
        year: result.year
      });
    })
    .catch((error) => console.log("error", error));
  };

  return (
    <div className="container">
     <div className="row mt-4"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h4 className="text-center mb-4">Cập nhật thông tin tác giả</h4>
          <div className="form-group mb-3">
            <h5>ID: {author.id} </h5>
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nhập tên"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Nhập năm sinh"
              name="year"
              value={year}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button onClick={updateAuthor} class="btn btn-primary btn-block mt-4">Cập nhật</button>
      
       </div>
      </div> 
    </div>
  );
};

export default UpdateAuthor;
