import React, { useEffect, useState } from "react";
import CardAviso from "../../components/CardAviso";
import Tabs from "../../components/tabs";
import api from "../../services/api";
import { Container } from "../Home/style";

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

interface Importacao {
  idImportacao: string;
  dataImportacao: Date;
  quantidadeItens: number;
  menorDataEntrega: Date;
  totalImportacao: number;
  dados: DadoLinha[];
}

const Importacao: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [importacoes, setImportacoes] = useState<Array<Importacao>>([] as Array<Importacao>);

  useEffect(() => {
    api.get("/").then((x) => {
      console.log(x);
      setImportacoes(x.data);
    });
  }, []);

  return (
    <Container>
      {importacoes.length > 0 ? importacoes.map((v) => (
        <Tabs
          dataEntrega={FormatarData(v.menorDataEntrega.toString())}
          dataImportacao={FormatarData(v.dataImportacao.toString())}
          id={FormatarId(v.idImportacao)}
          quantidade={v.quantidadeItens}
          total={v.totalImportacao}
          isOpen={open}
          setOpen={() => setOpen(!open)}
          key={v.idImportacao}
        >
          {v.dados.map((v) => (
            <div className="container-table" key={v.id}>
              <table>
                <tr>
                  <th>Id</th>
                  <th>Data Entrega</th>
                  <th>Descrição Produto</th>
                  <th>Quantidade</th>
                  <th>Valor Unitário</th>
                </tr>
                <tr>
                  <td>{FormatarId(v.id)}</td>
                  <td>{FormatarData(v.dataEntrega.toString())}</td>
                  <td>{v.nomeProduto}</td>
                  <td>{v.quantidade}</td>
                  <td>{v.valorUnitario}</td>
                </tr>
              </table>
            </div>
          ))}
        </Tabs>
      ))
      :
      <CardAviso />
    }
    </Container>
  );
};

export default Importacao;
