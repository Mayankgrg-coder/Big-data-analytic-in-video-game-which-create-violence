const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/BSATGO`',
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
    
})