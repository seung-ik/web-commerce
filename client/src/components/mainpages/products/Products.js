import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

function Products() {
  const state = useContext(GlobalState);
  const [products] = state.productApi.products;
  console.log(state);
  return <div>products</div>;
}

export default Products;
