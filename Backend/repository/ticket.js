import {ticketModel} from '../models/ticket.js'

class Ticket {
    constructor() {
        this.ticket = ticketModel
    }

    async add(data) {
        try {
            return await this.ticket.create(data);
        } catch(err) {
            return err
        }
    }

    // eslint-disable-next-line no-unused-vars
    async get({typeOfAvia, transfer, page}) {
        try {
            let opts = {
                $and: []
            };
            
            let limit = (+page + 1) * 5;
            let transferAvia = transfer.split(',').sort();
            if(transferAvia.length === 0) {
                opts = {
                    "typeAvia": typeOfAvia
                }
            }
            if(!transferAvia.includes('all') && transferAvia.length > 0) {
                let optSize = {
                    $or: []
                }
                opts["$and"].push({
                    "typeAvia": typeOfAvia
                })
                transferAvia.forEach( elem => {
                    optSize['$or'].push({
                        "segments.stops": {$size: Number(elem)}
                    })
                })
                opts["$and"].push({
                    ...optSize
                })
            } else {
                opts["$and"].push({
                    "typeAvia": typeOfAvia
                })
            }
            // Запрос на получение данных
            return await this.ticket.find({
                ...opts
            })
            .populate({
                path: "carrier",
                model: "Avia",
                select: ['name']
            })
            .populate({
                path: "typeAvia",
                model: "TypeAvia",
                select: ["name"]
            })
            .populate({
                path: "segments.origin",
                model: "City",
                select: ['name']
            })
            .populate({
                path: "segments.destination",
                model: "City",
                select: ['name']
            })
            .populate({
                path: "segments.stops",
                model: "City",
                select: ['name']
            })
            .limit(limit)
            .exec()   
        } catch(err) {
            console.log(err.message)
            return err;
        }
    }
}

export default Ticket;