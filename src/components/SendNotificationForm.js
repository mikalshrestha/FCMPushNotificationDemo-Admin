import React, { Component } from 'react'
import axios from 'axios'

 class SendNotificationForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              title: '',
              message: '',
              topic: '',
              token: ''
         }

         this.config = {
            headers: {
              'Content-Type': 'application/json'
            },
          };
     }

     changeHandler = (e) => {
         this.setState({[e.target.name]:e.target.value})
     }

     submitHandler = (e) => {
         e.preventDefault()
         console.log(this.state)
         axios.post('http://localhost:8081/send/notification', this.state, this.config)
         .then(reponse => {
             console.log(reponse)
         })
         .catch(error => {
             console.log(error)
         })
     }
     
    render() {
        const {title, message, topic, token} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}> 
                <div style={{float : 'center', marginTop : '50px'}}>
                    <label>Enter Title:</label>
                </div>
                    <div style={{float : 'center', marginTop : '15px'}}>
                        <input 
                        type="text" 
                        name="title" 
                        value={title} 
                        onChange={this.changeHandler}
                        />
                    </div>

                    <div style={{float : 'center', marginTop : '30px'}}>
                    <label>Enter Message:</label>
                </div>
                    <div style={{float : 'center', marginTop : '15px'}}>
                        <input 
                        type="text" 
                        name="message" 
                        value={message} 
                        onChange={this.changeHandler} 
                        />
                    </div>

                    <div style={{float : 'center', marginTop : '30px'}}>
                    <label>Enter Topic:</label>
                </div>
                    <div style={{float : 'center', marginTop : '15px'}}>
                        <input 
                        type="text" 
                        name="topic" 
                        value={topic}
                        onChange={this.changeHandler} 
                        />
                    </div>

                    <div style={{float : 'center', marginTop : '30px'}}>
                    <label>Enter Token:</label>
                </div>
                    <div style={{float : 'center', marginTop : '15px'}}>
                        <input 
                        type="text" 
                        name="token" 
                        value={token} 
                        onChange={this.changeHandler} 
                        />
                    </div>
                    <button 
                    type="submit"
                    style={{float : 'center', marginTop : '30px'}}>
                    Send Notification
                    </button>
                </form>
            </div>
        )
    }
}

export default SendNotificationForm
