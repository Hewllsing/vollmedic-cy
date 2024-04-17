import styled from "styled-components"
import escudo from './assets/escudo.png'
import calendario from './assets/calendario.png'
import like from './assets/like.png'
import sino from './assets/sino.png'


const Container = styled.section`
display: flex;
justify-content: space-between;
text-align: center;
width: 60%;
`

const Bloco = styled.div`
width: 20%;
background-color: var(--cinza-claro);
padding: 16px 8px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 8px;
`

const Texto = styled.p`
line-height: 19px;
color: var(--azul-escuro);
`

export default function Atividades() {
    return (
        <Container>
            <Bloco>
                <img src={escudo} alt="Escudo" />
                <Texto>Encontre Especialistas</Texto>
            </Bloco>
            <Bloco>
                <img src={calendario} alt="Calendário" />
                <Texto>Agende consultas</Texto>
            </Bloco>
            <Bloco>
                <img src={sino} alt="Sino" />
                <Texto>Defina lembretes</Texto>
            </Bloco>
            <Bloco>
                <img src={like} alt="Avaliação" />
                <Texto>Avalie o serviço</Texto>
            </Bloco>
        </Container>
    )
}