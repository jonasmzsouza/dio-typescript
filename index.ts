function soma(a: number, b: number) {
    return a + b;
}

// interfaces
interface IAnimal {
    nome: String;
    tipo: 'terrestre' | 'aquátivo';
    domestico: Boolean,
    executarRugido(alturaEmmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}


const animal: IAnimal = {
    nome: 'Girafa',
    tipo: 'terrestre',
    domestico: false,
    executarRugido: (alturaEmmDecibeis) => (`${alturaEmmDecibeis}dB`)
}

animal.executarRugido(50)

const felino: IFelino = {
    nome: 'Leopardo',
    tipo: "terrestre",
    domestico: false,
    visaoNoturna: true,
    executarRugido: (alturaEmmDecibeis) => (`${alturaEmmDecibeis}dB`)
}
felino
.executarRugido(80)

// types
type IDomestico = IFelino | ICanino;

const animalT: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    executarRugido: (alturaEmmDecibeis) => (`${alturaEmmDecibeis}dB`)
}


// tratando a tag input
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

// Generic types
function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1);


// Desenvolvendo condicionais a partir de parâmetros
interface IUsuario {
    id: String;
    email: String;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }
    // redirecionar para a área de usuário
}

// Criando variáveis com propriedade readonly e private

interface ICachorro {
    nome: String;
    idade: Number;
    parqueFavorito?: String;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    nome;
    idade;
    parqueFavorito;

    constructor(nome: String, idade: Number, parqueFavorito: String) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}

const cao = new MeuCachorro('Bravo', 13, 'Ipirabuera')

// Como importar bibliotecas com typescript
interface IEstudante {
    nome: string;
    idade: number;
}

import $ from 'jquery';
$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função')
    }
});

$('body').novaFuncao();

export const numero = 2;

