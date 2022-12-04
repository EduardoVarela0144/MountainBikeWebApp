import San_Pablo from '../Image/San_Pablo.jpg';
import San_Felipe from '../Image/San_Felipe.jpg';
import Monte_Alban from '../Image/Monte_Alban.jpg';
import Ixtepeji from '../Image/Ixtepeji.jpg';

function Columnas() {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" style={{ filter: 'brightness(60%)', objectFit: 'cover' }} width="140" height="140" src={San_Pablo} alt="San_Pablo" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <h2 className="fw-normal">San Pablo Etla</h2>
                    <p><a className="btn btn-secondary" href="https://www.oaxaca-mio.com/rutasturisticas/sanpablo.htm">Conocer más</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" style={{ filter: 'brightness(60%)', objectFit: 'cover' }} width="140" height="140" src={San_Felipe} alt="San_Pablo" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <h2 className="fw-normal">San Felipe</h2>
                    <p><a className="btn btn-secondary" href="https://www.youtube.com/watch?v=F4WVwBzgUNw">Conocer más</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" style={{ filter: 'brightness(60%)', objectFit: 'cover' }} width="140" height="140" src={Monte_Alban} alt="San_Pablo" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <h2 className="fw-normal">Monte Albán</h2>
                    <p><a className="btn btn-secondary" href="https://www.inah.gob.mx/zonas/94-zona-arqueologica-de-monte-alban">Conocer más</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" style={{ filter: 'brightness(60%)', objectFit: 'cover' }} width="140" height="140" src={Ixtepeji} alt="San_Pablo" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <h2 className="fw-normal">Ixtepeji</h2>
                    <p><a className="btn btn-secondary" href="https://rutopia.com/ecoturismo/oaxaca/parque-ecoturistico-la-cumbre-ixtepeji">Conocer más</a></p>
                </div>
            </div>
        </>
    );
}

export { Columnas };