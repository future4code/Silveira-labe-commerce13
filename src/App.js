import React from 'react';
import CardProdutos from './Components/CardProdutos';
import ProdutoLista from "./Components/ProdutoLista"
import styled from 'styled-components';




let produtoLista = [
  {
    id:1,
    nome:"Roupa1",
    preco:"100.0",
    imagem:"",
    quantidade: "4",
  },

  {
    id:1,
    nome:"Roupa2",
    preco:"100.0",
    imagem:"",
    quantidade: "4",
  },

  {
    id:1,
    nome:"Roupa3",
    preco:"100.0",
    imagem:"",
    quantidade: "4",
  },

  {
    id:1,
    nome:"Roupa4",
    preco:"100.0",
    imagem:"",
    quantidade: "4",
  },
]

function App() {
  return(
    <div>
      <CardProdutos/>
      <ProdutoLista/>
    </div>
  )
}
export default App;








 
