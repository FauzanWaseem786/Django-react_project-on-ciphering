import React, { Component } from 'react'
import axios from 'axios';
var key=0;
class home_page extends Component {
    state = {
        id:null,
        message: null,
        return_message:[],
    }
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/id_provider/`)
          .then(res => {  
            this.setState({
              id: res.data,
              });
            key=this.state.id;
          })
    }  
   handleSubmit_c = (event) => {
      event.preventDefault();
      const user = {
           message:this.state.message,
           Mid:this.state.id
      };
        
      axios.post(`http://127.0.0.1:8000/ciphering/`, user)
          .then(res => {
             console.log(res.data);
          })

      setTimeout(() => {
          axios.get(`http://127.0.0.1:8000/api/${key}/`)
          .then(res => { 
             this.setState({
             return_message: res.data,
             });
          })


          axios.get(`http://127.0.0.1:8000/id_provider/`)
             .then(res => {  
              this.setState({
                id: res.data,
                });
              key=this.state.id;
             })
      
      }, 2000)
  }    
       
   
    handleSubmit_d = (event) => {
      event.preventDefault();
      const user = {
           message:this.state.message,
           Mid:this.state.id
      };
        
      axios.post(`http://127.0.0.1:8000/deciphering/`, user)
          .then(res => {
             console.log(res.data);
          })

      setTimeout(() => {
          axios.get(`http://127.0.0.1:8000/api/${key}/`)
          .then(res => { 
             this.setState({
             return_message: res.data,
             });
          })


          axios.get(`http://127.0.0.1:8000/id_provider/`)
             .then(res => {  
              this.setState({
                id: res.data,
                });
              key=this.state.id;
             })
      
      }, 1000)
   } 
    handleChange = (event) => {     
      this.setState({
          message: event.target.value,
          id:key,
      });
    }

  render() {
    
    //const msglist=this.state.return_message.map(msg => {
    //  return(
    //          <p key={msg.Mid}>{msg.message}</p>
    //        )
    //}) ;
    const msglist=this.state.return_message;
    return (
    <div className="container mn">
      <div class="row fm">
    
        <form class="col s12 l8 m9 container"  onSubmit={(event) => this.handleSubmit_c(event)}>
        <span class="flow-text white-text">Enter the message to be ciphered</span>
        
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix white-text">mode_edit</i>

              <textarea id="icon_prefix2"  class="materialize-textarea white-text" maxlength = "200" placeholder="Type the message to be ciphered" onChange={(event) => this.handleChange(event)}></textarea>
             
            </div>
          </div>
            <button class="waves-effect waves-light btn-small" type="submit" >   
            cipher!
             <i class="material-icons right">send</i>
            </button>     
          </form>
         <div class="col s12 l4 m3 materialboxed">
             <span class="flow-text white-text">Processed message:  </span>
             <p class="white-text cip">{msglist.message}</p>
             
         </div>
        </div>
        <div class="row fm">
          <span  class="flow-text white-text">Enter the message to be deciphered</span>
          <form class="col s12 container l8  m9"  onSubmit={(event) => this.handleSubmit_d(event)}>
          
            <div class="row">
              <div class="input-field col s12 ">
                <i class="material-icons prefix white-text">mode_edit</i>
                <input class="white-text" htmltype="submit" maxlength = "200" placeholder="Type the message to be deciphered" onChange={(event) => this.handleChange(event)}></input>
               
              </div>
            </div>
             <button class="waves-effect waves-light btn-small" type="submit" >   
                  decipher!
              <i class="material-icons right">send</i>
             </button>     
          </form>
          
      </div>
         
    </div>
 	)
 }
}
 export default home_page;
   