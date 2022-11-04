import express from 'express';
import cors from 'cors';
import {TicketCtrl} from './controller/ticket.js'
import {CityCtrl} from './controller/city.js'
import {TypeAviaCtrl} from './controller/typeAvia.js'
import './core/db.js'
import './models/avia.js'
import './models/city.js'
import './models/ticket.js'
import './models/typeAvia.js'

const app = express();
app.use(express.json())
app.use(cors())

app.get('/ticket', (req, res) => TicketCtrl.getTickets(req, res))
app.post('/ticket', (req, res) => TicketCtrl.addTicket(req, res))

app.post('/city', (req, res) => CityCtrl.addCity(req, res))

app.get('/avia', (req, res) => TypeAviaCtrl.getTypeAvia(req, res))

app.listen(3000, () => {
    console.log('Server started on port 3000')
})