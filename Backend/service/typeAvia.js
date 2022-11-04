import TypeAvia from '../repository/typeAvia.js'

class TypeAviaService {
    constructor() {
        this.typeAvia = new TypeAvia();
    }

    // eslint-disable-next-line no-unused-vars
    async getTypeAvia(_req) {
        try {
            return this.typeAvia.get();
        } catch(err) {
            return err;
        }
    }
}

export default TypeAviaService;