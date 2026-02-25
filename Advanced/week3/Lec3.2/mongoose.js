const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yadavkhushal25_db_user:kh12345678@cluster0.1xmuwvo.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String,email:String,password:String });

const user = new User({ name: 'Khushal Singh',email:'kh@gmail.com',password:'123456' });
user.save()