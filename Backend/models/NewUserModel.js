import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    picture: { type: Buffer }, // Assuming single picture. If multiple, use [Buffer].
    orderlist: [{
        productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Assuming 'Product' is another model
        title: { type: String },
        qty: { type: Number },
        price: { type: Number }
    }]
});

const registeredUser = mongoose.model('Registered_User', userSchema);

export default registeredUser;
