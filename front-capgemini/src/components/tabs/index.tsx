import React from "react";
import { ContainerTabs } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface IProps {
  id: string;
  dataImportacao: string;
  quantidade: number;
  dataEntrega: string;
  total: number;
}

const Tabs: React.FC<IProps> = ({
  id,
  dataImportacao,
  quantidade,
  dataEntrega,
  total,
  children,
}) => {
  return (
    <ContainerTabs>
      <ul className="props-tab">
        <li>{id}</li>
        <li>{dataImportacao}</li>
        <li>{quantidade}</li>
        <li>{dataEntrega}</li>
        <li>{total}</li>
        <NavLink to={`Importacao/${id}`}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </ul>
      <div className="opacity">{children}</div>
    </ContainerTabs>
  );
};

export default Tabs;
