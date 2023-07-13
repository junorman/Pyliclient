//import DetailsPosts from './DetailsPosts.css';
const DetailPosts = () => {
    return ( 
      
        <div>
          <style>
            
          </style>
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
                <aside className="main-sidebar sidebar-dark-primary elevation-4X" style={{ backgroundColor: '#ffffff' }}>
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link" style={{ backgroundColor: '#fc841c', borderBottom: '1px solid #fc841c' }}>
                        <img src="dist/img/icon.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3X" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light nav-font">Pyli</span>
                    </a>

                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar Menu */}
                        <br />
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Que rechercher-vous ..." aria-label="Search" style={{ border: '1px solid #000099' }} />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit" style={{ backgroundColor: '#000099', fontSize: '14px', color: '#ffffff' }}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-font">
                                {/* Add icons to the links using the .nav-icon className
                       with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active" style={{ backgroundColor: '#000099', fontSize: '14px' }}>
                                        <i className="nav-icon fas fa-shopping-cart"></i>
                                        <p>
                                            Créer magasin
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-font">
                                {/* Add icons to the links using the .nav-icon className
                       with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active nav-font" style={{ backgroundColor: '#000099', fontSize: '14px' }}>
                                        <i className="nav-icon fas fa-archive"></i>
                                        <p>
                                            Biblithèques
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-font">
                                {/* Add icons to the links using the .nav-icon className
                       with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active nav-font" style={{ backgroundColor: '#000099', fontSize: '14px' }}>
                                        <i className="nav-icon fas fa-user"></i>
                                        <p>
                                            Rechercher profils
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-font">
                                {/* Add icons to the links using the .nav-icon className
                       with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="pages/layout/rechercher_posts.html" className="nav-link active nav-font" style={{ backgroundColor: '#000099', fontSize: '14px' }}>
                                        <i className="nav-icon fas fa-image"></i>
                                        <p>
                                            Rechercher posts
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>

{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
 

  {/* Main content */}
  <div className="content">
  <div class="row  mb-3">
          <div className="container"> 
          <div class="col-sm-12">
              <br/>            
              <div class="row">
                <div class="col-12">
                  <form class="form-horizontal">
                    <div class="input-group input-group-sm mb-0">
                      <input class="form-control form-control-sm" placeholder="Rechercher"/>
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-lg button-color">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="card">
                  <div class="container-fliud">
                    <div class="wrapper row">
                      <div class="preview col-md-6">
                        
                        <div class="preview-pic tab-content">
                          <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
                          <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                          <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                          <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                          <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                        </div>
                        <ul class="preview-thumbnail nav nav-tabs">
                          <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                          <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                          <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                          <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                          <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                        </ul>
                        
                      </div>
                      <div class="details col-md-6">
                        <h3 class="product-title">men's shoes fashion</h3>
                        <div class="rating">
                          <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                          </div>
                          <span class="review-no">41 reviews</span>
                        </div>
                        <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                        <h4 class="price">current price: <span>$180</span></h4>
                        <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                        <h5 class="sizes">sizes:
                          <span class="size" data-toggle="tooltip" title="small">s</span>
                          <span class="size" data-toggle="tooltip" title="medium">m</span>
                          <span class="size" data-toggle="tooltip" title="large">l</span>
                          <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                        </h5>
                       
                        <div class="action">
                          <button class="add-to-cart btn btn-default" type="button">
                            <span class="fa fa-thumbs-up"></span>
                          </button>
                          <button style={{backgroundColor: '#000099', color: '#ffffff'}} class="like btn btn-default" type="button"><span class="fa fa-comments"></span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="row justify-content-centser">
                    <div class="col-12">
                      <div class="text-left">
                        <p class="lead emoji-picker-container">
                          <input type="email" class="form-control" placeholder="Input field" data-emojiable="true"/>
                        </p>
                        <a href="#" class="btn" style={{backgroundColor: '#000099', color: '#ffffff'}}>
                         <i class="fas fa-check"></i> <b>Publier</b>
                        </a>
                      </div>
                    </div>
                  </div>


                  <div class="card-body">
                    <ul class="comment-wrap list-unstyled">
                      {/* Comment item START */}
                      <li class="comment-item" style={{backgroundColor:'#ffffff'}}>
                        <div class="d-flex position-relative">
                          {/* Avatar */}
                          <div class="avatar avatar-xs user-block">
                            <a href="#!"><img class="img-circle border-color" src="../../dist/img/user7-128x128.jpg" alt="User Image"/></a>
                          </div>
                          <div class="ms-2">
                            {/* Comment by */}
                            <div class="bg-lght rounded-start-top-0 p-3 rounded">
                              <div class="d-flex justify-content-between">
                                <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                                <small class="ms-2">5hr</small>
                              </div>
                              <p class="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                            </div>
                            {/* Comment react */}
                            <ul class="nav nav-divider py-2 small">
                              <li class="nav-item">
                                <a class="nav-link" href="#!"> Like (3)</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#!"> Reply</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#!"> View 5 replies</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Comment item nested START */}
                       
                        
                        {/* Comment item nested END */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
  </div>
        
</div>
      {/* /.row */}
  </div>
  </div>



    );
}
 
export default DetailPosts;