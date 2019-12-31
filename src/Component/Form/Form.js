import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFormInline,
    MDBAnimation
  } from "mdbreact";
  import Navbar from './../../Component/Drawer/Drawer'

  class FormPage extends React.Component {
    render() {
  return (
    <div>
    <Navbar />
    <MDBContainer center>
      <MDBRow center>
        <MDBCol md="6">
          <form style={{alignItems: 'center'}}>
            <h2 className="grey-text" style={{textAlign:"center"}}>Post Requriment Form</h2>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
            Blood Group :
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ bloodgroup: e.target.value })}>
  <option>Blood Group :</option>
  <option value="A Positive">A Positive </option>
  <option value="B Positive">B Positive</option>
  <option value="O Positive">O Positive</option>
  <option value="A Negitive">A Negitive</option>
  <option value="B Negitive">B Negitive</option>
  <option value="O Negitive">O Negitive</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
No. of Units required : </label>
            <input
              type="Number"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
            Urgency :
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ Urgency: e.target.value })}>
  <option>Urgency :</option>
  <option value="A Positive">Urgent</option>
  <option value="B Positive">Within 5 hours</option>
  <option value="O Positive">Within 12 hours</option>
  <option value="A Negitive">Within 24 hours</option>
  <option value="B Negitive">Within 2 days</option>
  <option value="O Negitive">Within Week</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
            Country :
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ Country: e.target.value })}>
  <option>Country :</option>
  <option value="A Positive">Pakistan</option>
  <option value="B Positive">China</option>
  <option value="A Negitive">United Kingdom</option>
  <option value="B Negitive">United States</option>
  <option value="O Positive">Nepal</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
            State :
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ State: e.target.value })}>
  <option>State :</option>
  <option value="A Positive">Sindh</option>
  <option value="B Positive">Punjab</option>
  <option value="A Negitive">Khyber Pakhtunkhwa</option>
  <option value="B Negitive">Balochistan</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
            City :
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ City: e.target.value })}>
  <option>City :</option>
  <option value="A Positive">Karachi</option>
  <option value="B Positive">Hyderabad</option>
  <option value="A Negitive">Sukkur</option>
  <option value="B Negitive">Mīrpur Khās</option>
  <option value="B Negitive">Mithi</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
Hospital :
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ Hospital: e.target.value })}>
  <option>Hospital :</option>
  <option value="A Positive">Indus Hospital</option>
  <option value="B Positive">Ziauddin Hospital</option>
  <option value="A Negitive">Agha Khan Hospital</option>
  <option value="B Negitive">Liaquat National Hospital</option>
  <option value="O Positive">OMI</option>
  <option value="O Positive">Jinnah Hospital</option>
  <option value="O Positive">Holy Family Hospital</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
Relation with Patient:
            </label>  
            <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
ref={this.dropdown}
onChange={(e) => this.setState({ Relation: e.target.value })}>
  <option>Relation :</option>
  <option value="A Positive">Father</option>
  <option value="B Positive">Mother</option>
  <option value="A Negitive">Son</option>
  <option value="B Negitive">Daughter</option>
  <option value="A Negitive">Aunt</option>
  <option value="A Negitive">Uncle</option>
  <option value="A Negitive">Nephew</option>
  <option value="A Negitive">Niece</option>
  <option value="A Negitive">Friend</option>
  <option value="A Negitive">Neighbour</option>
  <option value="A Negitive">None</option>
</select>
<br />
<label htmlFor="defaultFormContactNameEx" className="grey-text">
Contact No. : </label>
            <input
              type="Number"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
Additional Instructions :
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div >
              <button type="button" class="btn" outline type="submit" style={{color:'white',backgroundColor:'#1b0f49'}}>Post</button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );}
};

export default FormPage;
