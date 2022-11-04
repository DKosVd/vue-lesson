import CityService from '../service/city.js'

class CityController {
    constructor() {
        this.city = new CityService();
    }

    // eslint-disable-next-line no-unused-vars
    // async getCities(req, res) {
    //     try {
    //         const tickets = await this.ticket.getTickets();
    //         return res.json(tickets);
    //     } catch(err) {
    //         return res.json(err);
    //     }
    // }
    
    async addCity(req, res) {
        try {
             // eslint-disable-next-line no-unused-vars
            const city = await this.city.addCity(req);
            return res.status(201).json({
                code: 201,
                status: 'created',
                data: city
            })
        } catch(err) {
            return res.status(500);
        }
    }
}

export const CityCtrl =  new CityController();