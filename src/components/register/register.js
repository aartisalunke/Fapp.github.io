import react from 'react';
function Register(){
    return(
     <>
         <div className="container bg-dark text-white col-5 p-3 my-2 rounded shadow-lg p-3 mb-5 bg-body ">
         <h2 className="text-center">Register</h2>
         <form className="row g-3  d-flex justify-content-center ">
  <div class="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="abc@gmail.com"/>
  </div>
  <div className="col-md-12 pt-3">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-" id="inputPassword4" placeholder="Enter password"/>
  </div>
  <div class="col-12">
    <label for="phoneno" className="form-label">Phone</label>
    <input type="number" className="form-control" id="inputphone" placeholder="+91"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-12 pt-3">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
 
  <div className="col-12  d-flex justify-content-flex start pt-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12 d-flex justify-content-center pt-2">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
     </div>
     </>   
    )
}

export default Register;