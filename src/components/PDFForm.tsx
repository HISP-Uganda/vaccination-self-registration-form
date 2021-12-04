import { PDFViewer } from "@react-pdf/renderer";
import { useStore } from "effector-react";
import { $store } from "../Store";
import { Registration } from "./Registration";
import { useHistory } from "react-router-dom";

export const PDFForm = () => {
  const store = useStore($store);
  let history = useHistory();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button onClick={() => history.push("/")}>Back</button>
      <PDFViewer width="100%" height="100%">
        <Registration {...store} />
      </PDFViewer>
      ,
    </div>
  );
};
