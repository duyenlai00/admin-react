import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateBook = () => {
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams(); //The useParams() hook helps us to access the URL parameters from a current route.

  const [book, setBook] = useState({
    name: "",
    author: "",
    publisher: "",
    publishedDate: "",
    generes: "",
    price: "",
    image: "",
  });

  const { name, author, publisher, publishedDate, generes, price, image } =
    book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBook();
  }, []);

  const updateBook = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/v1/book/${id}`, book);
    history.push("/book");
  };

  const loadBook = () => {
    fetch(`http://localhost:8000/v1/book/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBook({
          id: id,
          update: true,
          name: result.name,
          author: result.author._id,
          publisher: result.publisher,
          publishedDate: result.publishedDate,
          generes: result.generes,
          price: result.price,
          image: result.image,
        });
      })
      .catch((error) => console.log("error", error));
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
              value={name}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập tên sách"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control  mb-4"
              name="author"
              value={author}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập tác giả"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control  mb-4"
              name="publisher"
              value={publisher}
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
              value={publishedDate}
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
              value={generes}
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
              value={price}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập giá"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control  mb-4"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
              placeholder="Nhập link ảnh"
              required=""
            />
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
