import mongoose from "mongoose"; //importar mongoose

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }, 
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        }
    ],
    shippingAdress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },       

    }, 
    
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String},
        status: { type: String},
        update_time: { type: String},
        email_address: { type: String},
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date, 
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date,
    }  
     
    
    },
    {
        timestamps: true, //crea dos campos, uno para cuando se creo el usuario y otro para cuando se actualizo
    }
); //crear un nuevo esquema de mongoose

const Order = mongoose.model('Order', orderSchema); //crear un nuevo modelo de mongoose

export default Order; //exportar el modelo para usarlo en otro archivo js que lo importe y lo use en otro componente