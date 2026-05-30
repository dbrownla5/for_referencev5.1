import { Router, type IRouter } from "express";
import healthRouter from "./health";
import voiceRouter from "./voice";
import contactRouter from "./contact";
import handshakeRouter from "./handshake";

const router: IRouter = Router();

router.use(healthRouter);
router.use(voiceRouter);
router.use(contactRouter);
router.use(handshakeRouter);

export default router;
