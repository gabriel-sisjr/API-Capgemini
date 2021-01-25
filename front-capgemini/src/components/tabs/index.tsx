import React, { useState } from "react";
import { ContainerTabs } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  id: string;
  dataImportacao: string;
  quantidade: number;
  dataEntrega: string;
  total: number;
  isOpen?: boolean;
  setOpen: (boolean: boolean) => void;
}

const Tabs: React.FC<IProps> = ({
  id,
  dataImportacao,
  quantidade,
  dataEntrega,
  total,
  isOpen = false,
  setOpen,
  children,
}) => {
  return (
    <ContainerTabs aberto={isOpen}>
      <ul className="props-tab">
        <li>{id}</li>
        <li>{dataImportacao}</li>
        <li>{quantidade}</li>
        <li>{dataEntrega}</li>
        <li>{total}</li>
        <FontAwesomeIcon icon={faArrowDown} onClick={() => setOpen(!isOpen)} />
      </ul>
      <div className="opacity">{children}</div>
    </ContainerTabs>
  );
};

export default Tabs;
