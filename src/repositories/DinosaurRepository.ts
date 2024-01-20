
import Dinosaur from "../models/Dinosaur";

class DinosaurRepository {
    async findAll() {
        return await Dinosaur.find();
    }
    
    async findById(id: string) {
        return await Dinosaur.findById(id);
    }

    async findByName(name: string) {
        return await Dinosaur.find({ name: name });
    }

    async findByPeriod(period: string) {
        return await Dinosaur.find({ period: period });
    }

    async findByType(type: string) {
        return await Dinosaur.find({ type: type });
    }
    
    async create(dinosaur: typeof Dinosaur) {
        return await Dinosaur.create(dinosaur);
    }
    
    async update(id: string, dinosaur: typeof Dinosaur) {
        return await Dinosaur.findByIdAndUpdate(id, dinosaur, { new: true });
    }
    
    async delete(id: string) {
        return await Dinosaur.findByIdAndDelete(id);
    }
}

export default new DinosaurRepository();