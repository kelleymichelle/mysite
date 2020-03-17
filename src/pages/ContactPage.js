import React from 'react'
import emailjs from 'emailjs-com';
import Hero from '../components/Hero'
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// require('dotenv').config();
// const template = process.env.REACT_APP_TEMPLATE
// const userId = process.env.REACT_APP_USER_ID
// const email2 = process.env.REACT_APP_EMAIL


export default class ContactPage extends React.Component {
   
      state = {
         name: '',
         email: '',
         message: '',
         disabled: false,
         emailSent: null,
      }
   
   handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
         [name]: value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);

      // this.setState({
      //    disabled: true
      // });

      emailjs.sendForm('gmailjvullo01_gmail_com', 'template_UF9U4qGL', event.target, 'user_AsE6AZwm292eK5AlSgzrH')
         .then((result) => {
            console.log(result.text);
            this.setState({
               emailSent: true,
               disabled: true,
               name: '',
               email: '',
               message: ''
            })
         }, (error) => {
            console.log(error.text);
            this.setState({
               emailSent: false
            })
         });
   }

   render() {
      return (
         <div className='hero-contact' style={{color: '#212850'}}>
            <Hero title={this.props.title} />
         <Content>
            <Form onSubmit={this.handleSubmit}>
               <Form.Group>
                  <Form.Label htmlFor="full-name" style={{color: '#212850'}}>Full Name</Form.Label>
                  <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
               </Form.Group>
               <Form.Group>
                  <Form.Label htmlFor="email" style={{color: '#212850'}}>Email Address</Form.Label>
                  <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
               </Form.Group>
               <Form.Group>
                  <Form.Label htmlFor="message" style={{color: '#212850'}}>Please Leave a Message</Form.Label>
                  <Form.Control id="message" name="message" as="textarea"rows="5" value={this.state.message} onChange={this.handleChange} />
               </Form.Group>
               <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                     Send
               </Button>
               {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
               {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
            </Form>
         </Content>
      </div>
      )
   }
}
