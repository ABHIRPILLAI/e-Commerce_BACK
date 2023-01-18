const db=require('./db')//to connect database

//to get all the products from db

const getProducts =()=>
{
 return db.Product.find().then(
    (result)=>{
        if (result) {
            return{
                status:true,
                statusCode:200,
                products:result
            }
            
        }
        else{
            return{
                status:true,
                statusCode:404,
                message:"No product Found"
            }
        }
    })

    
}

const addtowishlist =(id,title,price,image,description)=>
{
    return db.Wishlist.findOne({id}).then(
           (result)=>{
            if (result){
            return {
                status:true,
                statusCode:200,
                message:"Product already exist"
                
            }
        }
            else {
                const newProduct = new db.Wishlist({ id,title,price,image,description})
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"Product Added Successfully"
                }

            }
        }
           
    )
    //create a model

       


}

const getwishlist=()=>
{
    return db.Wishlist.find().then(
        (result)=>
        {
            if (result) {
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"Your Wishlist is Empty"
                }
            }
        }
    )
}

deletewish=(id)=>
{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>
        {
            if (result) {
                // return{
                //     status:true,
                //     statusCode:200,
                //     wishlist:result,
                //     message:"Product Removed    "
                // }
                 return db.Wishlist.find().then(
        (result)=>
        {
            if (result) {
                return{
                    status:true,
                    statusCode:200,
                    wishlist:result,
                    message:"Product Removed succeessfully"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"Product not found"
                }
            }
        }
    )
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"Your Wishlist is Empty"
                }
            }
        }
    )
}

module.exports={
    getProducts,addtowishlist,getwishlist,deletewish
}










































































































