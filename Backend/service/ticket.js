import TicketRepository from '../repository/ticket.js';

class TicketService {
    constructor() {
        this.ticket = new TicketRepository();
    }

    async addTicket(req) {
        try {
            return await this.ticket.add(req.body)
        } catch(err) {
            return err
        }
    }

    async getTickets(type) {
        try {
            return await this.ticket.get(type);
        } catch(err) {
            return err;
        }
    }
}

export default TicketService;