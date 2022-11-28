import React from 'react'

function Form() {
  return (
	
    <div className='container mb-10'>
	<form>
        <h1>FILL THE DETAILS</h1>

    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Name"/>
    </div>
    <br></br>
    <div class="form-group col-md-6">
      <label for="mobile">Mobile</label>
      <input type="number" class="form-control" id="mobile" placeholder="Mobile"/>
    </div>
    <br></br>
    <div class="row">
    <div class="form-group col-md-3">
      <label for="dob">DOB</label>
      <input type="date" class="form-control" id="Dob"/>
    </div>
    
    <div class="form-group col-md-3">
      <label for="blood">Blood</label>
      <input type="text" class="form-control" id="blood"/>
    </div>
  </div>
  <br></br>
  
  <div class="form-group col-md-6">
    <label for="email">E Mail</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="email"/>
  </div>

    <br></br>
    
    <div class="form-group col-md-6">
    <label for="image">Your Image</label>
    <input type="file" class="form-control" id="image"/>
  </div>

  <br></br> 
  <div class="form-group col-md-6">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <br></br> 
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
  )
}

export default Form

