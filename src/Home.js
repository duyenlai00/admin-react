import React from "react";
import calendarPic  from './images/bannerbook.png';
const Home = () => {

  return (
    <div className="container">
        <h4 className="text-center">CỬA HÀNG SÁCH PTIT</h4>
        <img src={calendarPic } alt="banner" />
        <div className="container row mt-4 form-group text-left pull-left ">
          <p>
             Cửa hàng sách PTIT luôn nhấn mạnh và trung thành<br/>
             với chủ trương Sách hay cho mọi người. Cửa hàng<br/> 
             đã liên tục cập nhật những đầu sách bán chạy đáp<br/> 
             ứng nhu cần căn bản là tìm hiểu và giải trí của<br/> 
             đông đảo người yêu sách.</p>
          <p>
          Cửa hàng sách PTIT xây dựng đội ngũ nhân viên<br/>
          chuyên nghiệp, năng động và luôn học hỏi kiến thức<br/>
          mới đặc biệt liên quan đến Công nghệ thông tin trong <br/>
          thời đại 4.0 ngày càng phát triển như hiện nay. Cửa <br/>
          hàng phát triển hệ thống bán hàng online nhằm giúp <br/>
          bạn đọc tiếp cận với sách một cách nhanh chóng tiện<br/>
          lợi.</p>              
        </div>
          <h5>Các thể loại sách:</h5>
            <div><span>Kỹ năng sống</span></div>
            <div><span>Lịch sử truyền thống</span></div>
            <div><span>Kiến thức-Khoa học</span></div>
            <div><span>Văn học Việt Nam</span></div>
            <div><span>Văn học nước ngoài</span></div>
    </div>
  );
};
export default Home;
