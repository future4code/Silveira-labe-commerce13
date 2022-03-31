import React from "react";

import {Card, CardMidia, CardConteudo, CardAcoes, Fontes, BotaoIcone} from '@material-ui/core';
import {AddCarrinhoDeCompra} from '@material-ui/icons';

import useStyled from './styles';

const Produto = (props) => {

    const classes = useStyled();

    return (
        <Card className={classes.root}>
            <CardMidia  className={classes.midia} image='' title={produto.nome} />
            <CardConteudo>
                <div className="classes.cardConteudo">
                    <Fontes variante="h5" gutterBottom>
                        {produto.nome}

                    </Fontes>
                    <Fontes variante="h5" gutterBottom>
                        {produto.preco}

                    </Fontes>
                </div>
                <Fontes variante="h2" color="textSecondary">{produto.descricao}</Fontes>

            </CardConteudo>

            <CardAcoes dissbleSpacing className={classes.cardAcoes}>
                <BotaoIcone aria-label="Adiciona ao Carrinho">
                    <AddCarrinhoDeCompra/>
                </BotaoIcone>

            </CardAcoes>

        </Card>
    )
}


export default Produto