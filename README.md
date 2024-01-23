# DinoAPI

![dinoapi-banner](https://github.com/darkmoonsk/dinoapi/assets/101902194/f3310efa-2961-4eb3-a978-6c00f6a4fdc6)

An API that provides historical data on various dinosaurs that lived on the face of the earth. This api, is made with PaleoDB data and others reliable data, but if you found errors you can open an issue with the correct data.

## Current Status

- The endpoints are currently not available online.
- The offline DB is currently not available, but it will be available soon.

## Current endpoints - working in progress (may be changed)

### /api/dinosaurs

Returns all dinosaurs

```json
[{
"_id": "65ab56b3978ff91b1c9eb074",
"name": "aardonyx",
"weight": "1700kg",
"height": "2m",
"length": "8.0m",
"diet": "herbivore",
"period": "jurassic",
"existed": "201.3 - 190.8 million years ago",
"region": "south africa",
"type": "terrestrial",
"description": "Aardonyx ...",
"image": "https://brunosouzadev-dinoapi.s3.sa-east-1.amazonaws.com/images/aardonyx.jpg",
"isPopular": false,
"createdAt": "2024-01-20T05:14:27.449Z",
"updatedAt": "2024-01-20T05:14:27.449Z",
"__v": 0
},
{
"_id": "65ab5bbf978ff91b1c9eb076",
"name": "abelisaurus",
"weight": "3000kg",
"height": "2m",
"length": "7.4m",
"diet": "carnivore",
"period": "cretaceous",
"existed": "83.5 - 70.6 million years ago",
"region": "south america",
"type": "terrestrial",
"description": "The large theropod Abelisaurus comahuensis was similar to Albertosaurus from Alberta ...",
"image": "https://brunosouzadev-dinoapi.s3.sa-east-1.amazonaws.com/images/abelisaurus.jpg",
"isPopular": false,
"createdAt": "2024-01-20T05:35:59.548Z",
"updatedAt": "2024-01-20T05:35:59.548Z",
"__v": 0
},
{
"_id": "65ac155886621fdaf2c40bc1",
"name": "abrictosaurus",
"weight": "3kg",
"height": "0.35m",
"length": "1.2m",
"diet": "herbivore/omnivore",
"period": "early jurassic",
"existed": "199 - 196 million years ago",
"region": "south africa",
"type": "terrestrial",
"description": "This dinosaur is known from the fossil remains of only two individuals...",
"image": "https://brunosouzadev-dinoapi.s3.sa-east-1.amazonaws.com/images/abrictosaurus.jpg",
"isPopular": false,
"createdAt": "2024-01-20T18:47:52.061Z",
"updatedAt": "2024-01-20T18:47:52.061Z",
"__v": 0
}, ...]
```

### /api/dinosaurs/:name

Return the specific dinosaur queried by name

```json
// /api/dinosaurs/abrosaurus

[
  {
    "_id": "65ac183c86621fdaf2c40bc3",
    "name": "abrosaurus",
    "weight": "4500kg",
    "height": "3.2m",
    "length": "9.1m",
    "diet": "herbivore",
    "period": "middle jurassic",
    "existed": "163.5 - 157.3 million years ago",
    "region": "asia",
    "type": "terrestrial",
    "description": "Abrosaurus was discovered in 1984 by Ouyang Hui. Hui first named his find in his 1986 thesis as A. gigantorhinus, or Abrosaurus Gigantorhinus. It's classification has gone under many changes since. The fossils that were found are extremely fragmented, and scientists are still unsure whether this is a separate genus or not. Like most sauropods, Abrosaurus was a quadrupedal herbivore but it was rather small for a sauropod, not much more than 30 feet (9 m) long. Its head was boxy and topped with a tall bony arch containing the nostrils.The generic name meaning 'delicate lizard (from from the Greek αβρος meaning 'delicate' or 'dainty' and σαυρος meaning 'lizard')', refers to the nature of the skull, with large openings separated by thin bony struts. The only named species is now known as A. dongpoi, and is named after eleventh century Chinese poet Su Shi, also known as Su Dongpo, who was born in Sichuan.",
    "image": "https://brunosouzadev-dinoapi.s3.sa-east-1.amazonaws.com/images/abrosaurus.jpg",
    "isPopular": false,
    "createdAt": "2024-01-20T19:00:12.429Z",
    "updatedAt": "2024-01-20T19:00:12.429Z",
    "__v": 0
  }
]
```

This project is under the MIT License. See the [LICENSE](https://github.com/darkmoonsk/dinoapi/blob/main/LICENSE) file for more details.
