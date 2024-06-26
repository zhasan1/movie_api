const mongoose = require("mongoose");
    bcryptjs = require("bcryptjs");

let movieSchema = mongoose.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Genre: {
        Name: String,
        Description: String,
    },
    Director: {
        Name: String,
        Bio: String,
    },
    Actors: [String],
        ImagePath: String,
        Featured: Boolean,
});

// let directorSchema = mongoose.Schema ({
//     Name: { type: String, required: true },
//     Bio: { type: String, required: true },
// });


let userSchema = mongoose.Schema({
    Username: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true },
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync (password , 10);
};

userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password , this.Password);
};

let Movie = mongoose.model("Movie", movieSchema);
let User = mongoose.model("User", userSchema);
// let Director = mongoose.model("Director" , directorSchema);

module.exports.Movie = Movie;
module.exports.User = User;
// module.exports.Director = Director;