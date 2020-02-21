import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group md-form form-sm form-2 pl-0">
                    <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <span className="fa fa-search mr-2" />Tìm
              </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
