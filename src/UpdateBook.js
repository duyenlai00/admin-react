import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const UpdateBook = () => {
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams(); //The useParams() hook helps us to access the URL parameters from a current route.

  // const [file,setFile]=useState();
  const PF = "http://localhost:8000/images/";
  // const PF = "http://localhost:8000/images1/";
  const [book, setBook] = useState({
    name: "",
    // author: "",
    publisher: "",
    publishedDate: "",
    generes: "",
    price: "",
    image: "",
  });
  const [authors,setAuthors]=useState([]);
  const { name, author, publisher, publishedDate, generes, price, image } =book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadContent();
  }, []);
 
  const loadContent =()=>{
   loadAuthors();
  //  loadBook();
  //  setFileStart();
  }
  const loadAuthors = async() =>  
  {
    var response =  await fetch('http://localhost:8000/v1/author')
       .then(function(response){
          return response.json();
        })
       .then(function(myJson) {
          setAuthors(myJson);
        });
        return loadBook();
  }
  const loadBook = async() => {
    await fetch(`http://localhost:8000/v1/book/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBook({
          id: id,
          name: result.name,
          author: result.author._id,
          publisher: result.publisher,
          publishedDate: result.publishedDate,
          generes: result.generes,
          price: result.price,
          image: result.image
        });
        // return setFileStart(result.image);
      })
      .catch((error) => console.log("error", error)); 
  };
  // const setFileStart = async(image)=>  
  // { 
  //   console.log(image);
  //   console.log("http://localhost:8000/v1/book/getFile/"+image);
  //   await axios.get("http://localhost:8000/v1/book/getFile/"+image)
  //   .then((response)=>{
  //     setFile(response.data);
  //     console.log(response);
  //     // file.name=image;
  //     alert('Load thanh cong');
  //   })     
  //   .catch((err)=>{
  //     alert('Error in the Code' +err);
  //   });
  //   ;
  // }
  // const postImage = async() =>
  // {   
  //   if (file) {
  //     alert("Post Image ")
  //     const data =new FormData();
  //     const filename = Date.now() + file.name;
  //     data.append("name", filename);
  //     data.append("file", file);
  //     book.image = filename+"";
  //     await  axios.post("http://localhost:8000/v1/book/upload",data,{ mode: 'cors' }) 
  //     .then((response)=>{
  //       alert('Upload thanh cong');
  //     })     
  //     .catch((err)=>{
  //       alert('Error in the Code' +err);
  //     });
  //   }
  // }

  const updateBook = async(e) => {
    e.preventDefault();
    // postImage();
    await axios.put(`http://localhost:8000/v1/book/${id}`, book);
    history.push("/book");
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
          <h4 className="text-center mb-4">Cập nhật thông tin sách</h4>
          <div className="form-group mb-3">
            <h5>ID: {book.id} </h5>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control  mb-4"
              name="name"
              value={book.name}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập tên sách"
              required=""
            />
          </div>
          <div class="form-group">
            <select
              class="form-control  mb-4"
              name="author"
              value={author}
              onChange={(e) => onInputChange(e)}
            >
              {authors.map((au) => (
                <option value={au._id} selected={author}>
                  {au.name}
                </option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control  mb-4"
              name="publisher"
              value={book.publisher}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập NXB"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="date"
              class="form-control  mb-4"
              name="publishedDate"
              value={book.publishedDate.slice(0,10)}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập ngày xuất bản"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control  mb-4"
              name="generes"
              value={book.generes}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập thể loại"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control  mb-4"
              name="price"
              value={book.price}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập giá"
              required=""
            />
          </div>
           <div class="form-group">
              <label for="image1" >Ảnh sách:</label>
              <div class="form-control  mb-4">
                   {/* <input type="file" id="image1" name="image" value={book.image}onChange={(e) => setFile(e.target.files[0]) } /> */}

                  {book.image && (<img className="writeImg" style={{width:120,height: 200}} src={PF+book.image} alt="anh" />)}  
              </div>
            </div>
          <button onClick={updateBook} class="btn btn-primary btn-block mt-4">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
