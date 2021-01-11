import React, { Component } from 'react';

export class Edit extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </React.Fragment>

        )
    }
}