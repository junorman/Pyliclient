import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const DetailsUser = () => {

    const [last_name, setLastName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [pass, setPass]= useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [gender, setGender] = useState('');
    const [isValid, setIsValid] = useState('');
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [image, setImage] = useState('');

    const handleSubmitChangeProfile = (e) => {
        e.preventDefault();       
        const formData = new FormData();
        formData.append('image', image);

        axios.post("http://localhost:8002/change-profile/"+id, formData,
        {
            headers: {'Authorization': localStorage.getItem('token') }
        })
        .then(res => { 
            if (res.data.valid == true) {
                console.log(res.data.message);
                /*Swal.fire({
                    title: 'Es-tu sûr?',
                    text: "Souhaitez-vous modifier cette ligne? ",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oui, modifié!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Modification!',
                        'Votre ligne a été modifiée.',
                        'success'
                      )
                    }
                  }) */                   
            } else {
                console.log("une erreur est survenue");
            }
        })
        .catch(err =>  console.log(err));
    }

    const handleSubmitChangePass = (e) => {
        e.preventDefault();
        const password = { pass }

        axios.post("http://localhost:8002/edit-pass/" + id, password, {
            headers: { 'Authorization': localStorage.getItem('token') }
        }).then(res => {
            if (res.data.valid == true) {
                //console.log(res.data.message);
                Swal.fire({
                    title: 'Es-tu sûr?',
                    text: "Souhaitez-vous modifier cette ligne? ",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oui, modifié!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Modification!',
                            'Votre ligne a été modifiée.',
                            'success'
                        )
                    }
                })
            } else {
                console.log("une erreur est survenue");
            }
        }).catch(err => console.log(err));
    }
    
    const handleSubmitChangeEmail = (e) => {
        e.preventDefault();
        const mail = { email }

        axios.post("http://localhost:8002/edit-email/" + id, mail, {
            headers: { 'Authorization': localStorage.getItem('token') }
        }).then(res => {
            if (res.data.valid == true) {
                //console.log(res.data.message);
                Swal.fire({
                    title: 'Es-tu sûr?',
                    text: "Souhaitez-vous modifier cette ligne? ",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oui, modifié!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Modification!',
                            'Votre ligne a été modifiée.',
                            'success'
                        )
                    }
                })
            } else {
                console.log("une erreur est survenue");
            }
        }).catch(err => console.log(err));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            last_name, first_name, phone,
            country, city, gender
        }

        axios.post("http://localhost:8002/edit-user/" + id, user, {
            headers: { 'Authorization': localStorage.getItem('token') }
        }).then(res => {
            if (res.data.valid == true) {
                //console.log(res.data.message);
                Swal.fire({
                    title: 'Es-tu sûr?',
                    text: "Souhaitez-vous modifier cette ligne? ",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oui, modifié!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Modification!',
                            'Votre ligne a été modifiée.',
                            'success'
                        )
                    }
                })
            } else {
                console.log("une erreur est survenue");
            }
        }).catch(err => console.log(err));
    }

    const handleGenderChange = (e) => {
        console.log(setGender(e.target.value));
    };

    const handleCountryChange = (e) => {
        console.log(setCountry(e.target.value));
    };

    const handleCityChange = (e) => {
        console.log(setCity(e.target.value));
    };

    //DETAILS USER
    useEffect(() => {
        axios.get("http://localhost:8002/details-user/" + id).then(res => {
            //console.log(res.data.result);
            //console.log("valide: "+res.data.valid);
            //console.log("session: "+res.data.sessionUser.name);
            //console.log("shine: "+res.data.shine);

            setLastName(res.data.result[0].nom);
            setFirstName(res.data.result[0].prenom);
            setPhone(res.data.result[0].telephone);
            setCountry(res.data.result[0].id_pays);
            setCity(res.data.result[0].id_ville);
            setGender(res.data.result[0].genre);

            //setIsLoading(false);
            //setError(null);

        }).catch(err => console.log(err.message));
    }, []);

    return (
        <div class="hold-transition sidebar-mini">
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
                                <img src="../../dist/img/user1-128x128.jpg" alt="AdminLTE Logo" className="brand-image img-circle" style={{ width: '20px' }} />
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
                                    <h1 className="m-0">DETAILS UTILISATEURS</h1>
                                </div>
                                <div className="col-sm-6">

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">

                                    {/* Profile Image */}
                                    <div className="card card-primary card-outline">
                                        <div className="card-body box-profile">
                                            <div className="text-center">
                                                <img className="profile-user-img img-fluid img-circle"
                                                    src="../../dist/img/user4-128x128.jpg"
                                                    alt="User profile picture" />
                                            </div>

                                            <h3 className="profile-username text-center">{last_name} {first_name}</h3>

                                            <p className="text-muted text-center">Software Engineer</p>

                                            <ul className="list-group list-group-unbordered mb-3">
                                                <li className="list-group-item">
                                                    <b>Followers</b> <a className="float-right">1,322</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Following</b> <a className="float-right">543</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Friends</b> <a className="float-right">13,287</a>
                                                </li>
                                            </ul>

                                            <a data-toggle="modal" data-target="#exampleModal" className="btn btn-primary btn-block">
                                                <b>
                                                    <i className="fa fa-image"></i> Modifier le profil
                                                </b>
                                            </a>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}

                                    {/* About Me Box */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">A propos</h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <strong><i className="fas fa-book mr-1"></i> Education</strong>

                                            <p className="text-muted">
                                                B.S. in Computer Science from the University of Tennessee at Knoxville
                                            </p>

                                            <hr />

                                            <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>

                                            <p className="text-muted">Malibu, California</p>

                                            <hr />

                                            <strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>

                                            <p className="text-muted">
                                                <span className="tag tag-danger">UI Design</span>
                                                <span className="tag tag-success">Coding</span>
                                                <span className="tag tag-info">Javascript</span>
                                                <span className="tag tag-warning">PHP</span>
                                                <span className="tag tag-primary">Node.js</span>
                                            </p>

                                            <hr />

                                            <strong><i className="far fa-file-alt mr-1"></i> Notes</strong>

                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-header p-2">
                                            <ul className="nav nav-pills">
                                                <li className="nav-item"><a className="nav-link active" href="#settings" data-toggle="tab">Settings</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#activity" data-toggle="tab">Activity</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                            </ul>
                                        </div>{/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="active tab-pane" id="settings">
                                                <div className="d-flex half">
                                    <div className="container">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-md-12">
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
                                                                        value={last_name}
                                                                        onChange={(e) => {setLastName(e.target.value)} } />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group first">
                                                                        <label >Prénom</label>
                                                                        <input type="text" 
                                                                        className="form-control button-border" 
                                                                        placeholder="e.g. Smith"
                                                                        value={first_name}
                                                                        onChange={(e) => {setFirstName(e.target.value)} } />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group first">
                                                                        <label for="email">Numéro</label>
                                                                        <input type="text" 
                                                                        className="form-control button-border" 
                                                                        placeholder="e.g. john@your-domain.com"
                                                                        value={phone}
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
                                                                        onChange={handleCountryChange}>
                                                                            <option checked={country == "1"} value="1">Fance</option>
                                                                            <option checked={country == "2"} value="2">USA</option>
                                                                            <option checked={country == "3"} value="3">Italie</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group first">
                                                                        <label >Ville</label>
                                                                        <select className="form-control button-border"
                                                                        value={city}
                                                                        onChange={handleCityChange}>
                                                                            <option checked={country == "1"} value="1">Paris</option>
                                                                            <option checked={country == "2"} value="2">Newyork</option>
                                                                            <option checked={country == "3"} value="3">Rome</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row row-space">
                                                                <div className="col-2">
                                                                    <div className="input-group">
                                                                        <label className="label">Genre</label>
                                                                        <div className="p-t-10">
                                                                            <label className="radio-container m-r-45">Male                                                                                      
                                                                                <input 
                                                                                checked={gender == "M"}
                                                                                type="radio" 
                                                                                name="gender" 
                                                                                value="M"
                                                                                onChange={handleGenderChange} />
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                            <label className="radio-container">Female
                                                                                <input 
                                                                                checked={gender == "F"} 
                                                                                type="radio"
                                                                                name="gender"
                                                                                value="F"
                                                                                onChange={handleGenderChange} /> 
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    

                                                            <button className="btn button-color">
                                                                <i className="fa fa-edit"></i> Modifier
                                                            </button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><br /><br />
                                        <h6><i className="fa fa-shield"></i> Changer de mot de passe</h6>
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <form onSubmit={handleSubmitChangePass}>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group first">
                                                                        <label >Nouveau mot de passe</label>
                                                                        <input type="text" 
                                                                        className="form-control button-border" 
                                                                        placeholder="*********" 
                                                                        onChange={(e) => {setPass(e.target.value)} } />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group first">
                                                                        <label >Confirmer le mot de passe</label>
                                                                        <input type="text" 
                                                                        className="form-control button-border" 
                                                                        placeholder="***********"
                                                                        onChange={(e) => {setConfirmPass(e.target.value)} } />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                          
                                                            <button className="btn button-color">
                                                                <i className="fa fa-key"></i> Changer
                                                            </button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br /><br />
                                        <h6><i className="fa fa-envelope"></i> Changer d'adresse email</h6>
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <form onSubmit={handleSubmitChangeEmail}>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group first">
                                                                        <label >Nouvelle adresse email</label>
                                                                        <input type="text" 
                                                                        className="form-control button-border" 
                                                                        placeholder="*********" 
                                                                        onChange={(e) => {setEmail(e.target.value)} } />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group first">
                                                                        <label >Confirmer l'adresse email</label>
                                                                        <input type="text" 
                                                                        className="form-control button-border" 
                                                                        placeholder="***********"
                                                                        onChange={(e) => {setConfirmEmail(e.target.value)} } />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                          
                                                            <button className="btn button-color">
                                                                <i className="fa fa-send"></i> Changer
                                                            </button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                </div>
                                                <div className="tab-pane" id="activity">

                                                </div>
                                                {/* /.tab-pane */}
                                                <div className="tab-pane" id="timeline">

                                                </div>
                                            </div>
                                            {/* /.tab-content */}
                                        </div>{/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.row */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header" style={{backgroundColor: '#000099', color: '#ffffff'}}>
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <i className="fa fa-user"></i> Editer le profil
                        </h1>
                        <button type="button" class=" btn btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div className="row">
                        <div className="col-md-12">
                        <form onSubmit={handleSubmitChangeProfile}>
                            <div className="mb-3">
                                <label htmlFor="">Sélectionner une image</label>
                                <input multiple type="file" className="form-control" name="upload_file"
                                onChange={(e) => setImage(e.target.files[0]) }/>
                            </div>
                            <button type="submit" class="btn btn-primary">Valider</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        X Fermer
                        </button>
                        <button type="button" class="btn button-color">
                        <i className="fa fa-edit"></i> Modifier
                        </button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DetailsUser;