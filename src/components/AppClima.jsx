import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Spinner from './Spinner'

function AppClima() {

    const { resultado, cargando, noResultado } = useClima()

    return (
        <>
            <main className='dos-columnas'>
                <Formulario />

                { cargando ? <Spinner /> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p>El clima se mostrara aqui</p>}
            </main>
        </>
    )
}

export default AppClima
