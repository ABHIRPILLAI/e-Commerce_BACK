// import mongoose

const mongoose=require("mongoose")


//define connection string

mongoose.connect("mongodb://localhost:27017/cart",()=>{
    console.log("Connected to MongoDb");
})//add .cart coz when we copy it is only till 27017

//model creation

const Product=mongoose.model('Product',{
        id:Number,
        title:String,
        price:Number,
        description:String,
        category:String,
        image:String,
        rating:{
            rate:Number,
            count:Number
        }
})

const Wishlist=mongoose.model('Wishlist',{
    id:String,
    title:String,
    price:Number,
    description:String,
    image:String,

})




//export

module.exports={
    Product,Wishlist
}