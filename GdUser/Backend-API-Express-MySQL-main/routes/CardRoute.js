import express from "express";
import {
    getCards, 
    getCardById,
    createCard,
    updateCard,
    deleteCard
} from "../controllers/CardController.js";

const router = express.Router();

router.get('/card', getCards);
router.get('/card/:id', getCardById);
router.post('/card', createCard);
router.patch('/card/:id', updateCard);
router.delete('/card/:id', deleteCard);

export default router;