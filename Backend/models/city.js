import  Mongoose  from 'mongoose';
const {model, Schema} = Mongoose;

const CitySchema = new Schema({
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


export const cityModel = model('City', CitySchema);
