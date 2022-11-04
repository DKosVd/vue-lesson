import TypeAviaService from '../service/typeAvia.js'

class TypeAviaController {
    constructor() {
        this.typeAvia = new TypeAviaService();
    }

    // eslint-disable-next-line no-unused-vars
    async getTypeAvia(req, res) {
        try {
            const typeAvia = await this.typeAvia.getTypeAvia();
            return res.json(typeAvia);
        } catch(err) {
            console.log('controller', err)
            return res.json(err);
        }
    }
}

export const TypeAviaCtrl = new TypeAviaController();