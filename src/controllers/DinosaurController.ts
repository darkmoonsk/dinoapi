import Dinosaur from "../models/Dinosaur";
import DinosaurRepository from "../repositories/DinosaurRepository";

class DinosaurController {
    async getAll() {
        return await DinosaurRepository.findAll();
    }

    async getById(id: string) {
        return await DinosaurRepository.findById(id);
    }

    async getByName(name: string) {
        return await DinosaurRepository.findByName(name);
    }

    async create(dinosaur: typeof Dinosaur) {
        return await DinosaurRepository.create(dinosaur);
    }

    async update(id: string, dinosaur: typeof Dinosaur) {
        return await DinosaurRepository.update(id, dinosaur);
    }

    async delete(id: string) {
        return await DinosaurRepository.delete(id);
    }
}

export default new DinosaurController();