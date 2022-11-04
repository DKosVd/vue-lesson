import {cityModel} from '../models/city.js'

class City {
    constructor() {
        this.city = cityModel
    }
    async add(data) {
        try {
            const city = await this.city.create(data)
            return city   
        } catch(err) {
            console.log(err)
            return err;
        }
    }
}

export default City;