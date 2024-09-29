import express from "express";
import {sendMessage,getMessage} from "../controllers/message.controller.js"
import protectedRoutes from "../middleware/protectedRoutes.js";


const router = express.Router();

router.get("/:id",protectedRoutes,getMessage)
router.post("/send/:id",protectedRoutes,sendMessage)




export default router;
 