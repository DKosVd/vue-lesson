import  Mongoose  from 'mongoose';
const {model, Schema} = Mongoose;

const TicketSchema = new Schema({
    price: {
        required: true,
        type: Number,
    },
    carrier: {
        type: Schema.Types.ObjectId,
        ref: 'Avia'
    },
    typeAvia: {
        type: Schema.Types.ObjectId,
        ref: "TypeAvia"
    },
    segments: [{
          origin: {
                type: Schema.Types.ObjectId,
                ref: 'City'
          },
          destination: {
                type: Schema.Types.ObjectId,
                ref: 'City'
          },
          date: {
              required: true,
              type: String
          },
          stops: [{
              type: Schema.Types.ObjectId,
              ref: 'City'
          }],
          duration: {
              required: true,
              type: Number
          },
    }]
}, 
{
    timestamps: true,
})



export const ticketModel = model('Ticket', TicketSchema);
