import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Botao from "../Botao";
import Card from "./Card";

const SecaoCard = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`

function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return (
        <>
            <SecaoCard>
                {profissionais && profissionais.length 
                ? 
                profissionais?.map((profissional) => {
                  return <Card profissional={profissional} />
                } )
                : 
                "Não há avaliações para mostrar"}
            </SecaoCard>
{profissionais && profissionais.length > 4 ?
            <Botao>Ver mais</Botao>
        : ""
        }
        </>
    )
}

export default Avaliacao;