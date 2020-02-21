import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Thêm Công Việc<span className="fa fa-times-circle float-right close"></span></div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required">
                            <option value={1}>Kích Hoạt</option>
                            <option value={0}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
              <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
