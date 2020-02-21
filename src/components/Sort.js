import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        Sắp xếp
            </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/#">Tên A-Z</a>
                        <a className="dropdown-item" href="/#">Tên Z-A</a>
                        <hr />
                        <a className="dropdown-item" href="/#">Trạng Thái Kích Hoạt</a>
                        <a className="dropdown-item" href="/#">Trạng Thái Ẩn</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;
