import React from "react";
import { Grid } from '@material-ui/core';

import Produto from "./Produto/Produto";



const produtos = [
    {id:1, nome: 'Roupa1', descricao:'Roupa De Astronauta', preco: 'R$100'},
    {id:2, nome: 'Roupa2', descricao:'Roupa De Astronauta', preco: 'R$200'},
    {id:3, nome: 'Roupa3', descricao:'Roupa De Astronauta', preco: 'R$150'}
]




const Produtos = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {produtos.map((produto) => (
                <Grid intem key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <Produto produto={produto} />
                </Grid>

            ))}

        </Grid>

    </main>
    );
   
}

export default Produtos