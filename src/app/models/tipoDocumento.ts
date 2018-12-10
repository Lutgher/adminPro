export class TipoDocumento{
    constructor(
        public codeTipoDoc:String,
        public tipoDoc_desc_larg:String,
        public tipoDoc_desc_cort:String,
        public tipoDoc_long:Number,
        public tipoDoc_fech_reg:Date,
        public tipoDoc_fech_act:Date,
        public tipoDoc_usua:String,
    ){}
}