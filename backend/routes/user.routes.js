import express from  "express"
import { getUserSidebar } from "../controllers/user.controllers.js";
import protectedRoutes from "../middleware/protectedRoutes.js";

const router = express.Router();


router.get("/",protectedRoutes,getUserSidebar)



export default router;