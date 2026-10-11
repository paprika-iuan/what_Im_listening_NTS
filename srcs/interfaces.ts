export interface ShowData {
	id: string;
	generes: string;
	description: string;
	date: string;
	soundcloud: string;
	img: string;
	link: string;
	NTSLogo: string;
}

export function extractShowData(show: string): ShowData {
	const info: ShowData = {
		id: limitLength((show.embeds.episodes.results[0].name).toUpperCase(), 50),
		generes: formatGeneres(show.embeds.episodes.results[0].genres),
		description: limitLength(show.embeds.episodes.results[0].description, 150),
		date: new Date(show.embeds.episodes.results[0].broadcast).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}),
		soundcloud: show.embeds.episodes.results[0].audio_sources[0].url,
		img: show.embeds.episodes.results[0].media.background_large,
		link: (show.embeds.episodes.results[0].links[0].href).replace("/api/v2/", "/"),
		NTSLogo: "https://upload.wikimedia.org/wikipedia/commons/2/20/NTS_Radio_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
	};
	return info;
}

function formatGeneres(generes: string[]): string {
	let res: string = "";
	for (const [index, genere] of generes.entries()) {
		res += (genere.value).toUpperCase();
		if (index !== generes.length - 1)
			res += " · ";
		if (index === 2)
			break;
	}
	return res;
}

function limitLength(text: string, size: number): string {
	let res: string = text;
	if (text.length > size) {
		res = text.slice(0, size - 3);
		res += "..."
	}
	return res;
}