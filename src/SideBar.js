import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SideBar = () => {
    const { id } = useParams();
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4X" style={{ backgroundColor: '#fc841c' }}>
                <Link className="brand-link" to={'/admin'}>
                    <img src="../../dist/img/logo.png" alt="AdminLTE Logo" className="brand-imagge img-circle" style={{ border: '3px solid #ffffff', width: '100px', height: '100px' }} />
                    <span className="brand-text" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '30px' }}>Pyli</span>
                </Link>


                <div id="sidebar" className="sidebar" style={{ background: '#000099' }}>
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2X" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link to={`/details-user/${id}`} className="d-block" style={{ color: '#ffffff', fontWeight: 'bold', 
                            fontSize: '18px' }}>Alexander Pierce</Link>
                        </div>
                    </div>



                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="active nav-item">
                                <a href="#profile_link" data-toggle="collapse" aria-expanded="false" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>
                                        PROFILS
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="collapse list-unstyled nav" id="profile_link">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/add_profile'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/view_profile'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fa fa-handshake"></i>
                                    <p>
                                        AFFECTATIONS
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav.html" className="nav-link" style={{ color: '#ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fonctionnalités</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav-sidebar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Actions systèmes</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="active nav-item">
                                <a href="#user_link" data-toggle="collapse" aria-expanded="false" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                        UTILISATEURS
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="collapse list-unstyled nav" id="user_link">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/add_user'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/view_user'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="active nav-item">
                                <a href="#store_link" data-toggle="collapse" aria-expanded="false" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-shopping-cart"></i>
                                    <p>
                                        MAGASINS
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="collapse list-unstyled nav" id="store_link">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/add-store'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/view-store'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="active nav-item">
                                <a href="#post_link" data-toggle="collapse" aria-expanded="false" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-pen"></i>
                                    <p>
                                        POSTS
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="collapse list-unstyled nav" id="post_link">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/add-post'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#ffffff' }} to={'/view-post'}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-file"></i>
                                    <p>
                                        FICHIERS
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link" style={{ color: 'ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-th-large"></i>
                                    <p>
                                        CATEGORIES
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link" style={{ color: '#ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link" style={{ color: '#ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-dollar-sign"></i>
                                    <p>
                                        PAIEMENTS
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link" style={{ color: '#ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ajouter</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link" style={{ color: '#ffffff' }}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Consulter</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-header" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }}>COMMUNICATIONS</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-pen"></i>
                                    <p>
                                        POSTS
                                        <span className="badge badge-danger right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-calendar-alt"></i>
                                    <p>
                                        ABONNEMENTS
                                        <span className="badge badge-danger right">2</span>
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-bell"></i>
                                    <p>
                                        NOTIFICATIONS
                                        <span className="badge badge-danger right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-cart-plus"></i>
                                    <p>
                                        COMMANDES
                                        <span className="badge badge-danger right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-book"></i>
                                    <p>
                                        FACTURES
                                        <span className="badge badge-danger right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link" style={{ color: '#ffffff' }}>
                                    <i className="nav-icon fas fa-child"></i>
                                    <p>
                                        LIVRAISONS
                                        <span className="badge badge-danger right">2</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </aside>
        </div>
    );
}

export default SideBar;