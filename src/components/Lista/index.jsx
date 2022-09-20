export const Lista = ({odas}) =>{
    return(
        <div className = 'lista'>
          <p className="oda"> {odas.length} odas </p>
          {odas.map(oda => (
            <div key={oda.nome}>
              <h1 className="nome"> nome: {oda.nome} </h1>
              <p className="usuario"> usuario: {oda.usuario} </p>
              <p className="descricao"> Descrição: {oda.descricao} </p>
              <p className="data"> data de inclusao: {oda.data_inclusao}</p>
              <p className="palavra"> palavras chave: {oda.palavras_chave}</p>
            </div>
          ))}
        </div>
    )
}    