import {TypeAviaModel} from '../models/typeAvia.js'

class TypeAvia {
    constructor() {
        this.typeAvia = TypeAviaModel
    }
    async get() {
        try {
            const typesAvia = await this.typeAvia.find({}).exec();
            return typesAvia;
        } catch(err) {
            console.log(err)
            return err;
        }
    }
}

export default TypeAvia;