import React from "react";
import './form.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Enter your Password";
      }
  
      if (typeof fields["password"] !== "undefined") {
        if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
          !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) &&
          !(fields["password"].match(/([0-9])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "*Weak";
          document.getElementById("errp").style.color="red";
        }
        else if (
            !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
            !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) 
          ) {
            formIsValid = false;
            errors["password"] = "*Medium";
            document.getElementById("errp").style.color="yellow";
          }
         else  {
            formIsValid = false;
            errors["password"] = "*Strong";
            document.getElementById("errp").style.color="green";
          }
    }
    
      this.setState({
        errors: errors
      });
      return formIsValid;
      
    }



render() {
  return (
    <center>
      <h1>Dynamic form</h1>
        
  <div id="main-registration-container">
   <div id="register">
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <div className="inside">
            
                <label>Enter your UserName</label><br></br><br></br>
                <input type="text" name="username" className="ap" value={this.state.fields.username} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.username}</div>
                <br></br><label>Enter your Email ID       </label><br></br><br></br>
                <input type="text" name="emailid" className="ap" value={this.state.fields.emailid} onChange={this.handleChange}  />
                <div className="errorMsg">{this.state.errors.emailid}</div>
                <br></br><label>Enter your Password   </label><br></br><br></br>
                <input type="password" name="password" className="ap" value={this.state.fields.password} onChange={this.handleChange} />
                <div className="errorMsg" id="errp">{this.state.errors.password}</div>
                <br></br><input type="submit" className="button"  value="Register"/>
            </div>
        
            </form>
  </div>
</div>
    </center>

    );
}


}

export default RegisterForm

