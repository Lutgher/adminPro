export class TipoComprobante{
    constructor(
        public tipoComp_code:String,
        public tipoComp_desc:String,
        public tipoComp_fech_reg:Date,
        public tipoComp_fech_act:Date,
        public tipoComp_usua:String
    ){}
}