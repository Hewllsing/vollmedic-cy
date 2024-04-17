import IEndereco from "./IEndereco";

export default interface IClinica {
    email: string,
    nome: string,
    senha: string,
    endereco: IEndereco;
}