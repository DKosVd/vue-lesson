import TicketService from '../service/ticket.js'

class TicketController {
    constructor() {
        this.ticket = new TicketService();
    }

    // eslint-disable-next-line no-unused-vars
    async getTickets(req, res) {
        try {   
            console.log(req.query)
            const tickets = await this.ticket.getTickets(req.query);
            return res.json(tickets);
        } catch(err) {
            console.log('controller', err)
            return res.json(err);
        }
    }

    async addTicket(req, res) {
        try {  
            const ticket = await this.ticket.addTicket(req)
            return res.status(201).json({
                data: ticket
            })

        } catch(err) {
            return res.json(err)
        }
    }
}

export const TicketCtrl = new TicketController();