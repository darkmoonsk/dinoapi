import { IDinosaur } from "../models/Dinosaur";
import { IDinosaurRepository } from "../repositories/interfaces/IDinosaurRepository";

class DinosaurController {
    DinosaurRepository: IDinosaurRepository;

    constructor(DinosaurRepository: IDinosaurRepository) {
        this.DinosaurRepository = DinosaurRepository;
    }

    async getAll(filter?: Partial<IDinosaur>) {
        return await this.DinosaurRepository.findAll(filter);
    }

    async getById(id: string) {
        return await this.DinosaurRepository.findById(id);
    }

    async getByName(name: string) {
        return await this.DinosaurRepository.findByName(name);
    }

    async count(filter?: Partial<IDinosaur>) {
        return await this.DinosaurRepository.count(filter);
    }

    async create(dinosaur: IDinosaur) {
        return await this.DinosaurRepository.create(dinosaur);
    }

    async update(id: string, dinosaur: Partial<IDinosaur>) {
        return await this.DinosaurRepository.update(id, dinosaur);
    }

    async delete(id: string) {
        return await this.DinosaurRepository.delete(id);
    }
}

export default DinosaurController;