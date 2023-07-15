const Profile = () => {
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
                    <div class="content">
                        <div class="container">
                            <div class="row  mb-3">
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            {/* Widget: user widget style 1 */}
                                            <div class="card card-widget widget-user">
                                                {/* Add the bg color to the header using any of the bg-* classes */}
                                                <div class="widget-user-header text-white"
                                                    style={{background: 'url("../../dist/img/photo1.png") center center'}}>
                                                    <h3 class="widget-user-username text-right">Elizabeth Pierce</h3>
                                                    <h5 class="widget-user-desc text-right">Web Designer</h5>
                                                </div>
                                                <div class="widget-user-image">
                                                    <img class="img-circle" src="../../dist/img/user3-128x128.jpg" alt="User Avatar" />
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class=" col-md-auhto " style={{marginTop:'7%"'}}>
                                                            <a href="#" class="btn btn-outlined btn-black text-muted bg-transparent"
                                                                data-wow-delay="0.7s"><img src="https://img.icons8.com/ios/50/000000/settings.png"
                                                                    width="19" height="19" /> <small>SETTINGS</small></a>
                                                            <i class="mdi mdi-settings-outline"></i>
                                                            <a href="#" class="
                             btn-outlined btn-black text-muted"><img src="https://img.icons8.com/metro/26/000000/link.png"
                                                                    width="17" height="17" id="plus" />
                                                                <small>PROGRAM</small> </a>
                                                            <a href="#" class="btn btn-outlined btn-black text-muted "><img
                                                                src="https://img.icons8.com/metro/26/000000/more.png" width="20" height="20"
                                                                class="mr-2 more" /><small>MORE</small></a>
                                                            <span class="vl ml-3"></span>
                                                        </div>


                                                    </div>
                                                    <div class="col-sm-6 text-center">
                                                        <div class="p-4 d-flex justify-content-center align-items-center">
                                                            <ul class="list-inline mb-0">
                                                                <li class="list-inline-item">
                                                                    <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"> <i class="fa fa-image mr-1"></i>Photos</small>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"> <i class="fa fa-user-circle mr-1"></i>Followers</small>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container">
                                                    <h3 class="mb-3">Company Culture</h3>
                                                    <p class=" mb-0">
                                                        <span class="badge badge-primary">
                                                            <i class="fa fa-pen"></i> Ecrivain
                                                        </span>
                                                        Public <span class="mx-2">|</span> Updated by <strong>MDBootstrap</strong> on 11 April , 2021
                                                    </p>
                                                    <hr class="my-4" />
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="d-flex justify-content-start align-items-center">
                                                                <a href="#!">
                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                                                                        class="img-fluid rounded-circle me-1" width="35" />
                                                                </a>
                                                                <a href="#!">
                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                                                                        class="img-fluid rounded-circle me-1" width="35" />
                                                                </a>
                                                                <a href="#!">
                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar"
                                                                        class="img-fluid rounded-circle me-1" width="35" />
                                                                </a>
                                                                <a href="#!">
                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                                                                        class="img-fluid rounded-circle me-3" width="35" />
                                                                </a>
                                                                <button type="button" class="btn btn-outline-dark btn-sm btn-floating">
                                                                    <i class="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="text-right">
                                                                <button type="button" class="btn button-border">
                                                                    <i class="fa fa-ellipsis-h"></i>
                                                                </button>
                                                                <button type="button" class="btn button-color button-border">
                                                                    <i class="fa fa-edit"></i> Editer
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br /><br />

                                            </div>
                                            {/* /.widget-user */}



                                        </div>
                                        <div class="row">
                                            <div class="py-4 px-4">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg" alt="" class="img-fluid rounded shadow-sm" /></div>
                                                    <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg" alt="" class="img-fluid rounded shadow-sm" /></div>
                                                    <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg" alt="" class="img-fluid rounded shadow-sm" /></div>
                                                    <div class="col-lg-6 pl-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg" alt="" class="img-fluid rounded shadow-sm" /></div>
                                                </div>
                                                <div class="py-4">
                                                    <h5 class="mb-3">Recent posts</h5>
                                                    <div class="p-4 bg-light rounded shadow-sm">
                                                        <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                                        <ul class="list-inline small text-muted mt-3 mb-0">
                                                            <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>12 Comments</li>
                                                            <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>200 Likes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        {/* Card START */}
                                        <div class="col-sm-12 col-lg-12">
                                            <div class="card">
                                                <div class="card-header border-0 pb-0">
                                                    <h5 class="card-title">About</h5>
                                                    {/* Button modal */}
                                                </div>
                                                {/* Card body START */}
                                                <div class="card-body position-relative pt-0">
                                                    <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
                                                    {/* Date time */}
                                                    <ul class="list-unstyled mt-3 mb-0">
                                                        <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990 </strong> </li>
                                                        <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                                                        <li> <i class="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong> </li>
                                                    </ul>
                                                </div>
                                                {/* Card body END */}
                                            </div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            {/* Card START */}
                                            <div class="col-sm-6 col-lg-12">
                                                <div class="card">
                                                    {/* Card header START */}
                                                    <div class="card-header d-sm-flex justify-content-between border-0">
                                                        <h5 class="card-title">Photos</h5>
                                                        <a class="btn btn-primary-soft btn-sm" href="#!"> See all photo</a>
                                                    </div>
                                                    {/* Card header END */}
                                                    {/* Card body START */}
                                                    <div class="card-body position-relative pt-0">
                                                        <div class="row g-2">
                                                            {/* Photos item */}
                                                            <div class="col-6">
                                                                <a href="../../dist/img/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                                                                    <img class="rounded img-fluid" src="../../dist/img/user4-128x128.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            {/* Photos item */}
                                                            <div class="col-6">
                                                                <a href="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="">
                                                                    <img class="rounded img-fluid" src="../../dist/img/user7-128x128.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            {/* Photos item */}
                                                            <div class="col-4">
                                                                <a href="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                                                                    <img class="rounded img-fluid" src="../../dist/img/user8-128x128.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            {/* Photos item */}
                                                            <div class="col-4">
                                                                <a href="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="">
                                                                    <img class="rounded img-fluid" src="../../dist/img/user1-128x128.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            {/* Photos item */}
                                                            <div class="col-4">
                                                                <a href="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="">
                                                                    <img class="rounded img-fluid" src="../../dist/img/user2-160x160.jpg" alt="" />
                                                                </a>
                                                                {/* glightbox Albums left bar END  */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Card body END */}
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            </div>

            );
}

            export default Profile;