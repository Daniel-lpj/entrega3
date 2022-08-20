import React, { useEffect, useState } from "react";

const Repositorio = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        (async () => {
          await fetch("http://api.github.com/users")
          .then((data) => data.json())
          .then((resp) => setUsuarios(resp))
        })();
    }, [])

    return (
        <>
            <h1>Lista de usuários no Github</h1>
            <ul>
                {usuarios.map((usuario) => 
                    <li key={usuario.id}>{usuario.login}</li>
                )}
            </ul>
        </>
    )
}
export default Repositorio;