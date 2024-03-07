import Dinosaur, { IDinosaur } from "../models/Dinosaur";
import { IDinosaurRepository } from "./interfaces/IDinosaurRepository";

class DinosaurRepository implements IDinosaurRepository {
    async findAll(filter?: {}): Promise<IDinosaur[]> {
        return await Dinosaur.find(filter || {});
    }
    
    async findById(id: string): Promise<IDinosaur | null> {
        return await Dinosaur.findById(id);
    }

    async findByName(name: string): Promise<IDinosaur[]> {
        return await Dinosaur.find({ name: name });
    }

    async findByPeriod(period: string): Promise<IDinosaur[]> {
        return await Dinosaur.find({ period: period });
    }

    async findByType(type: string): Promise<IDinosaur[]> {
        return await Dinosaur.find({ type: type });
    }

    async count(filter?: {}) {
        return await Dinosaur.countDocuments(filter || {});
    }
    
    async create(dinosaur: IDinosaur): Promise<IDinosaur> {
        return await Dinosaur.create(dinosaur);
    }
    
    async update(id: string, dinosaur: Partial<IDinosaur>): Promise<IDinosaur | null> {
        return await Dinosaur.findByIdAndUpdate(id, dinosaur, { new: true });
    }
    
    async delete(id: string): Promise<IDinosaur | null> {
        return await Dinosaur.findByIdAndDelete(id);
    }
}

export default new DinosaurRepository();