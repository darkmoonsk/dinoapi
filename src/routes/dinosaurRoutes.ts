import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { dinosaurParamsValidators } from "../validators/DinosaurParamsValidator";
import { IDinosaur } from "../models/Dinosaur";
import replaceHyphensWithSpaces from "../utils/replaceHyphensWithSpaces";
import { dinosaurSchema } from "../models/DinosaurSchema";
import DinosaurRepository from "../repositories/DinosaurRepository";
import DinosaurController from "../controllers/DinosaurController";

const router = Router();


router.get("/", dinosaurParamsValidators, async (req: Request, res: Response) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ message: "Invalid query parameters", errors: erros.array() });
  }

  const dinosaurParams: IDinosaur = replaceHyphensWithSpaces(req.query);

  try {
    const dinosaurController = new DinosaurController(DinosaurRepository);
    const dinosaurs = await dinosaurController.getAll(dinosaurParams);
    res.status(200).json(dinosaurs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


router.get("/total", dinosaurParamsValidators, async (req: Request, res: Response) =>{
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ message: "Invalid query parameters", errors: erros.array() });
  }

  const dinosaurParams: IDinosaur = replaceHyphensWithSpaces(req.query);

  try {
    const dinosaurController = new DinosaurController(DinosaurRepository);
    const total = await dinosaurController.count(dinosaurParams);
    res.status(200).json({ total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name.toLowerCase();
    const dinosaurController = new DinosaurController(DinosaurRepository);
    const dinosaur = await dinosaurController.getByName(name);
    res.status(200).json(dinosaur);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Dinosaur not found" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const secret = req.headers.secret;

  if (secret !== process.env.API_SECRET) {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const dinosaur = await dinosaurSchema.validate(req.body);
    const dinosaurController = new DinosaurController(DinosaurRepository);
    await dinosaurController.create(dinosaur);
    res.status(201).json(dinosaur);
  } catch (error) {
    console.error(error);
    res.status(400)
      .json({ message: "Dinosaur record not created, check the data sent" });
  }
});

export default router;
