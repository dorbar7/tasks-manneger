import mongoose from "mongoose";
import { CustomerModel } from "./customer-model";



export interface ITaskModel extends mongoose.Document{
   description: string
   dateCreated: string
   customerId : mongoose.Schema.Types.ObjectId
   completed: boolean

}


export const TaskSchema= new mongoose.Schema<ITaskModel>({
   description: {
    type: String,
    required:[true, "Missing task description "]
},
  customerId:{
    type:mongoose.Types.ObjectId
  },
  dateCreated:{
    type: String,
    required:  [true,"Missing date the task created"]
  },
  completed:{
    type:Boolean ,
    default: false
  }
},{
    versionKey: false,
    toJSON:{virtuals:true},
    id: false
})

TaskSchema.virtual("customer",{
    ref: CustomerModel,
    localField:"customerId",
    foreignField:"_id",
    justOne:true

})
export const TaskModel = mongoose.model<ITaskModel>("TaskModel",TaskSchema,"tasks")