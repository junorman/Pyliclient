import { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from "sweetalert2";

const AddUser = () => {
    const [last_name, setLastName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [pass, setPass] = useState('');
    const [confirm_pass, setConfirmPass] = useState('');
    const [gender, setGender] = useState('');
    const [policy, setPolicy] = useState(true);
    const [isValid, setIsValid] = useState('');

    const handleChange = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
          } else {
            console.log('⛔️ Checkbox is NOT checked');
          }
          setPolicy(current => !current);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { last_name, first_name, email, phone, 
            country, city, pass, confirm_pass, gender, policy}

            axios.post("http://localhost:8002/add-user", user, {
                headers: { 'Authorization': localStorage.getItem('token') }
            }).then(res => {
                if (res.data.valid == true) {
                    //console.log(res.data.message);
                    Swal.fire({
                        icon: 'success',
                        title: 'Formidable',
                        text: res.data.message,
                      })
                } else {
                    console.log("une erreur est survenue");
                }
            }).catch(err => console.log(err));
       
            
    }
    return (
        <div>
            <div className="wrapper">

                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{ backgroundColor: '#fc841c' }}>
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-font" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="../../index.html" className="nav-link nav-font">Accueil</a>
                        </li>
                    </ul>

                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">


                        <li className="nav-item dropdown">
                            <a className="nav-link nav-font" data-toggle="dropdown" href="#">
                                <i className="fas fa-comments"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-font" data-toggle="dropdown" href="#">
                                <i className="far fa-bell"></i>
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2"></i> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2"></i> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">

                            <a href="#" className="navbar-brand" data-toggle="dropdown">
                                <img src="dist/img/user1-128x128.jpg" alt="AdminLTE Logo" className="brand-image img-circle" style={{ width: '20px' }} />
                                <span className="brand-text nav-fonth">John wick</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div className="dropdown-divider"></div>
                                <a href="pages/layout/profil.html" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2"></i> Profil
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2"></i> Paramètres
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-lock mr-2"></i> Deconnexion
                                </a>
                            </div>

                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}

                <SideBar />

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">GESTIONS UTILISATEURS</h1>
                                </div>
                                <div className="col-sm-6">

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="content">
                        <div className="row  mb-3">
                            <div className="col-sm-12">
                                <br />
                                <div className="d-flex half">
                                    <div className="container">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-md-12">

                                                <div className="card card-default">
                                                    <div className="card-header" style={{ backgroundColor: '#000099', color: '#ffffff' }}>
                                                        <h3 className="card-title"><i className="fa fa-user-plus"></i> AJOUTER UN UTILISATEUR</h3>

                                                        <div className="card-tools">
                                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* /.card-header */}

                                                    <div className="card-body" style={{ border: '2px solid #000099' }}>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <form onSubmit={handleSubmit}>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Nom</label>
                                                                                <input type="text" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. John" 
                                                                                onChange={(e) => {setLastName(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Prénom</label>
                                                                                <input type="text" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. Smith"
                                                                                onChange={(e) => {setFirstName(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label for="email">Adresse email</label>
                                                                                <input type="text" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. john@your-domain.com"
                                                                                onChange={(e) => {setEmail(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label for="email">Numéro</label>
                                                                                <input type="email" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. john@your-domain.com"
                                                                                onChange={(e) => {setPhone(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Pays</label>
                                                                                <select className="form-control button-border"
                                                                                value={country}
                                                                                onChange={(e) => {setCountry(e.target.value)} }>
                                                                                    <option value="1">Fance</option>
                                                                                    <option value="2">USA</option>
                                                                                    <option value="3">Italie</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Ville</label>
                                                                                <select className="form-control button-border"
                                                                                value={city}
                                                                                onChange={(e) => {setCity(e.target.value)} }>
                                                                                    <option value="1">Paris</option>
                                                                                    <option value="2">Newyork</option>
                                                                                    <option value="3">Rome</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">

                                                                            <div className="form-group last mb-3">
                                                                                <label for="password">Mot de passe</label>
                                                                                <input type="password" 
                                                                                className="form-control button-border" 
                                                                                placeholder="******" 
                                                                                onChange={(e) => {setPass(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">

                                                                            <div className="form-group last mb-3">
                                                                                <label for="re-password">Confirmer le mot de passe</label>
                                                                                <input type="password" 
                                                                                className="form-control button-border" 
                                                                                placeholder="******" 
                                                                                onChange={(e) => {setConfirmPass(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row row-space">
                                                                        <div className="col-2">
                                                                            <div className="input-group">
                                                                                <label className="label">Genre</label>
                                                                                <div className="p-t-10">
                                                                                    <label className="radio-container m-r-45">Male
                                                                                        <input type="radio" 
                                                                                        name="gender" 
                                                                                        value="M"
                                                                                        onChange={(e) => {setGender(e.target.value)} } />
                                                                                        <span className="checkmark"></span>
                                                                                    </label>
                                                                                    <label className="radio-container">Female
                                                                                        <input type="radio"
                                                                                        name="gender"
                                                                                        value="F"
                                                                                        onChange={(e) => {setGender(e.target.value)} } />
                                                                                        <span className="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a href="">Avez-vous déjà un compte?</a>
                                                                    <div className="d-flex mb-5 mt-4 align-items-center">
                                                                        <div className="d-flex align-items-center">
                                                                            <input type="checkbox" 
                                                                            name="gender"
                                                                            value={policy}
                                                                            style={{ backgroundColor: '#fc841c' }}
                                                                            onChange={handleChange} />&nbsp;&nbsp;
                                                                            <label className="control  mb-0"><span className="caption">Creating an account means you're okay with our <a href="#">Terms and Conditions</a> and our <a href="#">Privacy Policy</a>.</span>

                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                    <button disabled={!policy} className="btn button-color">
                                                                        <i className="fa fa-check"></i> Enregistrer
                                                                    </button>

                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* /.card-body */}
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.col-md-6 */}

                        {/* /.col-md-6 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

        </div>
    );
}

export default AddUser;