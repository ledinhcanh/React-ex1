import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                        <p className="text-center"><img alt="iphone6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNNoAYPrhThohF3cwJcO-Qpu1Lqqv31mcrcMUt0Jr_gilm4U2&s" /></p>
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                        <p>
                            <a href="/#" className="btn btn-primary">Action</a>
                            <a href="/#" className="btn btn-success ml-2">Action</a>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p className="text-center"><img alt="iphone6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNNoAYPrhThohF3cwJcO-Qpu1Lqqv31mcrcMUt0Jr_gilm4U2&s" /></p>
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                        <p>
                            <a href="/#" className="btn btn-primary">Action</a>
                            <a href="/#" className="btn btn-success ml-2">Action</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
