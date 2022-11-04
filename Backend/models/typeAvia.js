import  Mongoose  from 'mongoose';
const {model, Schema} = Mongoose;

const TypeAviaSchema = new Schema({
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


export const TypeAviaModel = model('TypeAvia', TypeAviaSchema);
