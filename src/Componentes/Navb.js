function Navb() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <label className="navbar-brand"  >
            Mtb <label className="navbar-brand" style={{ color: '#3DC814' }}> Oaxaca</label>
          </label>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#/Inicio'>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#/Galeria'>Galeria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#/Acerca'>Acerca</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#/Trails'>Trails</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#/Blog'>Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#/'>Salir</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navb };






