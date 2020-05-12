import React, { Component } from "react";

class Sort extends Component {

  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            Sắp xếp
          </button>
          <div className="dropdown-menu pl-3 rong">
            <li onClick={() => this.onClick("name", 1)} className={this.props.sortBy === 'name' && this.props.sortValue===1 ? 'sort_selected' : ''}>Tên A-Z</li>
            <li onClick={() => this.onClick("name", -1)} className={this.props.sortBy === 'name' && this.props.sortValue===-1 ? 'sort_selected' : ''}>Tên Z-A</li>
            <hr />
            <li onClick={() => this.onClick("status", 1)} className={this.props.sortBy === 'status' && this.props.sortValue===1 ? 'sort_selected' : ''}>
              Trạng Thái Kích Hoạt
            </li>
            <li onClick={() => this.onClick("status", -1)} className={this.props.sortBy === 'status' && this.props.sortValue===-1 ? 'sort_selected' : ''}>Trạng Thái Ẩn</li>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
