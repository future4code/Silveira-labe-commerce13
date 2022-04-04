import React from "react";
import styled from "styled-components";
import ProdutoLista from "../Components/ProdutoLista"


class CardProdutos extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            qty: 0
        };


        //EVENTOS

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(){
        this.setState({
            qty: this.state.qty + 1
        })
    }

    remove(){
        this.setState({
            qty: this.state.qty - 1
        });
    }

    render() {
        return (
            <div>
                <div className="row form-group">
                    <div className="col-sm-10">
                        <h4>{this.props.nome}: R$ {this.props.preco}</h4>
                        </div>
                        <div className="col-sm-2 text-right">
                            Quatidade: {this.props.qty}
                        </div>
                        <div className="row btn-toolbar">

                            <div className="col-6">
                                <button className="btn btn-outline-primary">Informações</button>
                            </div>
                            <div className="col-6 text-right">
                                <button className="btn btn-outline-primary" onClick={this.add}>+</button>
                                <button className="btn btn-outline-primary" onClick={this.remove}>-</button>
                            </div>


                        </div>

                </div>
                <hr/>
            </div>
        )
    }
}
    
    
 



export default CardProdutos