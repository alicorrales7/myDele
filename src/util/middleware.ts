import { app } from "../server";
import passport from 'passport';
import session from 'express-session';
import express, { urlencoded } from 'express';
import cookieParser from "cookie-parser";

export function middleware(){ 
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser('Secret Mydele'));
app.use(session({
    secret: 'Secret Mydele',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
}
