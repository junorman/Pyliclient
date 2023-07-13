const Register = () => {
    return ( 
        <div>
            <div class="d-flex half">
    <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7 py-5">
            <div class="card" style={{border: '5px solid #fc841c'}}>
              <div class="card-body">
                <p class="text-center">
                  <img src="../../dist/img/icon.png" alt="AdminLTE Logo" 
                  class="brand-image img-circle" style={{opacity: '.8', width: '10%'}}/>
                </p>
                  <h3 class="text-center" style={{color: '#fc841', fontWeight: 'bold'}}>Pyli</h3>
                  <p class="mb-4 text-center">Inscrivez-vous!</p>
                  <form action="#" method="post">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group first">
                          <label for="fname">Nom</label>
                          <input type="text" class="form-control button-border" 
                          placeholder="e.g. John" id="fname"/>
                        </div>    
                      </div>
                      <div class="col-md-6">
                        <div class="form-group first">
                          <label for="lname">Prénom</label>
                          <input type="text" class="form-control button-border" 
                          placeholder="e.g. Smith" id="lname"/>
                        </div>    
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group first">
                          <label for="email">Adresse email</label>
                          <input type="email" class="form-control button-border" 
                          placeholder="e.g. john@your-domain.com" id="email"/>
                        </div>    
                      </div>
                      <div class="col-md-6">
                        <div class="form-group first">
                          <label for="email">Numéro</label>
                          <input type="email" class="form-control button-border" 
                          placeholder="e.g. john@your-domain.com" id="email"/>
                        </div>    
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group first">
                          <label for="lname">Pays</label>
                          <select class="form-control button-border">
                            <option></option>
                          </select>
                        </div>    
                      </div>
                      <div class="col-md-6">
                        <div class="form-group first">
                          <label for="lname">Ville</label>
                          <select class="form-control button-border">
                            <option></option>
                          </select>
                        </div>    
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                    
                        <div class="form-group last mb-3">
                          <label for="password">Mot de passe</label>
                          <input type="password" class="form-control button-border" 
                          placeholder="******" id="password"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                    
                        <div class="form-group last mb-3">
                          <label for="re-password">Confirmer le mot de passe</label>
                          <input type="password" class="form-control button-border" 
                          placeholder="******" id="re-password"/>
                        </div>
                      </div>
                    </div>
                    <div class="row row-space">
                      <div class="col-2">
                          <div class="input-group">
                              <label class="label">Genre</label>
                              <div class="p-t-10">
                                  <label class="radio-container m-r-45">Male
                                      <input type="radio" checked="checked" name="gender"/>
                                      <span class="checkmark"></span>
                                  </label>
                                  <label class="radio-container">Female
                                      <input type="radio" name="gender"/>
                                      <span class="checkmark"></span>
                                  </label>
                              </div>
                          </div>
                      </div>
                    </div>
                    <a href="">Avez-vous déjà un compte?</a>
                    <div class="d-flex mb-5 mt-4 align-items-center">
                      <div class="d-flex align-items-center">
                        <input type="checkbox" checked="checked" style={{backgroundColor: '#fc841c'}} />&nbsp;&nbsp;
                      <label class="control  mb-0"><span class="caption">Creating an account means you're okay with our <a href="#">Terms and Conditions</a> and our <a href="#">Privacy Policy</a>.</span>
                        
                      </label>
                    </div>
                    </div>

                    <input type="submit" value="S'inscrire" class="btn px-5 button-color"/>

                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
        </div>
     );
}
 
export default Register;