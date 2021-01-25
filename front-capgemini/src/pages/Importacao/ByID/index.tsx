import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import Tabs from "../../../components/tabs";
import api from "../../../services/api";
import { Container } from "../../Home/style";

const FormatarData = (input: string) => {
  var datePart = input.match(/\d+/g);
  if (datePart)
    return datePart[2] + "/" + datePart[1] + "/" + datePart[0].substring(2);

  return "";
};

const FormatarId = (id: string) => id.split("-")[0];

interface DadoLinha {
  id: string;
  dataEntrega: Date;
  nomeProduto: string;
  quantidade: number;
  valorUnitario: number;
}

interface Imports {
  idImportacao: string;
  dataImportacao: Date;
  quantidadeItens: number;
  menorDataEntrega: Date;
  totalImportacao: number;
  dados: DadoLinha[];
}

const ImportPorId: React.FC<Imports> = (props) => {
  const h = useHistory();
  const [im, setImport] = useState<Imports>({} as Imports);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    api.get(`${id}`).then((x) => {
      console.log(x.data);
      setImport(x.data);
      setLoaded(true);
    });
  }, []);

  return (
    <Container>
      {loaded && (
        <Tabs
          dataEntrega={FormatarData(im.menorDataEntrega.toString())}
          dataImportacao={FormatarData(im.dataImportacao.toString())}
          id={FormatarId(im.idImportacao)}
          quantidade={im.quantidadeItens}
          total={im.totalImportacao}
          key={FormatarId(im.idImportacao)}
        >
          {props.dados.map(v => (
            <div className="container-table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Data Entrega</th>
                  <th>Descrição Produto</th>
                  <th>Quantidade</th>
                  <th>Valor Unitário</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{v.id}</td>
                  <td>{FormatarData(v.dataEntrega.toString())}</td>
                  <td>{v.nomeProduto}</td>
                  <td>{v.quantidade}</td>
                  <td>{v.valorUnitario}</td>
                </tr>
              </tbody>
            </table>
          </div>
          ))}
        </Tabs>
      )}
      <div>
        <button onClick={() => h.push("/Importacao")}>VOLTAR</button>
      </div>
    </Container>
  );
};

export default ImportPorId;
