import React, { Component } from 'react';
import axios from 'axios';

export class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product_code: props.product.product_code,
            product_name: props.product.product_name,
            standard_cost: props.product.standard_cost
        }

        this.save = this.save.bind(this)
        this.onChangeProductCode = this.onChangeProductCode.bind(this)
        this.onChangeProductName = this.onChangeProductName.bind(this)
        this.onChangeStandardCost = this.onChangeStandardCost.bind(this)
    }
    onChangeProductCode = event => {
        this.setState({ first_name: event.target.value })
    }

    onChangeProductName = event => {
        this.setState({ last_name: event.target.value })
    }

    onChangeStandardCost = event => {
        this.setState({ company: event.target.value })
    }
    save() {
        axios
            .put('/products/' + this.props.product.id,
                {
                    changes: {
                        product_code: this.state.product_code,
                        product_name: this.state.product_name,
                        standard_cost: this.state.standard_cost
                    }
                })
            .then(cust => { console.log(cust.data) })
    }
    render() {
        return (
            <div>
                <div className="mb-3">
                    <label className="form-label">Product Code</label>
                    <input type="text" className="form-control" id="product_code" placeholder="Product Code" defaultValue={this.state.product_code}
                        onChange={this.onChangeProductCode} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="product_name" placeholder="Product Name" defaultValue={this.state.product_name}
                        onChange={this.onChangeProductName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Standard Cost</label>
                    <input type="text" className="form-control" id="standard_cost" placeholder="standard Cost" defaultValue={this.state.standard_cost}
                        onChange={this.onChangeStandardCost} />
                </div>
                <div className="mb-3">
                    <button onClick={this.save} type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        )
    }
}