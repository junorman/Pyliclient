const Login = () => {
    return ( 
        <div>
            <div class="d-flex half">
    <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-5 py-5">
            <div class="card" style={{border: '5px solid #fc841c'}}>
              <div class="card-body">
                <p class="text-center">
                  <img src="../../dist/img/icon.png" alt="AdminLTE Logo" 
                  class="brand-image img-circle" style={{opacity: '.8', width: '10%'}}/>
                </p>
                  <h3 class="text-center" style={{color: '#fc841c',fontWeight: 'bold'}}>Pyli</h3>
                  <p class="mb-4 text-center">Connectez-vous!</p>
                  <form action="#" method="post">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group first">
                          <label for="fname">Email</label>
                          <input type="text" class="form-control button-border" 
                          placeholder="Saisir l'adresse email" id="fname"/>
                        </div>    
                        </div>    
                      <div class="col-md-12">
                        <div class="form-group first">
                          <label for="lname">Mot de passe</label>
                          <input type="password" class="form-control button-border" placeholder="******" id="lname"/>
                        </div>    
                      </div>
                    </div>
                   
                    <input type="submit" value="Se connecter" class="btn px-5 button-color"/>

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
 
export default Login;