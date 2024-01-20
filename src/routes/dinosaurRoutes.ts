import { Router } from "express";
import dinosaurController from "../controllers/DinosaurController";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const dinosaurs = await dinosaurController.getAll();
        res.status(200).json(dinosaurs);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
});

router.get("/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const dinosaur = await dinosaurController.getByName(name);
        res.status(200).json(dinosaur);
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "Dinosaur not found"});
    }
});

router.post("/", async (req, res) => {
    try {
        const dinosaur = req.body;
        await dinosaurController.create(dinosaur);
        res.status(201).json(dinosaur);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
});

export default router;