import mongoose from "mongoose";



export interface ICustomerModel extends mongoose.Document{
    name : string
    occupation:string
    phone:string
    email:string


}


export const CustomerSchema= new mongoose.Schema<ICustomerModel>({
    name:{
        type: String,
        required: [true , "Missing name"]
    },
    occupation:{
        type:String,
        required:[true, "Missing  occupation"]
    },
    phone:{
        type:String,
        required:[true,"Missing phone number"]
    },
    email:{
        type:String,
        required:[true,"Missing email address"]
    }
})


export const CustomerModel = mongoose.model<ICustomerModel>("CustomerModel",CustomerSchema,"customers")