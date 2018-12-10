export class Producto{
    constructor(
        public idProd: number,
        public cat_desc: string,
        public producto: string,
        public prod_stock: Number,
        public undMed_abre: string,
        public prod_prec_may: number,
        public prod_prec_min: number,
        public prod_prec_und: number,
        public prod_stock_und: number
    ){}
}