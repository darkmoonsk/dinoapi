import * as yup from "yup";


export const dinosaurSchema = yup.object({
    name: yup.string().required(),
    weight: yup.string().required(),
    height: yup.string().required(),
    length: yup.string().required(),
    diet: yup.string().required(),
    period: yup.string().required(),
    existed: yup.string().required(),
    region: yup.string().required(),
    type: yup.string().oneOf(["terrestrial", "flying", "aquatic"]).required(),
    description: yup.string().required(),
    image: yup.string().required(),
    isPopular: yup.boolean().required(),
});