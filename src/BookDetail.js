import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link} from 'react-router-dom';

function BookDetail()
{
  const [search,setSearch] =useState('');
  const [record,setRecord] = useState([]);
  const [authors,setAuthors]=useState([]);
  const [file,setFile]=useState(null);
  const PF = "http://localhost:8000/images/";
  // const PF = "http://localhost:8000/images1/";
  const [book, setBook] = useState({
    name: "",
    // author:"",
    publisher: "",
    publishedDate:"",
    generes:"",
    price:"",
    image:""
  });

    //  Object Destructuring 
    const {name,author,publisher,publishedDate,generes,price,image} = book;
    const onInputChange = async(e) => {
      setBook({ ...book, [e.target.name]: e.target.value });
    };
    
    // On Page load display all records 
    const loadBookDetail = async () =>  
    {
      var response = fetch('http://localhost:8000/v1/book')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
            setRecord(myJson);
          });
    }
    const loadAuthors = async () =>  
    {
      var response = fetch('http://localhost:8000/v1/author')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
            setAuthors(myJson);
          });
    }

    useEffect(() => {
      loadAuthors();
      loadBookDetail();
    }, []);

    // Insert Author Records 
    const submitBookRecord = async(e) => {
        e.preventDefault();//huy bo event
        e.target.reset();//reset lai cac truong
        postImage();
        await axios.post("http://localhost:8000/v1/book",book);
        alert('Data Inserted');
        loadBookDetail();
    };
    //post file anh
    const postImage = async() =>
    {   
      if (file) {
        alert("Post Image ")
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        book.image = filename+"";
        await axios.post("http://localhost:8000/v1/book/upload",data,{ mode: 'cors' }) 
        .then((response)=>{
          alert('Upload thanh cong');
        })     
        .catch((err)=>{
          alert('Error in the Code' +err);
        });
      }
    }
    // Search Records here 
    const searchRecords = () =>
    {   
        alert("Tìm kiếm sách: "+search)
        axios.get(`http://localhost:8000/v1/book/searchRecord/${search}`)
        .then(response => {
          if(response.data==null){
            alert('Không tìm thấy sách: '+search);
          }
          else setRecord(response.data);
        });
    }
    
    // Delete Employee Record
    const deleteRecord = (bookId) =>
    {
      axios.delete(`http://localhost:8000/v1/book/${bookId}`)
      .then((result)=>{
        loadBookDetail();
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
            <form onSubmit={submitBookRecord}> 
            <h5 className="mb-3 ">Thêm sách</h5>
                <div class="form-group">
                   <input type="text" class="form-control  mb-4" name="name"   value={name} onChange={e => onInputChange(e)} placeholder="Nhập tên sách" required=""/>
                </div>
                <div class="form-group">
                   {/* <input type="text" class="form-control  mb-4" name="author"   value={author} onChange={e => onInputChange(e)} placeholder="Nhập tác giả" required=""/> */}
                   <select class="form-control  mb-4" name="author" onChange={e => onInputChange(e)}>
                        {authors.map((au) => (
                            <option value={au._id}>{au.name}</option>
                         ))}
                  </select>
                </div>
                <div class="form-group">
                   <input type="text" class="form-control  mb-4" name="publisher"   value={publisher} onChange={e => onInputChange(e)} placeholder="Nhập NXB" required=""/>
                </div>
                <div class="form-group">
                   <input type="date" class="form-control  mb-4" name="publishedDate"   value={publishedDate} onChange={e => onInputChange(e)} placeholder="Nhập ngày xuất bản" required=""/>
                </div>
                <div class="form-group">
                   <input type="text" class="form-control  mb-4" name="generes"   value={generes} onChange={e => onInputChange(e)} placeholder="Nhập thể loại" required=""/>
                </div>
                <div class="form-group">
                   <input type="number" class="form-control  mb-4" name="price"   value={price} onChange={e => onInputChange(e)} placeholder="Nhập giá" required=""/>
                </div>
                <div class="form-group">
                   {/* <input type="text" class="form-control  mb-4" name="image" value={image} onChange={e => onInputChange(e)}  placeholder="Nhập link ảnh" required=""/> */}
                   <label for="image">Chọn ảnh:</label>
                   <input type="file" id="image" name="image" onChange={(e) => setFile(e.target.files[0]) } />
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-4">Lưu</button>
             </form>
        </div>
      </div>
      <div class="col-sm-8">
        <h4 class="text-center  ml-4 mt-4  mb-5">Danh sách Sách</h4>
        < div class="input-group mb-4 mt-3">
          <div class="form-outline">
           <input type="text" id="form1" onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Tìm kiếm" style={{backgroundColor:"#ececec"}}/>
        </div>
        <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>  
        <div>
        <button type="button" onClick={loadBookDetail}  class="btn btn-success">View All Book</button>
        </div>
        <table class="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                {/* <th>ID</th> */}
                <th>Tên</th>
                <th>Tác giả</th>
                {/* <th>NXB</th>
                <th>Ngày xuất bản</th> */}
                <th>Thể loại</th>
                <th>Giá</th>
                <th>Ảnh</th>
            </tr>
            </thead>
            <tbody>
    
            {record.map((bo)=>
                <tr>
                {/* <td>{au._id}</td> */}
                <td>{bo.name}</td>
                <td>{bo.author.name}</td>
                {/* <td>{bo.publisher}</td>
                <td>{bo.publishedDate}</td>*/}
                <td>{bo.generes}</td> 
                <td>{bo.price}</td>
                <td>
                    <div>
                        {bo.image &&<img style={{width:120,height: 200}} src={PF+bo.image} alt="anhSach"/>}
                    </div>    
                </td>
                <td>
                      <a  className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Bạn có muốn xoá tác giả: '"+bo.name+"' không?"
                          )
                          if (confirmBox === true) {
                            deleteRecord(bo._id)
                          }
                        }}> <i class="far fa-trash-alt" style={{fontSize:"18px",marginRight:"5px"}}></i> </a>
                  
                    <Link class=" mr-2" to={`/book/update/${bo._id}`}>
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

export default BookDetail;