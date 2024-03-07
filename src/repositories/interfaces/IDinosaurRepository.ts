import type Dinosaur from "../../models/Dinosaur";
import { IDinosaur } from "../../models/Dinosaur";

export interface IDinosaurRepository {
 findAll(filter?: {}): Promise<IDinosaur[]>;
 findById(id: string): Promise<IDinosaur | null>;
 findByName(name: string): Promise<IDinosaur[]>;
 findByPeriod(period: string): Promise<IDinosaur[]>;
 findByType(type: string): Promise<IDinosaur[]>;
 count(filter?: {}): Promise<number>;
 create(dinosaur: Partial<IDinosaur>): Promise<IDinosaur>;
 update(id: string, dinosaur: Partial<IDinosaur>): Promise<IDinosaur | null>;
 delete(id: string): Promise<IDinosaur | null>;
}