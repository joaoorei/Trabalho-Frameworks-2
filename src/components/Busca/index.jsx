export const Busca = ({busca, buscaODA}) =>{
    return(
        <div className = 'buscar'>
            <input
                name='busca'
                type='text'
                value={busca}
                placeholder='O que deseja buscar?'
                onChange={buscaODA}
            />    
        </div>
    )
}    