interface ShowData {
    show: string;
    generes: string[];
    description: string;
    date: string;
    soundcloud: string;
    img: string;
    // link: ;
}

export function extractShowData(show: string): ShowData {
    const info: ShowData = {
        show: show.embeds.episodes.results[0].name,
        generes: show.embeds.episodes.results[0].genres,
        description: show.embeds.episodes.results[0].description,
        date: new Date(show.embeds.episodes.results[0].broadcast).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        soundcloud: show.embeds.episodes.results[0].audio_sources[0].url,
        img: show.embeds.episodes.results[0].media.background_large,
    };
    // console.log(show.embeds.episodes.results[0]);
    return info;
}