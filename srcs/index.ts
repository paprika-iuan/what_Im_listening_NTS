import { getLatest } from "./get_shows";
import { extractShowData } from "./interfaces";
import { generateBox } from "./box";

async function NTS() {
    const info = extractShowData(await getLatest());
    console.log(generateBox(info));
};

NTS();

// console.log(extractShowData(raw));