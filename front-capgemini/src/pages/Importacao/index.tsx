import React, { useState } from "react";
import api from "../../services/api";

import { ContainerImportacao } from "./style";

const EnviarArquivo = (arquivo: File | null) => {
  if (arquivo) {
    const data = new FormData();
    data.append("formFile", arquivo);
    api
      .post("/", data)
      .then((x) => console.log(x))
      .catch((err) => console.log(err.response));
  }
};

const Importacao: React.FC = () => {
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(
    null
  );

  return (
    <ContainerImportacao>
      <div className="container-itens">
        <h1>Insira Um Arquivo</h1>
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
    </ContainerImportacao>
  );
};

export default Importacao;
