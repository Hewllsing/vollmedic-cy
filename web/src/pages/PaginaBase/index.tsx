import Cabecalho from "../../components/Cabecalho";
import { Outlet } from "react-router-dom";
import Rodape from "../../components/Rodape";

export default function PaginaBase() {
    return (
        <>
        <Cabecalho />
        <main>
            <Outlet />
        </main>
        <Rodape />
        </>
    )
}