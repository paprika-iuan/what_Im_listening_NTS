import { getLatest } from "./get_shows";
import { extractShowData } from "./interfaces";

async function NTS() {
    console.log(extractShowData(await getLatest()));
};

NTS();

// console.log(extractShowData(raw));