class Disco {
    //Propiedades
    nome;
    grupo;
    anoPublicacion;
    xenero;
    prestado;
    //Constructor
    constructor (nome, grupo, anoPublicacion, xenero, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.anoPublicacion = anoPublicacion;
        this.xenero = xenero;
        this.prestado = prestado;
    }
    //Carga de datos en el disco:
    cargarDatos (nome, grupo, anoPublicacion, xenero, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.anoPublicacion = anoPublicacion;
        this.xenero = xenero;
        this.prestado = prestado;
    }
    //Información disco
    informacionDisco () {
        console.log(`INFORMACIÓN:\n-Nome: ${this.nome}\n-Grupo: ${this.grupo}\n-Ano de publicación: ${this.anoPublicacion}\n-Xénero: ${this.xenero}\n-Prestado: `+ (this.prestado?"Si":"No") + ("\n\n"));
    }
    static mostrarColeccionDiscos (coleccionDiscos) {
        for (let i in coleccionDiscos) {
            coleccionDiscos[i].informacionDisco();
        }
    }
}

let disco1 = new Disco ("nome1", "grupo1", 1, "xenero1", true);
let disco2 = new Disco ("nome2", "grupo2", 2, "xenero2", false);
let disco3 = new Disco ("nome3", "grupo3", 3, "xenero3", true);

let coleccionDiscos = [
    disco1,
    disco2,
    disco3
]
disco1.informacionDisco();
Disco.mostrarColeccionDiscos(coleccionDiscos);