import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-2">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contect_div">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter you name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-outline-primary">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;