// import TicketRepository from '../repository/ticket.js';
import CityRepository from '../repository/city.js'
class CityService {
    constructor() {
        this.city = new CityRepository();
    }

    async addCity(req) {
        try {
            return this.city.add(req.body);
        } catch(err) {
            return err;
        }
    }
}

export default CityService;