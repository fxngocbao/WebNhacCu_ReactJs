import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blogs=()=>{
    return(
        <React.Fragment>
           <h1>this is blogs</h1>
           <div className="row">
        <div className="col-lg-3">
            <div className="card shadow">
                <div>
                    <img src="./Ảnh/shoppingcart.gif" className="w-25" alt="w-25"/>
                    <p className="d-inline-block ms-3">
                        Sản phẩm đã mua <span style="visibility: hidden;" className="badge bg-danger" id="soluong">0</span><br/> VND <span id="tongtien"></span>
                    </p>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onclick="LOADTABLE()">Xem bảng sản phẩm đã mua</button>


                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <table className="table table-bordered" id="bangsanpham">

                                    <head>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình sản phẩm</th>
                                        <th>Giá sản phẩm</th>
                                    </head>
                                    Tổng tiền: <span id="model_tongtien"></span>
                                </table>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Clear cart</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className="card-body shadow">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Search" name="Sản phẩm"/>
                </div>
            </div>
            <div id="accordion">
                <div className="cap">Phân loại sản phẩm</div>
                <div className="ct">
                    <label><input onchange="chonSP()" type="checkbox" className="phanloai" value="Kèn, Sáo"/>Kèn, Sáo</label>
                    <label><input onchange="chonSP()" type="checkbox" className="phanloai" value="Trống"/>Trống</label>
                    <label><input onchange="chonSP()" type="checkbox" className="phanloai" value="Đàn"/>Đàn</label>
                </div>
                <div className="cap">Giá bán</div>
                <div className="ct">
                    <label><input onchange="chonSP()" type="checkbox" className="giaban" value="1"/>100.000 VND - 500.000 VND</label>
                    <label><input onchange="chonSP()" type="checkbox" className="giaban" value="2"/>Trên 500.000 VND</label>
                    <label><input onchange="chonSP()" type="checkbox" className="giaban" value="3"/>Trên 1 triệu</label>
                </div>
            </div>
        </div>
        </div>
           
        </React.Fragment>
    )
}

export default Blogs;