import { Divider } from '../Componentes/Divider';

function Tarjetas(props) {
  return (
    <>
      <Divider />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">{props.title}</h2>
          <p className="lead">{props.text}</p>
        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ objectFit: 'cover' }} src={props.url} height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
      </div>
    </>
  )
}

export { Tarjetas }