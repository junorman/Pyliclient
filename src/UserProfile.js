const UserProfile = () => {
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

                {/* Main Sidebar Container */}
                <aside class="main-sidebar sidebar-dark-primary elevation-4X" style={{backgroundColor:'#fc841c'}}>
    {/* Brand Logo */}
    <a href="admin.html" class="brand-link">
      <img src="../../dist/img/logo.png" alt="AdminLTE Logo" class="brand-imagge img-circle" style={{border:'3px solid #ffffff', width: '100px', height: '100px'}}/>
      <span class="brand-text" style={{color:'#ffffff', fontWeight:'bold', fontSize: '30px'}}>Pyli</span>
    </a>

    {/* Sidebar */}
    <div class="sidebar" style={{background:'#000099'}}>
      {/* Sidebar user panel (optional) */}
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2X" alt="User Image"/>
        </div>
        <div class="info">
          <a href="user-profile.html" class="d-block" style={{color:'#ffffff', fontWeight:'bold',fontSize: '18px'}}>Alexander Pierce</a>
        </div>
      </div>

     

      {/* Sidebar Menu */}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
        
          
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-user"></i>
              <p>
                PROFILS
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="add-profile.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajouter</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="view-profile.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fa fa-handshake"></i>
              <p>
                AFFECTATIONS
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fonctionnalités</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/top-nav-sidebar.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Actions systèmes</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-users"></i>
              <p>
               UTILISATEURS
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajouter</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-shopping-cart"></i>
              <p>
                MAGASINS
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajouter</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-pen"></i>
              <p>
                POSTS
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajouter</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-file"></i>
              <p>
                FICHIERS
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-th-large"></i>
              <p>
                CATEGORIES
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajouter</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" style={{color: '#ffffff'}}>
              <i class="nav-icon fas fa-dollar-sign"></i>
              <p>
                PAIEMENTS
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajouter</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link" style={{color:'#ffffff'}}>
                  <i class="far fa-circle nav-icon"></i>
                  <p>Consulter</p>
                </a>
              </li>
            </ul>
          </li>
          
          {/* <li class="nav-header">EXAMPLES</li> */}
          <li class="nav-header" style={{color:'#ffffff', fontWeight:'bold', fontSize: '18px'}}>COMMUNICATIONS</li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link" style={{color:'#ffffff'}}>
              <i class="nav-icon fas fa-pen"></i>
              <p>
                POSTS
                <span class="badge badge-danger right">2</span>
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link" style={{color:'#ffffff'}}>
              <i class="nav-icon fas fa-calendar-alt"></i>
              <p>
                ABONNEMENTS
                <span class="badge badge-danger right">2</span>
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link" style={{color:'#ffffff'}}>
              <i class="nav-icon fas fa-bell"></i>
              <p>
                NOTIFICATIONS
                <span class="badge badge-danger right">2</span>
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link" style={{color:'#ffffff'}}>
              <i class="nav-icon fas fa-cart-plus"></i>
              <p>
                COMMANDES
                <span class="badge badge-danger right">2</span>
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link" style={{color:'#ffffff'}}>
              <i class="nav-icon fas fa-book"></i>
              <p>
                FACTURES
                <span class="badge badge-danger right">2</span>
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link" style={{color:'#ffffff'}}>
              <i class="nav-icon fas fa-child"></i>
              <p>
                LIVRAISONS
                <span class="badge badge-danger right">2</span>
              </p>
            </a>
          </li>

        
          
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
   
  </aside>

{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
 

  {/* Main content */}
  <div className="content">
      <div className="row  mb-3">
       
        <div className="col-sm-12">
            <br/>            
            
           
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
 
export default UserProfile;