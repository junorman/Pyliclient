import { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from "sweetalert2";

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState([
        {
            name: "photo1.jpg"
        },
        {
            name: "photo2.jpg"
        },
        {
            name: "photo3.jpg"
        },
    ]);
    var images = [];
    var imgArray = [];
    const [selectedImages, setSelectedImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('category', category);
        //formData.append('image', image);

        Array.from(image).forEach(item => {
            formData.append('image', item);
            //console.log(item);
          });

        axios.post("http://localhost:8002/add-post", formData, {
            headers: { 'Authorization': localStorage.getItem('token') }
        }).then(res => {
            if (res.data.valid == true) {
                //console.log(res.data.message);
                /*Swal.fire({
                    icon: 'success',
                    title: 'Formidable',
                    text: res.data.message,
                })*/
            } else {
                console.log("une erreur est survenue");
            }
        }).catch(err => console.log(err));


    }

    const onSelectFiles = (e) => {

        setImage(e.target.files);

        //let newData = { ...file, secondName: 'Fogerty', test: 'file'};
        Array.from(e.target.files).forEach(item => {
            console.log("My data2");
            images.push(item);
            console.log(images);
        });

        setPhoto((previousImages) => previousImages.concat(images));
        console.log("Table images");
        console.log(images);

        imgArray = e.target.files;
        const selectedFiles = e.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            console.log("OU");
            console.log(file);
            return { url: URL.createObjectURL(file), name: file.name };
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };

    const deleteById = (id, index) => {
        console.log("xx==" + id + ":" + index);
        setSelectedImages(selectedImages.filter((e) => e.url !== id));
        setImage(photo.filter((e) => e.name !== index));
        setPhoto(photo.filter((e) => e.name !== index));
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
                                                        <h3 className="card-title"><i className="fas fa-pen"></i> AJOUTER UN POST</h3>

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
                                                                                    className="form-control button-border"
                                                                                    placeholder="Titre..."
                                                                                    onChange={(e) => { setTitle(e.target.value) }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group first">
                                                                                <label >Categories</label>
                                                                                <select className="form-control button-border"
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
                                                                                    onChange={(e) => { setDesc(e.target.value) }}></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">

                                                                        <div className="col-md-6">
                                                                            <div className="form-group last mb-3">
                                                                                <label for="password">Uploader un ou des fichier(s)</label>
                                                                                <input multiple type="file" className="form-control" name="upload_file"
                                                                                    onChange={onSelectFiles} />
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

                                                <div className="row">
                                                                        {selectedImages &&
                                                                            selectedImages.map((image, index) => {
                                                                                return (
                                                                                    <div key={image} class="col-md-6 col-lg-4">
                                                                                        <div class="card my-3">
                                                                                            <img src={image.url} alt="upload" style={{ width: '155px', height: '100px' }} />
                                                                                            <div class="card-body">
                                                                                                <p class="card-text" style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center' }}>

                                                                                                    {image.name && image.name.lenght > 22 ? image.name : image.name.substring(0, 22)} ({index + 1})
                                                                                                </p>
                                                                                                <button className="btn btn-sm btn-danger" onClick={() => deleteById(image.url, image.name)}>
                                                                                                    <i className="fa fa-trash"></i>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}

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

export default AddPost;