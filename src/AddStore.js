import { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from "sweetalert2";

const AddStore = () => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebSite] = useState('');
    const [slogan, setSlogan] = useState('');
    const [phone, setPhone] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('website', website);
        formData.append('slogan', slogan);
        formData.append('phone', phone);
        formData.append('about', about);
        formData.append('image', image);

        axios.post("http://localhost:8002/add-store", formData, {
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
                                    <h1 className="m-0">GESTIONS MAGASINS</h1>
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
                                                        <h3 className="card-title"><i className="fa fa-cart-plus"></i> AJOUTER UN MAGASIN</h3>

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
                                                                                onChange={(e) => {setName(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Email</label>
                                                                                <input type="text" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. Smith"
                                                                                onChange={(e) => {setEmail(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label for="email">Adresse</label>
                                                                                <input type="text" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. john@your-domain.com"
                                                                                onChange={(e) => {setAddress(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label for="email">Siteweb</label>
                                                                                <input type="email" 
                                                                                className="form-control button-border" 
                                                                                placeholder="e.g. john@your-domain.com"
                                                                                onChange={(e) => {setWebSite(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                   
                                                                    <div className="row">
                                                                        <div className="col-md-6">

                                                                            <div className="form-group last mb-3">
                                                                                <label for="password">Slogan</label>
                                                                                <input type="password" 
                                                                                className="form-control button-border" 
                                                                                placeholder="******" 
                                                                                onChange={(e) => {setSlogan(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">

                                                                            <div className="form-group last mb-3">
                                                                                <label for="re-password">Téléphone</label>
                                                                                <input type="password" 
                                                                                className="form-control button-border" 
                                                                                placeholder="******" 
                                                                                onChange={(e) => {setPhone(e.target.value)} } />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group last mb-3">
                                                                                <label for="password">A propos</label>
                                                                                <textarea cols="30" rows="10"className="form-control button-border" 
                                                                                placeholder="******" 
                                                                                onChange={(e) => {setAbout(e.target.value)} }></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group last mb-3">
                                                                                <label for="password">Choisir un logo</label>
                                                                                <input type="file" className="form-control" name="upload_file"
                                                                                    onChange={(e) => setImage(e.target.files[0]) }/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    

                                                                    <button className="btn button-color">
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
 
export default AddStore;