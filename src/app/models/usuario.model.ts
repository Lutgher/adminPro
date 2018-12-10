export class Usuario{
    constructor(
        public nombre: string,
        public email: string,
        public pass: string,
        public img?: string,
        public rol?: string,
        public google?: boolean,
        public _id?: string
    ){

    }
}