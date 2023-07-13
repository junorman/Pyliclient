
const Home = () => {
    return (
        <div>
            <div className="wrapper">

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
                        <div className="row  mb-3">

                            <div className="col-sm-12">
                                <br />
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                    <div className="card card-body align-items-centesr justify-conhtent-between">
                                        <div className="row">
                                        <div className="col-sm-6">
                                            <h6><i className="fa fa-bell"></i> Souhaitez-vous publier un post afin de valoriser vos talents...</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="nav nav-pills nav-stack small fw-normal">
                                            <li className="nav-item">
                                                <a style={{backgroundColor: '#000099', color: '#ffffff', fontWeight: 'bold'}} className=" btn button-color py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="fa fa-camera pe-2"></i>&nbsp;Photo</a>
                                            </li>&nbsp;
                                            <li className="nav-item">
                                                <a style={{backgroundColor: '#000099', color: '#ffffff', fontWeight: 'bold'}} className="btn button-color py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i className="fa fa-video pe-2"></i>&nbsp;Video</a>
                                            </li>&nbsp;
                                            <li className="nav-item">
                                                <a style={{backgroundColor: '#000099', color: '#ffffff', fontWeight: 'bold'}} href="#" className="btn button-color py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="fa fa-calendar pe-2"></i>&nbsp;Event </a>
                                            </li>&nbsp;
                                            <li className="nav-item">
                                                <a style={{backgroundColor: '#000099', color: '#ffffff', fontWeight: 'bold'}} href="#" className="btn button-color py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="fa fa-book pe-2"></i>&nbsp;Documents </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>

                                    </div>
                                    {/* /.col */}
                                </div>
                                <div className="row">
                                    
                                    <div className="col-md-6">
                                        <div className="card card-widget">
                                            <div className="card-header">
                                                <div className="user-block">
                                                    <img className="img-circle" src="dist/img/user1-128x128.jpg" alt="User Image" />
                                                    <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                                                    <span className="description">Shared publicly - 7:30 PM Today</span>
                                                </div>
                                                {/* /.user-block */}

                                                {/* /.card-tools */}
                                            </div>
                                            {/* /.card-header */}
                                            <p style={{ marginLeft: '21px' }}>I took this photo this morning. What do you guys think?</p>
                                            <div className="card-body">
                                                <div id="wrap" className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            {/* My Carousel */}
                                                            <div id="carousel" className="carousel slide gallery" dataRide="carousel">
                                                                <div className="carousel-inner">
                                                                    <div className="carousel-item active" data-slide-number="0" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/vbNTwfO9we0/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/vbNTwfO9we0/1600x900.jpg" className="img-fluid mb-2 d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="1" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/DEhwkPYevhE/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/DEhwkPYevhE/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="2" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/-RV5PjUDq9U/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/-RV5PjUDq9U/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="3" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/sd0rPap7Uus/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/sd0rPap7Uus/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="4" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/kmRZFcZEMY8/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/kmRZFcZEMY8/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="5" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/HJDdrWtlkIY/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/HJDdrWtlkIY/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="6" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/VfuJpt81JZo/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/VfuJpt81JZo/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="7" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/NLkXZQ7kHzI/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/NLkXZQ7kHzI/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="8" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/bl4WNYGe2KE/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/bl4WNYGe2KE/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="9" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/_8zfgT9kS2g/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/_8zfgT9kS2g/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="10" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/enuCEimS1p4/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/enuCEimS1p4/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="11" data-toggle="lightbox" data-gallery="gallery" data-remote="https://source.unsplash.com/hZDtZkdXtek/1600x900.jpg">
                                                                        <img src="https://source.unsplash.com/hZDtZkdXtek/1600x900.jpg" className="d-block w-100" alt="..." />
                                                                    </div>
                                                                </div>
                                                                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span className="sr-only">Previous</span>
                                                                </a>
                                                                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span className="sr-only">Next</span>
                                                                </a>
                                                                <a className="carousel-fullscreen" href="#carousel" role="button">
                                                                    <span className="carousel-fullscreen-icon" aria-hidden="true"></span>
                                                                    <span className="sr-only">Fullscreen</span>
                                                                </a>
                                                                <a className="carousel-pause pause" href="#carousel" role="button">
                                                                    <span className="carousel-pause-icon" aria-hidden="true"></span>
                                                                    <span className="sr-only">Pause</span>
                                                                </a>
                                                            </div>

                                                            {/* My Carousel Navigatiom */}
                                                            <div id="carousel-thumbs" className="carousel slide" data-ride="carousel" style={{ backgroundColor: '#ffffff' }}>
                                                                <div className="carousel-inner">
                                                                    <div className="carousel-item active" data-slide-number="0">
                                                                        <div className="row mx-0">
                                                                            <div id="carousel-selector-0" className="thumb col-3 px-1 py-2 selected" data-target="#carousel" data-slide-to="0">
                                                                                <img src="https://source.unsplash.com/vbNTwfO9we0/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-1" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="1">
                                                                                <img src="https://source.unsplash.com/DEhwkPYevhE/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-2" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="2">
                                                                                <img src="https://source.unsplash.com/-RV5PjUDq9U/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-3" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="3">
                                                                                <img src="https://source.unsplash.com/sd0rPap7Uus/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="carousel-item " data-slide-number="1">
                                                                        <div className="row mx-0">
                                                                            <div id="carousel-selector-4" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="4">
                                                                                <img src="https://source.unsplash.com/kmRZFcZEMY8/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-5" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="5">
                                                                                <img src="https://source.unsplash.com/HJDdrWtlkIY/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-6" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="6">
                                                                                <img src="https://source.unsplash.com/VfuJpt81JZo/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-7" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="7">
                                                                                <img src="https://source.unsplash.com/NLkXZQ7kHzI/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="carousel-item" data-slide-number="2">
                                                                        <div className="row mx-0">
                                                                            <div id="carousel-selector-8" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="8">
                                                                                <img src="https://source.unsplash.com/bl4WNYGe2KE/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-9" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="9">
                                                                                <img src="https://source.unsplash.com/_8zfgT9kS2g/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-10" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="10">
                                                                                <img src="https://source.unsplash.com/enuCEimS1p4/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                            <div id="carousel-selector-11" className="thumb col-3 px-1 py-2" data-target="#carousel" data-slide-to="11">
                                                                                <img src="https://source.unsplash.com/hZDtZkdXtek/1600x900.jpg" className="img-fluid" alt="..." />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a className="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">
                                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span className="sr-only">Previous</span>
                                                                </a>
                                                                <a className="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">
                                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span className="sr-only">Next</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <img className="img-fluid mb-2" src="dist/img/photo1.png" alt="Photo">
                      <div className="row mb-3">
                        <div className="col-sm-2">
                          <img className="img-fluid" src="dist/img/photo2.png" alt="Photo">
                        </div>
                        <div className="col-sm-2">
                          <img className="img-fluid" src="dist/img/photo3.jpg" alt="Photo">
                        </div>
                        <div className="col-sm-2">
                          <img className="img-fluid" src="dist/img/photo4.jpg" alt="Photo">
                        </div>
                        <div className="col-sm-2">
                          <img className="img-fluid" src="dist/img/photo3.jpg" alt="Photo">
                        </div>
                        <div className="col-sm-2">
                          <img className="img-fluid" src="dist/img/photo2.png" alt="Photo">
                        </div>
                        <div className="col-sm-2">
                          <img className="img-fluid" src="dist/img/photo2.png" alt="Photo">
                        </div>
                      
                      </div> */}

                                                <button type="button" className="btn btn-default btn-sm"><i className="fas fa-share"></i></button>
                                                <button type="button" className="btn btn-default btn-sm"><i className="far fa-thumbs-up"></i> (127 likes)</button>
                                                <span className="float-right text-muted">
                                                    2 comments</span>
                                            </div>
                                            {/* /.card-body */}

                                        </div>
                                    </div>
                                    {/* /.col */}
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

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}

            {/* Main Footer */}
            <footer className="main-footer">
                {/* To the right */}
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
            </footer>







        </div>
    );
}

export default Home;