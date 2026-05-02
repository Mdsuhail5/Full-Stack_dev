// Database

1.first import the mongoose library
    const mongoose=require('mongoose');

2.connect the mongodb server
    mongoose.connect('server url');

3.create a model
    const Cat =mongoose.model('cats',{
        name: String,
        price: String
    });

4.create the model object for db
    const Cat_1=new Cat({
        name:pursion,
        price:45,000
    });

5.Save the object to db
    Cat_1.save();