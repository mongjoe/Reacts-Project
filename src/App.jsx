import "./App.css";

function App() {
  return (
    <div className="container d-flex">
      <div className="row">
        <div
          className="col-12 col-sm-6 col-md- 4 col-lg-4 col-xl-3"
          style={{ border: "1 px olid #ccc" }}
        >
          <article
            className="first-columm"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="image-parent w-100">
              <img
                src="https://media.techmaster.vn/api/static/OH6Sopmw/7sB8SBOK"
                style={{ height: 200, width: 305 }}
                alt="Ảnh 1"
              />
            </div>
            <div className="card-title ps-3 pe-3 pt-3 text-center ">
              Cách sử dụng CSS text-shadow: 11 thủ thuật và ví dụ
            </div>

            <div
              className="cart-text p-3"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              text-shadow là thuộc tính có trong CSS3, cho phép tạo và điều
              chỉnh bóng đổ (shado...
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center ps-3 pe-3">
              <div>22</div>
              <div>24-06-2023</div>
            </div>
          </article>
        </div>
        <div
          className="col-12 col-sm-6 col-md- 4 col-lg-4 col-xl-3"
          style={{ border: "1 px olid #ccc" }}
        >
          <article
            className="first-columm"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="image-parent">
              <img
                src="https://media.techmaster.vn/api/static/OH6Sopmw/6VLCbrmM"
                style={{ height: 200, width: 305 }}
                alt="Ảnh 1"
              />
            </div>
            <div className="card-title ps-3 pe-3 pt-3 text-center ps-2 pe-2 pt-2">
              10 mẹo và thủ thuật để xử lý JavaScript Objects.
            </div>
            <div
              className="cart-text p-3"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              JavaScript là 1 trong 3 ngôn ngữ chính của lập trình web, và nó
              được dùng phổ bi�...
            </div>

            <div className="card-footer d-flex justify-content-between align-items-center ps-3 pe-3">
              <div>22</div>
              <div>24-06-2023</div>
            </div>
          </article>
        </div>
        <div
          className="col-12 col-sm-6 col-md- 4 col-lg-4 col-xl-3"
          style={{ border: "1 px olid #ccc" }}
        >
          <article
            className="first-columm"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="image-parent mb-3">
              <img
                src="https://techmaster.vn/resources/image/thumbnail.jpg"
                style={{ height: 200, width: 305 }}
                alt="Ảnh 1"
              />
            </div>
            <div className="card-title ps-3 pe-3 pt-3 text-center ps-2 pe-2 pt-2">
              So sánh về RBAC và ABAC
            </div>
            <div
              className="cart-text p-3"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              1 bài viết so sánh nhanh về RBAC và ABAC. So sánh bằng Golang qua
              2 ví dụ đơn giản.
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center ps-3 pe-3">
              <div>
              22
              </div>
              <div>24-06-2023</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
