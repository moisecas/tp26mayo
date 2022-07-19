import mongoose from "mongoose"; //importar mongoose

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true, min: 0, max: 5},
    comment: {type: String, required: true}, 
},{
    timestamps: true, //crea dos campos, uno para cuando se creo el usuario y otro para cuando se actualizo
})

const productSchema = mongoose.Schema(
    {
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    image: {
        type: String,
        required: true,
    }, 
    brand: {
        type: String,
        required: true
        
    },
    category: {
        type: String,
        required: true,
    }, 
    
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true, //crea dos campos, uno para cuando se creo el usuario y otro para cuando se actualizo
});

const Product = mongoose.model("Product", productSchema);

export default Product;