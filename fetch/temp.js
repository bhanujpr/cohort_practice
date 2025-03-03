const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bhanurajawatt:hearthacker98@cluster0.rldof.mongodb.net/');

const Cat = mongoose.model('Users', { name: String , username:String });

const kitty = new Cat({ name: 'Zildhhhhhhhhjian' , username:'jiiiii'});
kitty.save().then(() => console.log('meow'));