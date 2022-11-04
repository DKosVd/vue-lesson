import  Mongoose  from 'mongoose';
const {model, Schema} = Mongoose;

const AviaSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true,
        sparse: true,
        index: true
    }
}, 
{
    timestamps: true,
})


export const aviaModel = model('Avia', AviaSchema);
