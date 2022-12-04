function Footer() {
    const goU = () =>{
        window.scrollTo(0, 0);
    }
    return (
        <footer className="container">
            <div className="float-end"><p style={{color:'#3DC814',cursor:'pointer'}} onClick={()=>goU()}>Regresar a arriba</p></div>
            <p>&copy; 2020–2024 Eduardo Varela Hernández</p>
            <br className="featurette-divider"></br>
        </footer>
    )
}

export { Footer }
