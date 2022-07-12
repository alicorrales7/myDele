import passport from "passport";
import passportLocal from "passport-local";
import { User, userModel } from "../models/user";
import { app } from "../server";
import session from "express-session";
import cookieParser from "cookie-parser";
const LocalStrategy = passportLocal.Strategy;


export function localAuth() {
passport.serializeUser<any, any>((req,user, done) => {
    done(undefined, User.name);
});

passport.deserializeUser(async(id,done)=>{
const user= await userModel.findById(id);
done (null,User);    
});

passport.use('local-signup', new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},async(req,email,password,done)=>{
    const user = new userModel();
    user.email = req.params.email;
    user.password = req.params.password;
    await user.save();
    done(null,user)
}))

passport.use('login',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},(req,email,password,done)=>{
try {
    const userexist = userModel.find({email:'email'});
    if(!userexist){
      return done(null,false)
    }
    const validatepass = userModel.find({password:'password'});
    if(!validatepass){
        return done(null,false)
    }
    return done(null,User)

} catch (error) {
    return done(error)
    
}

}));
}
