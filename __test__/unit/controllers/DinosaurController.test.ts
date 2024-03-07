import { test, expect, vi, describe } from "vitest";
import DinosaurController from "../../../src/controllers/DinosaurController";
import { IDinosaur } from "../../../src/models/Dinosaur";

const dummyDB = [
  {
    id: "1",
    name: "velociraptor",
    weight: "1000kg",
    height: "1.5m",
    length: "2m",
    diet: "carnivore",
    period: "late cretaceous",
    existed: "105 million years ago",
    region: "africa",
    type: "terrestrial",
    description: "lorem ipsum",
    image: "image.png",
    isPopular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "triceratops",
    weight: "1000kg",
    height: "1.5m",
    length: "2m",
    diet: "herbivore",
    period: "late cretaceous",
    existed: "105 million years ago",
    region: "africa",
    type: "terrestrial",
    description: "lorem ipsum",
    image: "image.png",
    isPopular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "brachiosaurus",
    weight: "3000kg",
    height: "12m",
    length: "25m",
    diet: "herbivore",
    period: "late jurassic",
    existed: "150 million years ago",
    region: "north america",
    type: "terrestrial",
    description: "lorem ipsum",
    image: "image.png",
    isPopular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "tyrannosaurus rex",
    weight: "7000kg",
    height: "3m",
    length: "12m",
    diet: "carnivore",
    period: "late cretaceous",
    existed: "66 million years ago",
    region: "north america",
    type: "terrestrial",
    description: "lorem ipsum",
    image: "image.png",
    isPopular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockDinosaurRepository = {
  findAll: vi.fn().mockImplementation(() => dummyDB),
  findById: vi.fn().mockImplementation((id) => dummyDB.find((item) => item.id === id)),
  create: vi.fn().mockImplementation((dinosaur) => {
    dummyDB.push(dinosaur);
    return dummyDB[dummyDB.length - 1];
  }),
  update: vi.fn().mockImplementation((id, dinosaur) => {
    dummyDB[id] = {
      ...dummyDB[id],
      ...dinosaur,
    };
    return dummyDB[id];
  }),
  delete: vi.fn().mockImplementation((id) => {
    const index = dummyDB.findIndex((item) => item.id === id);
    if (index > -1) {
      dummyDB.splice(index, 1);
    }
    return {};
  }),
  findByName: vi.fn()
    .mockImplementation((name) => dummyDB.filter((item) => item.name === name)),
  findByPeriod: vi.fn()
    .mockImplementation((period) =>
      dummyDB.filter((item) => item.period === period)
    ),
  findByType: vi.fn()
    .mockImplementation((type) => dummyDB.filter((item) => item.type === type)),
  count: vi.fn().mockImplementation(() => dummyDB.length),
};

describe("Testing DinosaurController", () => {
  test("Should return an array of dinosaurs", async () => {
    const spy = vi.spyOn(mockDinosaurRepository, "findAll");
    const controller = new DinosaurController(mockDinosaurRepository);

    const result = await controller.getAll();
    expect(result.length).greaterThan(0);
  });

  test("should return a dinosaur by id", async () => {
    const spy = vi.spyOn(mockDinosaurRepository, "findById");
    const controller = new DinosaurController(mockDinosaurRepository);

    const result = await controller.getById("1");
    expect(result).toEqual(dummyDB[0]);
  });

  test("should create a new dinosaur", async () => {
    const spy = vi.spyOn(mockDinosaurRepository, "create");
    const controller = new DinosaurController(mockDinosaurRepository);

    const newDinosaur: IDinosaur = {
      name: "Paraceratops",
      weight: "1000kg",
      height: "2m",
      length: "3m",
      diet: "herbivore",
      period: "Cretaceous",
      existed: "100 million years ago",
      region: "North America",
      type: "terrestrial",
      description:
        "Large herbivorous dinosaurs with large heads and long bodies.",
      image: "https://example.com/triceratops.jpg",
      isPopular: true,
    }

    const result = await controller.create(newDinosaur);
    expect(result).toEqual(newDinosaur);
  });

  test("should update a dinosaur", async () => {
    const spy = vi.spyOn(mockDinosaurRepository, "update");
    const controller = new DinosaurController(mockDinosaurRepository);

    const result = await controller.update("3", {
      name: "Titanosaurus",
      weight: "20000kg",
    });
    expect(result?.name).toEqual("Titanosaurus");
    expect(result?.weight).toEqual("20000kg");
  });
});
