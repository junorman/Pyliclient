const Cart = () => {
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
                    <div class="content">
                        <div class="row  mb-3">

                            <div class="col-sm-12">
                                <br />
                                <div class="container">
                                    <div class="row d-flex justify-content-center align-items-center ">
                                        <div class="col">
                                            <div class="card" style={{ border: '4px solid #000099' }}>
                                                <div class="card-body p-4">


                                                    <div class="row">
                                                        <div class="col-sm-8">

                                                        </div>

                                                        <div class="col-sm-4 ">
                                                            <ul class="nav justify-content-center ">
                                                                <li><a href="#" class="nav-link text-secondary">Quantité</a></li>
                                                                <li><a href="#" class="nav-link text-secondary ">Prix</a></li>
                                                                <li><a href="#" class="nav-link text-secondary ">Retiré</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <hr />

                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                        <div>

                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                    <div class="card mb-3 ">
                                                        <div class="card-body">
                                                            {/*ligne article */}
                                                            <div class="d-flex justify-content-between mb-3">
                                                                <div class="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <div class="ms-3 mr-4">
                                                                            <img class="img-circle" src="dist/img/user1-128x128.jpg"
                                                                                alt="User Image" style={{ width: '30px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="ms-3">
                                                                        <b class="small mb-0 text-dark">Livre le Manoire</b>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex flex-row align-items-center pr-4">
                                                                    <div style={{ width: '100px' }}>
                                                                        <input class="form-control" style={{ width: '50px' }}
                                                                            type="number" value="1" name="quantité" min="1" max="10" />
                                                                    </div>
                                                                    <div style={{ width: '100px' }}>
                                                                        <div class="mb-0">105 €</div>
                                                                    </div>
                                                                    <a href="" style={{ color: 'red' }}><i class="fa fa-trash"></i> </a>
                                                                </div>
                                                            </div>
                                                            {/* fin ligne article */}


                                                            {/*ligne article */}
                                                            <div class="d-flex justify-content-between mb-3">
                                                                <div class="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <div class="ms-3 mr-4">
                                                                            <img class="img-circle" src="dist/img/user1-128x128.jpg"
                                                                                alt="User Image" style={{ width: '30px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="ms-3">
                                                                        <b class="small mb-0 text-dark">Livre le Manoire</b>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex flex-row align-items-center pr-4">
                                                                    <div style={{ width: '100px' }}>
                                                                        <input class="form-control" style={{ width: '50px' }}
                                                                            type="number" value="1" name="quantité" min="1" max="10" />
                                                                    </div>
                                                                    <div style={{ width: '100px' }}>
                                                                        <div class="mb-0">105 €</div>
                                                                    </div>
                                                                    <a href="" style={{ color: 'red' }}><i class="fa fa-trash"></i> </a>
                                                                </div>
                                                            </div>
                                                            {/* fin ligne article */}


                                                        </div>
                                                    </div>


                                                </div>



                                                <div class="row">
                                                    <div class="col-2 mx-4" >
                                                        <a href="" class=" btn btn-outline-danger">Vider le panier <i class="fa fa-trash"></i> </a>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div class="row g-5">
                                                    <div class="col-md-5 col-lg-4 order-md-last mx-4">

                                                        <ul class="list-group mb-3">
                                                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                                                <div>
                                                                    <h6 class="my-0">Prix hors taxe </h6>
                                                                    <small class="text-muted"></small>
                                                                </div>
                                                                <span class="text-muted">50 €</span>
                                                            </li>


                                                            <li class="list-group-item d-flex justify-content-between bg-light">
                                                                <div class="text-dark ">
                                                                    <h6 class="my-0">Taxe</h6>

                                                                </div>
                                                                <div class="text-dark">
                                                                    <span class="">20 €</span>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <span class="text-success">Total </span>
                                                                <strong class="text-success">175 €</strong>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                                <div class="blog-pagination mb-4" aria-label="Pagination">
                                                    <a class="btn btn-outline-orange mt-4 mx-4" href="">Aller au paiement</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

        </div>
    );
}

export default Cart;