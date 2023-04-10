
import Carousel from 'react-bootstrap/Carousel';

function OffcanvasExample() {
  return (
    <header className="p-3 text-bg-dark sticky-top">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          <img src="../images/sol.png" width="50" height="50" className="d-inline-block align-top"/>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="Product" className="nav-link px-2 text-secondary">Trang chủ</a></li>
          <li><a href="Product" className="nav-link px-2 text-white">Cửa hàng</a></li>
          <li><a href="Contact" className="nav-link px-2 text-white">Về chúng tôi</a></li>
          <li><a href="Form" className="nav-link px-2 text-white">Liên hệ</a></li>
          <li><a href="Form" className="nav-link px-2 text-white">Góp ý</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control btn-outline-light text-bg-light" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button  href="Contact" type="button" className="btn btn-outline-light me-2">Login</button>
          <button  href="Form" type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  );
}

export default OffcanvasExample;