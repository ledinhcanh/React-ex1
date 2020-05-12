import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       keyword : ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    })
  }
  onSearch = () =>{
    this.props.onSearch(this.state.keyword);
  }
  render() {
    var { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group md-form form-sm form-2 pl-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            name="keyword"
            value={keyword}
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary"
            type="button"
            onClick={this.onSearch}
            >
              <span className="fa fa-search mr-2" />
              Tìm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
