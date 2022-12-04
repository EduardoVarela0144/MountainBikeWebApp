import React from 'react';
import '../Css/Comentarios.css';

function Comentarios() {

	const [comentario, setComentario] = React.useState([])

	React.useEffect(() => {
		obtenerDatos();
	}, [])

	const obtenerDatos = async () => {
		const data = await fetch('https://mtbapi-production.up.railway.app/administrador/comentarios/');
		const users = await data.json();
		setComentario(users);
	}

	return (

		<div className="projcard-container">
			{
				comentario.map(item => (

					<div key={item.id} className="projcard projcard-blue">
						<div className="projcard-innerbox">
							<img alt='C' className="projcard-img" src={item.url_imagen} style={{ objectFit: 'cover' }} />
							<div className="projcard-textbox">
								<div className="projcard-title">{item.name}</div>
								<div className="projcard-subtitle">{item.pista}</div>
								<div className="projcard-bar"></div>
								<div className="projcard-description">{item.comentario}</div>
								<div className="projcard-tagbox">
									<span className="projcard-tag">{item.pais}</span>
									<span className="projcard-tag">{item.edad}</span>
								</div>
							</div>
						</div>
					</div>


				))
			}
		</div>

	)
}
export { Comentarios } 