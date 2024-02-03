export default function replaceHyphensWithSpaces(obj: any) {
    const newObj: any = {};
    for (const key in obj) {
        newObj[key] = obj[key].replace(/-/g, " ");
    }
    return newObj;
}