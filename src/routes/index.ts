import { Request, Response, Router } from "express"; 

const router = Router();

// GET /api
router.get("/", (_: Request, res: Response) => {
    res.send("Hello World!");
});

export default router;