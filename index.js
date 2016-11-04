var express     = require('express'),
    bodyParser  = require('body-parser'),
    // cors        = require('cors'),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    session     = require('express-session');

var blogCtrl = require('./controllers/blogCtrl'),
    userCtrl = require('./controllers/userCtrl'),
    config   = require('./config/config');

var app = express();

require('./config/passport')(passport);

app.use(session(config));
app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/login', passport.authenticate('local-signup'), userCtrl.login);
app.get('/current', userCtrl.getMe);
app.get('/logout', userCtrl.logout);

app.post('/blog', blogCtrl.create);
app.get('/blog', blogCtrl.read);
app.put('/blog/:id', blogCtrl.update);
app.delete('/blog/:id', blogCtrl.delete);

mongoose.connect(process.env.MONGO_LABS_URI);
mongoose.connection.once('open', function(){
	console.log("Connected to Mongo");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("listening to 80 or 3000");
});
