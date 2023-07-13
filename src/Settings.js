const Settings = () => {
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
 

  {/* Main content */}
  <div className="content">
  <div class="container">
              <section class="py-2 header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            {/* Tabs nav */}
                            <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i class="fa fa-user mr-2"></i>
                                    <span class="font-weight-bold small text-uppercase"> Information personnelle</span></a>

                                <a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i class="fa fa-bullhorn mr-2"></i>
                                    <span class="font-weight-bold small text-uppercase">Notifications</span></a>

                                <a class="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <i class="fa fa-globe mr-2"></i>
                                    <span class="font-weight-bold small text-uppercase">Communications</span></a>

                                <a class="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <i class="fa fa-comment-alt mr-2"></i>
                                    <span class="font-weight-bold small text-uppercase">Messages</span></a>
                                </div>
                        </div>


                        <div class="col-md-9">
                            {/* Tabs content */}
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <h4 class="font-italic mb-4">Information personnelle</h4>
                                    <form class="row g-3">
                                      {/* First name */}
                                      <div class="col-sm-6 col-lg-4">
                                        <label class="form-label">First name</label>
                                        <input type="text" class="form-control" placeholder="" value="Sam"/>
                                      </div>
                                      {/* Last name */}
                                      <div class="col-sm-6 col-lg-4">
                                        <label class="form-label">Last name</label>
                                        <input type="text" class="form-control" placeholder="" value="Lanson"/>
                                      </div>
                                      {/* Additional name */}
                                      <div class="col-sm-6 col-lg-4">
                                        <label class="form-label">Additional name</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                      </div>
                                      {/* User name */}
                                      <div class="col-sm-6">
                                        <label class="form-label">User name</label>
                                        <input type="text" class="form-control" placeholder="" value="@samlanson"/>
                                      </div>
                                      {/* Birthday */}
                                      <div class="col-lg-6">
                                        <label class="form-label">Birthday </label>
                                        <input type="text" class="form-control flatpickr" value="12/12/1990"/>
                                      </div>
                                      {/* Allow checkbox */}
                                      <div class="col-12">
                                        <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="allowChecked" checked/>
                                          <label class="form-check-label" for="allowChecked">
                                            Allow anyone to add you to their team
                                          </label>
                                        </div>
                                      </div>
                                      {/* Phone number */}
                                      <div class="col-sm-6">
                                        <label class="form-label">Phone number</label>
                                        <input type="text" class="form-control" placeholder="" value="(678) 324-1251"/>
                                        {/* Add new number */}
                                        <a class="btn btn-sm btn-dashed rounded mt-2" href="#!"> <i class="bi bi-plus-circle-dotted me-1"></i>Add new phone number</a>
                                      </div>
                                      {/* Phone number */}
                                      <div class="col-sm-6">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" placeholder="" value="sam@webestica.com"/>
                                        {/* Add new email */}
                                        <a class="btn btn-sm btn-dashed rounded mt-2" href="#!"> <i class="bi bi-plus-circle-dotted me-1"></i>Add new email address</a>
                                      </div>
                                      {/* Page information */}
                                      <div class="col-12">
                                        <label class="form-label">Overview</label>
                                        <textarea class="form-control" rows="4" placeholder="Description (Required)">Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</textarea>
                                        <small>Character limit: 300</small>
                                      </div>
                                      {/* Button  */}
                                      <div class="col-12 text-end">
                                        <button type="submit" class="btn btn-sm mb-0" style={{backgroundColor: '#000099', color: '#ffffff'}}>Save changes</button>
                                      </div>
                                    </form>
                                </div>
                                
                                <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h4 class="font-italic mb-4">Notifications</h4>
                                    <div class="">
                                      {/* Card header START */}
                                      <div class="border-0 pb-0">
                                        <p class="mb-0">Tried law yet style child. The bore of true of no be deal. Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed. </p>
                                      </div>
                                      {/* Card header START */}
                                      {/* Card body START */}
                                      <div class="pb-0">
                                        {/* Notification START */}
                                        <ul class="list-group list-group-flush">
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Likes and Comments</h6>
                                              <p class="small mb-0">Joy say painful removed reached end.</p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked" checked/>
                                            </div>
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Reply to My comments</h6>
                                              <p class="small mb-0">Ask a quick six seven offer see among.</p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked2" checked/>
                                            </div>
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Subscriptions</h6>
                                              <p class="small mb-0">Preference any astonished unreserved Mrs.</p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked3"/>
                                            </div>
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Birthdays</h6>
                                              <p class="small mb-0">Contented he gentleman agreeable do be</p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked4"/>
                                            </div>
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Events</h6>
                                              <p class="small mb-0">Fulfilled direction use continually.</p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked5" checked/>
                                            </div>
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item px-0 py-3">
                                            {/* Accordion START */}
                                            <div class="accordion accordion-flush border-0" id="emailNotifications">
                                              {/* Accordion item */}
                                              <div class="accordion-item bg-transparent">
                                                <h2 class="accordion-header" id="flush-headingOne">
                                                  <a href="#!" class="accordion-button mb-0 p-0 collapsed bg-transparent shadow-none" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <span>
                                                      <span class="mb-0 h6 d-block">Email notifications</span>
                                                      <small class="small mb-0 text-secondary">As hastened oh produced prospect. </small>
                                                    </span>
                                                  </a>
                                                </h2>
                                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#emailNotifications">
                                                  <div class="accordion-body p-0 pt-3">
                                                      {/* Notification list item */}
                                                      <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="NotiSwitchCheckChecked6" checked/>
                                                        <label class="form-check-label" for="NotiSwitchCheckChecked6">
                                                          Product emails
                                                        </label>
                                                      </div>
                                                      {/* Notification list item */}
                                                      <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="NotiSwitchCheckChecke7"/>
                                                        <label class="form-check-label" for="NotiSwitchCheckChecke7">
                                                          Feedback emails
                                                        </label>
                                                      </div>
                                                      <hr/>
                                                    <div class="mt-3">
                                                      <h6>Email frequency</h6>
                                                      {/* Notification list item */}
                                                      <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio1"/>
                                                        <label class="form-check-label" for="NotiRadio1">
                                                          Daily
                                                        </label>
                                                      </div>
                                                      {/* Notification list item */}
                                                      <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio2" checked/>
                                                        <label class="form-check-label" for="NotiRadio2">
                                                          Weekly
                                                        </label>
                                                      </div>
                                                      {/* Notification list item */}
                                                      <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio3"/>
                                                        <label class="form-check-label" for="NotiRadio3">
                                                          Periodically
                                                        </label>
                                                      </div>
                                                      {/* Notification list item */}
                                                      <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio4" checked/>
                                                        <label class="form-check-label" for="NotiRadio4">
                                                          Off
                                                        </label>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            {/* Accordion END */}
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Push notifications</h6>
                                              <p class="small mb-0">Rendered six say his striking confined. </p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked8" checked/>
                                            </div>
                                          </li>
                                          {/* Notification list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                              <h6 class="mb-0">Weekly account summary <span class="badge bg-primary smaller"> Pro only</span> </h6>
                                              <p class="small mb-0">Rendered six say his striking confined. </p>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked9" disabled/>
                                            </div>
                                          </li>
                                        </ul>
                                        {/* Notification END */}
                                        
                                      </div>
                                    {/* Card body END */}
                                    {/* Button save */}
                                    <div class="card-footer pt-0 text-end border-0">
                                      <button type="submit" class="btn btn-sm mb-0" style={{backgroundColor: '#000099', color: '#ffffff'}}>Save changes</button>
                                    </div>
                                  </div>
                                </div>
                                
                                <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <h4 class="font-italic mb-4">Qui peut vous joindre?</h4>
                                    <div class="accordion" id="accordionExample">
                                      <div class="card">
                                        <div class="card-header" id="headingOne">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Demande de connexion
                                            </button>
                                          </h2>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="ComRadio" id="ComRadio5"/>
                                              <label class="form-check-label" for="ComRadio5">
                                                Everyone on social (recommended)
                                              </label>
                                            </div>
                                            {/* Notification list item */}
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="ComRadio" id="ComRadio2" checked/>
                                              <label class="form-check-label" for="ComRadio2">
                                                Only people who know your email address
                                              </label>
                                            </div>
                                            {/* Notification list item */}
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="ComRadio" id="ComRadio3"/>
                                              <label class="form-check-label" for="ComRadio3">
                                                Only people who appear in your mutual connection list
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="card">
                                        <div class="card-header" id="headingTwo">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Nous pouvons vous envoyer un message
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                          <div class="card-body">
                                              <ul class="list-group list-group-flush">
                                                <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                  <div class="me-2">
                                                    <p class="mb-0">Enable message request notifications</p>
                                                  </div>
                                                  <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked"/>
                                                  </div>
                                                </li>
                                                {/* Notification list item */}
                                                <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                  <div class="me-2">
                                                    <p class="mb-0">Allow connections to add you on group </p>
                                                  </div>
                                                  <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked2" checked/>
                                                  </div>
                                                </li>
                                                {/* Notification list item */}
                                                <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                  <div class="me-2">
                                                    <p class="mb-0">Allow Sponsored Messages </p>
                                                    <p class="small">Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages </p>
                                                  </div>
                                                  <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked3" checked/>
                                                  </div>
                                                </li>
                                              </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="card">
                                        <div class="card-header" id="headingThree">
                                          <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Comment les gens peuvent vous trouver
                                            </button>
                                          </h2>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                          <div class="card-body">
                                              <ul class="list-group list-group-flush">
                                                <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                  <div class="me-2">
                                                    <p class="mb-0">Allow search engines to show your profile?</p>
                                                  </div>
                                                  <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked4" checked/>
                                                  </div>
                                                </li>
                                                {/* Notification list item */}
                                                <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                  <div class="me-2">
                                                    <p class="mb-0">Allow people to search by your email address? </p>
                                                  </div>
                                                  <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked5"/>
                                                  </div>
                                                </li>
                                                {/* Notification list item */}
                                                <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                  <div class="me-2">
                                                    <p class="mb-0">Allow Sponsored Messages </p>
                                                    <p class="small">Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages </p>
                                                  </div>
                                                  <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked6" checked/>
                                                  </div>
                                                </li>
                                              </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                
                                </div>
                                
                                <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <h4 class="font-italic mb-4">Messages</h4>
                                    <div class="mb-4">
                                      <div class="card-header border-0 pb-0">
                                        <p class="mb-0">As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived. </p>
                                      </div>
                                      {/* Title START */}
                                      <div class="">
                                        {/* Settings style START */}
                                        <ul class="list-group list-group-flush">
                                          {/* Message list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div class="me-2">
                                              <h6 class="mb-0">Enable message request notifications</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked" checked/>
                                            </div>
                                          </li>
                                          {/* Message list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div class="me-2">
                                              <h6 class="mb-0">Invitations from your network</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked2" checked/>
                                            </div>
                                          </li>
                                          {/* Message list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div class="me-2">
                                              <h6 class="mb-0">Allow connections to add you on group</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked3"/>
                                            </div>
                                          </li>
                                          {/* Message list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div class="me-2">
                                              <h6 class="mb-0">Reply to comments</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked4"/>
                                            </div>
                                          </li>
                                          {/* Message list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div class="me-2">
                                              <h6 class="mb-0">Messages from activity on my page or channel</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked5" checked/>
                                            </div>
                                          </li>
                                          {/* Message list item */}
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div class="me-2">
                                              <h6 class="mb-0">Personalise tips for my page</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                              <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked6" checked/>
                                            </div>
                                          </li>
                                        </ul>
                                        {/* Message END */}
                                    </div>
                                     {/* Button save */}
                                     <div class="card-footer pt-0 text-end border-0">
                                      <button type="submit" class="btn btn-sm mb-0" style={{backgroundColor: '#000099', color: '#ffffff'}}>Save changes</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          </div>
  </div>
     
  </div>
  
</div>
{/* /.content-wrapper */}

</div>
    );
}
 
export default Settings;