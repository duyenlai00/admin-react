import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link} from 'react-router-dom';

function AuthorDetail()
{
  const [search,setSearch] =useState('');
  const [record,setRecord] = useState([]);

  const [author, setAuthor] = useState({
    name: "",
    year: "",
  });
 
    //  Object Destructuring 
    const {name,year} = author;
    const onInputChange = e => {
      setAuthor({ ...author, [e.target.name]: e.target.value });
    };
    
    // On Page load display all records 
    const loadAuthorDetail = async () =>  
    {
      
      var response = fetch('http://localhost:8000/v1/author')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
            setRecord(myJson);
          });
    }
    useEffect(() => {
      loadAuthorDetail();
    }, []);

    // Insert Author Records 
    const submitAuthorRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        await axios.post("http://localhost:8000/v1/author",author);
        alert('Data Inserted');
        
        loadAuthorDetail();
    };
    
    // Search Records here 
    const searchRecords = () =>
    {   
        alert("Tìm kiếm tác giả: "+search)
        axios.get(`http://localhost:8000/v1/author/searchRecord/${search}`)
        .then(response => {
            if(response.data==null){
              alert('Không tìm thấy tác giả: '+search);
            }
            else setRecord(response.data);
            
        });
    }
    
    // Delete Employee Record
    const deleteRecord = (authorId) =>
    {
      axios.delete(`http://localhost:8000/v1/author/${authorId}`)
      .then((result)=>{
        loadAuthorDetail();
      })
      .catch(()=>{
        alert('Error in the Code');
      });
    };

  return(
    <section>  
    <div class="container">  
      <div class="row mt-3">
       <div class="col-sm-4">
            <br/>
            <br/>
          <div className="box p-3 mb-3 mt-5" style={{border:"1px solid #d0d0d0"}}>
            <form onSubmit={submitAuthorRecord}> 
            <h5 className="mb-3 ">Thêm tác giả</h5>
                <div class="form-group">
                   <input type="text" class="form-control  mb-4" name="name"   value={name} onChange={e => onInputChange(e)} placeholder="Nhập tên" required=""/>
                </div>
                <div class="form-group">
                   <input type="number" class="form-control  mb-4" name="year" value={year} onChange={e => onInputChange(e)}  placeholder="Nhập năm sinh" required=""/>
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-4">Lưu</button>
             </form>
        </div>
      </div>
      <div class="col-sm-8">
        <h4 class="text-center  ml-4 mt-4  mb-5">Danh sách Tác giả</h4>
        < div class="input-group mb-4 mt-3">
          <div class="form-outline">
           <input type="text" id="form1" onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Tìm kiếm" style={{backgroundColor:"#ececec"}}/>
        </div>
        <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>  
        <div>
        <button type="button" onClick={loadAuthorDetail}  class="btn btn-success">View All Author</button>
        </div>
        <table class="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Năm sinh</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
    
            {record.map((au)=>
                <tr>
                <td>{au._id}</td>
                <td>{au.name}</td>
                <td>{au.year}</td>
                <td>
                      <a  className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Bạn có muốn xoá tác giả: '"+au.name+"' không?"
                          )
                          if (confirmBox === true) {
                            deleteRecord(au._id)
                          }
                        }}> <i class="far fa-trash-alt" style={{fontSize:"18px",marginRight:"5px"}}></i> </a>
                  
                    <Link class=" mr-2" to={`/author/update/${au._id}`}>
                       <i class="fa fa-edit" aria-hidden="true"></i> 
                    </Link>
                </td>
                </tr>
                )} 
            </tbody>
        </table>
      </div>
      </div>
    </div>
   </section>
  )
}

export default AuthorDetail;