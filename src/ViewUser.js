import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  //PROFILE LIST
  useEffect(() => {
    axios.get("http://localhost:8002/get-users").then(res => {
      //console.log(res.data.result);
      //console.log("valide: "+res.data.valid);
      //console.log("session: "+res.data.sessionUser.name);
      //console.log("shine: "+res.data.shine);

      setUsers(res.data.result);
      //setIsLoading(false);
      //setError(null);

    }).catch(err => console.log(err.message));
  }, []);

  //DELETE PROFILE
  const deleteUser = (id) => {
    axios.post("http://localhost:8002/delete_user/" + id)
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
              const newUser = users.filter((u) => u.id_user !== id);
              setUsers(newUser);
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


          {/* Main content */}
          <div className="content">
            <div className="row  mb-3">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header" style={{ backgroundColor: '#000099', color: '#ffffff' }}>
                    <h3 className="card-title"><i className="fa fa-eye"></i> CONSULTER UN PROFIL</h3>

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
                        <table id="example1X"
                          className="table table-bordered table-stripedX">
                          <thead style={{ backgroundColor: '#000099', color: '#ffffff' }}>
                            <tr>
                              <th>Libelle</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users &&
                              users.map((user) => (
                                <tr key={user.id_user}>
                                  <td>{user.nom}</td>
                                  <td>
                                    <Link className="btn btn-success btn-sm"
                                      to={`/edit-user/${user.id_user}`}>
                                      <i className="fa fa-edit"></i>
                                    </Link>
                                    <button onClick={() => deleteUser(user.id_user)} className="btn btn-danger btn-sm">
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

export default ViewUser;