import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CardErro from "../../components/CardErro";

import api from "../../services/api";
import { ContainerImportacao } from "../Importacao/style";

interface Erros {
  linha: number;
  colunas: string[];
}

const Home: React.FC = () => {
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(
    null
  );
  const [erros, setErros] = useState<Array<Erros>>([] as Array<Erros>);

  const history = useHistory();

  const EnviarArquivo = (arquivo: File | null) => {
    if (arquivo) {
      setErros([]);
      const data = new FormData();
      data.append("formFile", arquivo);
      api
        .post("/", data)
        .then(() => {
          history.push("/Importacao");
        })
        .catch((err) => setErros(err.response.data.data));
    }
  };

  return (
    <>
      <ContainerImportacao>
        <div className="container-itens">
          <h1>Anexe Um Arquivo</h1>
          <input
            type="file"
            className="arquivo-box"
            multiple={false}
            onChange={(e) =>
              setArquivoSelecionado(
                e.target.files != null ? e.target.files[0] : null
              )
            }
          />
          <button onClick={() => EnviarArquivo(arquivoSelecionado)}>
            Enviar
          </button>
        </div>

        {erros.length >= 0 && (
          <CardErro>
            {erros.map((v) => (
              <li key={v.linha}>
                A linha {v.linha} tem os erros: {v.colunas.map((v) => v + " ")}
              </li>
            ))}
          </CardErro>
        )}
      </ContainerImportacao>
    </>
  );
};

export default Home;
