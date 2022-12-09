import mongoose from "mongoose";

const firstSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: {
        type: Number, required: true,
        min: 18, max: 50
    },

    fees: {
        type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50
    },
    hobbies: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }

})


// Here You use the word members which createcollection with the name of Members//
const firstSchemaSend = mongoose.model('member', firstSchema)


// Update By ID 

// const updateFunction =  (id) => {
//     firstSchemaSend.findByIdAndUpdate(id, { name: 'Gourav' },
//     function (err, docs) {
// if (err){
// console.log(err)
// }
// else{
// console.log("Updated User : ", docs);
// }
// });
// }

// Updatae Single Document  
// const updateFunction =  (id) => {
//     firstSchemaSend.updateOne({_id : id}, { name: 'Ahmed Raza Jafri !!!!!!' },
//     function (err, docs) {
// if (err){
// console.log(err)
// }
// else{
// console.log("Updated User : ", docs);
// }
// });
// }

// Upsert do this thing if the id you give not exist it create the document

// const updateFunction =  (id) => {
//     firstSchemaSend.updateOne({_id : id}, { name: 'Muhammad Nadeem Hashmi' }, {upsert: true},
//     function (err, docs) {
// if (err){
// console.log(err)
// }
// else{
// console.log("Updated User : ", docs);
// }
// });
// }

// The First Value is Kind Of Filter


// here i am give feeS in the position of id
// const updateFunction =  (id) => {
//     firstSchemaSend.updateOne({ name :id }, {name : 'Ahmed Raza Sunni'  }, {upsert: true},
//     function (err, docs) {
// if (err){
// console.log(err)
// }
// else{
// console.log("Updated User : ", docs);
// }
// });
// }

// Update Many Collections 
const updateFunction =  (id) => {
    firstSchemaSend.findByIdAndDelete((id), function (err, docs) {
if (err){
console.log(err)
}
else{
console.log("Delete User : ", docs);
}
});
}

export default updateFunction;




// If we want to about something than we use

// console.log(firstSchema.path('age'))


// Compiling Schema 

