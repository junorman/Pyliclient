import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const EditPosts = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [idImage, setIdImage] = useState('');
    const [newPhoto, setNewPhoto] = useState('');
    const [showImage, setShowImage] = useState('');
    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const posts = { title, desc, category };
        
        axios.post("http://localhost:8002/edit-post/"+id, posts, {
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

    //DETAILS POST
    useEffect(() => {
        axios.get("http://localhost:8002/details-post/"+id).then(res => {
        //console.log(res.data.result);
        //console.log("valide: "+res.data.valid);
        //console.log("session: "+res.data.sessionUser.name);
        //console.log("shine: "+res.data.shine);

        setTitle(res.data.result[0].titre_post);
        setCategory(res.data.result[0].id_categorie);
        setDesc(res.data.result[0].description_post);
        
        //setIsLoading(false);
        //setError(null);

        }).catch(err => console.log(err.message));
    }, []);

    //FILES POST LIST
    useEffect(() => {
        axios.get("http://localhost:8002/get-posts-files/"+id).then(res => {
        //console.log(res.data.result);
        //console.log("valide: "+res.data.valid);
        //console.log("session: "+res.data.sessionUser.name);
        //console.log("shine: "+res.data.shine);

        setImage(res.data.result);
        //setIsLoading(false);
        //setError(null);

        }).catch(err => console.log(err.message));
    }, []);

    //DELETE IMAGE
  const deleteImage = (id) => {
    axios.post("http://localhost:8002/delete-image/" + id)
      .then(res => {
        if (res.data.valid == true) {
          //console.log(res.data.message);
          Swal.fire({
            title: 'Es-tu sûr?',
            text: "Souhaitez-vous supprimer cette ligne? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimé!'
          }).then((result) => {
            if (result.isConfirmed) {
              const newImage = image.filter((i) => i.id_image !== id);
              setImage(newImage);
              Swal.fire(
                'Suppression!',
                'Votre ligne a été supprimée.',
                'success'
              )
            }
          })
        } else {
          console.log("une erreur est survenue");
        }
      })
      .catch(err => console.log(err));
    
  }

  //UPDATE PROFILE
  const updateImage = (e) => {

    e.preventDefault();
    const formData = new FormData();
    formData.append('image', newPhoto);
    console.log(idImage);
    console.log(newPhoto);
    axios.post("http://localhost:8002/edit-image/"+idImage, formData, {
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

  //SHOW AND GET DATA IN MODAL
  const showDetails = (e, i) => {
    console.log(e+" "+i);
    setIdImage(e);
    setShowImage(i);
  }   

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
                                    <h1 className="m-0">GESTIONS POSTS</h1>
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
                                                        <h3 className="card-title"><i className="fas fa-pen"></i> EDITER UN POST</h3>

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
                                                                                <label >Titre</label>
                                                                                <input type="text"
                                                                                    value={title}
                                                                                    className="form-control button-border"
                                                                                    placeholder="Titre..."
                                                                                    onChange={(e) => { setTitle(e.target.value) }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Categories</label>
                                                                                <select className="form-control button-border"
                                                                                    value={category}
                                                                                    onChange={(e) => { setCategory(e.target.value) }}>
                                                                                    <option value="1">Mémoire</option>
                                                                                    <option value="2">Roman</option>
                                                                                    <option value="3">Cahier de charge</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group last mb-3">
                                                                                <label for="password">Descriptions</label>
                                                                                <textarea cols="30" rows="5" className="form-control button-border"
                                                                                    placeholder="Ecrivez quelque chose..."
                                                                                    value={desc}
                                                                                    onChange={(e) => { setDesc(e.target.value) }}></textarea>
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
                                                    {/* /.card-body */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.col-md-6 */}

                        <div className="row  mb-3">
              <div className="col-md-12">

                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body" style={{ border: '2px solid #000099' }}>
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered">
                          <thead style={{ backgroundColor: '#000099', color: '#ffffff' }}>
                            <tr>
                              <th scope="col">Image</th>
                              <th scope="col">Rang</th>
                              <th scope="col">Date</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {image &&
                              image.map((img) => (
                                <tr key={img.id_image}>
                                  <th scope="row">{img.photo}</th>
                                  <td>{img.rang}</td>
                                  <td>{img.date_creation}</td>
                                  <td>
                                    <button onClick={() => showDetails(img.id_image, img.photo)} 
                                    className="btn btn-success btn-sm" data-toggle="modal" 
                                    data-target="#exampleModal">
                                        <i className="fa fa-edit"></i>
                                    </button>
                                    <button onClick={() => deleteImage(img.id_image)} className="btn btn-danger btn-sm">
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>

                        {/* /.col-md-6 */}
                    </div>
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
                        <i className="fa fa-image"></i> Editer l'image
                        </h1>
                        <button type="button" class=" btn btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className="form-control" value={idImage} 
                        />
                        <p>{showImage}</p>
                        <input type="file" className="form-control" name="upload_file"
                        onChange={(e) => setNewPhoto(e.target.files[0]) }/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        X Fermer
                        </button>
                        <button onClick={updateImage} type="button" class="btn button-color">
                        <i className="fa fa-edit"></i> Modifier
                        </button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default EditPosts;