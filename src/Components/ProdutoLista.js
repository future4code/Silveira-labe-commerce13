import React from "react";
import App from "../App";
import CardProdutos from "./CardProdutos";


class ProdutoLista extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          produtoLista:""
        };

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({produtoLista : produtoLista})
        }, 1000);
    }

    render() {
        if (!this.state.produtoLista) return <p>Carregando...</p>

        var component = this;
        var produtos = this.state.produtoLista.map(function(produto){
            return(
                <Produto
                nome={produto.nome}
                preco={produto.preco}
                />
            )
        });

        return(
            <div>
                
                {produtos}
            
            </div>
            
        )
    }
}