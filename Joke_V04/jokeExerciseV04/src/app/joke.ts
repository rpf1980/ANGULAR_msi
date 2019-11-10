export class Joke {
    titulo: string;
    texto: string;
    hide: boolean;

    constructor(titulo:string, texto:string) {
        this.titulo = titulo;
        this.texto = texto;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}
