import passport from "passport";
import passportLocal from "passport-local";
import { User, userModel } from "../models/user";

const LocalStrategy = passportLocal.Strategy;



export function localAuth(userinput:UserDTO) {
passport.serializeUser<any, any>((req, user, done) => {
    done(undefined, user);
});

passport.deserializeUser(async(id,done)=>{
const user= await userModel.findById(id);
done (null,user);    
});

passport.use('local-signup', new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},async(req,email,password,done)=>{
    const user = new userModel();
    user.email = email;
    user.password = password;
    await user.save();
    done(null,user)
}))
}