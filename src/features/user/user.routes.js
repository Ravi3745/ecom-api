

// Manage path to productController

import express from 'express';

import upload from '../../middlewares/fileupload.middleware.js'
import { UserController } from './user.controller.js';
// Initialize Express router

const router = express.Router();

const userController = new UserController();


router.post("/signup", userController.signUp);

router.post("/signin",userController.signIn);

export default router;