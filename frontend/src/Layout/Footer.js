import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="sticky-footer bg-white fixed-bottom">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright {(new Date().getFullYear())}</span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer