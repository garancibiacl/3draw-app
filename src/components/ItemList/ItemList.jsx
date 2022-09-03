import { React } from "react";
import Card from "../Card/Card";

export const ItemList = ({ data }) => {
  return (
    <div className="row">

      <div className="d-flex mb-3" style={{ gridGap: "20px" }}>
        {data.map((producto) => (
          <Card  producto={producto} key={producto.id} />
        ))}
     
      </div>
    </div>
  );
};
