import React, {  useState } from "react";
import CardErro from "../../components/CardErro";

import api from "../../services/api";
import { ContainerImportacao } from "../Importacao/style";

const EnviarArquivo = (arquivo: File | null) => {
  if (arquivo) {
    const data = new FormData();
    data.append("formFile", arquivo);
    api
      .post("/", data)
      .then((x) => console.log(x))
      .catch((err) => console.log(err.response.data.data));
  }
};

interface Erros {
  linha: number;
  colunas: string[];
}


const Home: React.FC = () => {
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null);
  const [erros, setErros] = useState<Array<Erros>>([] as Array<Erros>)

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

      {/* {erros.length == 0 && (<CardErro> */}
      <CardErro>
        {/* {erros.map(v => (<li>A linha {v.linha} tem os erros: {v.colunas.map(v => v + ' ')}</li>))} */}
        <li>A linha 2 tem os erros: "Data Inferior ou igual a hoje!"</li>
      </CardErro>
    </ContainerImportacao>
    </>
  );
};

export default Home;
