import React, { useEffect, useState } from "react";

const RegioesDoBrasil = () =>{
    const [regiones, setRegiones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() =>{
        fetchRegiones()

    }, [])

    const fetchRegiones = async () =>{
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes');
            const data  = await response.json();
            setRegiones(data);
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }

    return(
        <div>
            <h2>Regiões</h2>
            {loading && <p>Carregando...</p> }
            {error && <p>Ocorreu um erro: {error}</p> }
            <select name="" id="">
                {regiones?.map((regiao) =>{
                    return(
                        <option key={regiao.id} value={regiao.nome}>{regiao.nome}</option>
                    )
                })}
            </select>
        </div>
        )
}

export default RegioesDoBrasil;