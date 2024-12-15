import React, { Component } from 'react'


class Discuss extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.subject === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            subject,
            error } = this.state;

        return(

            <div className="wpo-project-single-item">
                <div className="wpo-project-contact-area">
                    <div className="wpo-contact-title">
                        <h2>Have project in mind? Let's discuss</h2>
                        <p>Get in touch with us to see how we can help you with your project</p>
                    </div>
                    <div className="wpo-contact-form-area">
                        <form method="post" onSubmit={this.subimtHandler} className="form">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-12">
                                    <div className="form-field">
                                        <input className="form-control" value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Your Name"/>
                                        <p>{error.name ? error.name : ''}</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-12">
                                    <div className="form-field">
                                        <input className="form-control" onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Your Email"/>
                                        <p>{error.email ? error.email : ''}</p>
                                    </div>
                                </div>
                                <div className="col col-lg-12 col-12">
                                     <div className="form-field">
                                        <select className="form-control" onChange={this.changeHandler} value={subject} type="text" name="subject">
                                            <option disabled="disabled">Services</option>
                                            <option>Furniture</option>
                                            <option>Complete Interior</option>
                                            <option>Exterior Design</option>
                                        </select>
                                        <p>{error.subject ? error.subject : ''}</p>
                                    </div>
                                </div>
                                <div className="fullwidth col col-lg-12 col-12">
                                    <textarea className="form-control" name="note" id="note"
                                        placeholder="Message..."></textarea>
                                </div>
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn-s4">Send Massege</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default  Discuss;