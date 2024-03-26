import React from 'react'
import { MovieCard } from '../MovieCard'
import { useSelector } from 'react-redux'

const DisplayResults = () => {
    const results=useSelector((store)=>store.searchResult);
    // const results= [
    //     {
    //       "adult": false,
    //       "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    //       "genre_ids": [
    //         12,
    //         28,
    //         878
    //       ],
    //       "id": 299536,
    //       "original_language": "en",
    //       "original_title": "Avengers: Infinity War",
    //       "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    //       "popularity": 156.312,
    //       "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //       "release_date": "2018-04-25",
    //       "title": "Avengers: Infinity War",
    //       "video": false,
    //       "vote_average": 8.248,
    //       "vote_count": 28640
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
    //       "genre_ids": [
    //         878,
    //         28,
    //         12
    //       ],
    //       "id": 24428,
    //       "original_language": "en",
    //       "original_title": "The Avengers",
    //       "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    //       "popularity": 105.944,
    //       "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    //       "release_date": "2012-04-25",
    //       "title": "The Avengers",
    //       "video": false,
    //       "vote_average": 7.7,
    //       "vote_count": 29832
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/1r42uwYTbX7aOWxtS1qPCAdOBQJ.jpg",
    //       "genre_ids": [
    //         16,
    //         878,
    //         28
    //       ],
    //       "id": 257346,
    //       "original_language": "ja",
    //       "original_title": "アベンジャーズ コンフィデンシャル：ブラック・ウィドウ ＆ パニッシャー",
    //       "overview": "When the Punisher takes out a black-market weapons dealer, he stumbles upon a far-reaching terrorist plot devised by a group known as Leviathan.",
    //       "popularity": 26.147,
    //       "poster_path": "/wJcyYVRPZDOZOD2w0r2R6wuZqqN.jpg",
    //       "release_date": "2014-04-19",
    //       "title": "Avengers Confidential: Black Widow & Punisher",
    //       "video": false,
    //       "vote_average": 6.357,
    //       "vote_count": 235
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg",
    //       "genre_ids": [
    //         28,
    //         12,
    //         878
    //       ],
    //       "id": 99861,
    //       "original_language": "en",
    //       "original_title": "Avengers: Age of Ultron",
    //       "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    //       "popularity": 81.763,
    //       "poster_path": "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    //       "release_date": "2015-04-22",
    //       "title": "Avengers: Age of Ultron",
    //       "video": false,
    //       "vote_average": 7.273,
    //       "vote_count": 22280
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    //       "genre_ids": [
    //         12,
    //         878,
    //         28
    //       ],
    //       "id": 299534,
    //       "original_language": "en",
    //       "original_title": "Avengers: Endgame",
    //       "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    //       "popularity": 97.509,
    //       "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    //       "release_date": "2019-04-24",
    //       "title": "Avengers: Endgame",
    //       "video": false,
    //       "vote_average": 8.257,
    //       "vote_count": 24629
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/aGbSI1hldkcFAB7lAVlpUqFcvRK.jpg",
    //       "genre_ids": [
    //         28,
    //         18
    //       ],
    //       "id": 40081,
    //       "original_language": "zh",
    //       "original_title": "残缺",
    //       "overview": "A group of martial artists seek revenge after being crippled by Tu Tin-To, a martial arts master, and his son.",
    //       "popularity": 12.98,
    //       "poster_path": "/s6snsNvb1UBKIqfvoKpB1p6D2NM.jpg",
    //       "release_date": "1978-12-21",
    //       "title": "Crippled Avengers",
    //       "video": false,
    //       "vote_average": 6.5,
    //       "vote_count": 67
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/uR952NrgispGuyqIdUbkR24vE0u.jpg",
    //       "genre_ids": [
    //         878
    //       ],
    //       "id": 1003596,
    //       "original_language": "en",
    //       "original_title": "Avengers 5",
    //       "overview": "An upcoming film in the Marvel Cinematic Universe's sixth Phase and part of The Multiverse Saga. Plot unknown.",
    //       "popularity": 23.252,
    //       "poster_path": "/lfE1GkxqoNaGqajRDCTYw5erBSo.jpg",
    //       "release_date": "2026-04-29",
    //       "title": "Avengers 5",
    //       "video": false,
    //       "vote_average": 0,
    //       "vote_count": 0
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/oFSQEG1lJTTISj3QKB7cJ9ANkFw.jpg",
    //       "genre_ids": [
    //         16,
    //         28,
    //         10751
    //       ],
    //       "id": 1154598,
    //       "original_language": "en",
    //       "original_title": "LEGO Marvel Avengers: Code Red",
    //       "overview": "The Avengers gather to celebrate their latest victory, but their celebration is quickly interrupted by the mysterious disappearance of Black Widow's father, Red Guardian. As the Avengers investigate, they discover that Red Guardian isn't the only one missing when they meet a dangerous new foe quite unlike anything they've ever encountered before.",
    //       "popularity": 23.271,
    //       "poster_path": "/rDzig50dj7VpLwJ7SThbamETK1G.jpg",
    //       "release_date": "2023-10-26",
    //       "title": "LEGO Marvel Avengers: Code Red",
    //       "video": false,
    //       "vote_average": 6.416,
    //       "vote_count": 77
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/fryen9fnjlm0YibKTDNGzWNBOSo.jpg",
    //       "genre_ids": [
    //         28,
    //         12,
    //         53,
    //         878
    //       ],
    //       "id": 9320,
    //       "original_language": "en",
    //       "original_title": "The Avengers",
    //       "overview": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
    //       "popularity": 25.811,
    //       "poster_path": "/1p5thyQ4pCy876HpdvFARqJ62N9.jpg",
    //       "release_date": "1998-08-13",
    //       "title": "The Avengers",
    //       "video": false,
    //       "vote_average": 4.351,
    //       "vote_count": 668
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/n2yv4KNOIeneb6zVzjbT9iLvnPE.jpg",
    //       "genre_ids": [
    //         28,
    //         18
    //       ],
    //       "id": 63441,
    //       "original_language": "zh",
    //       "original_title": "叉手",
    //       "overview": "Philip Kwok plays a repentant killer who vows to destroy the masked gang of which he was a member. A young fighter and his martial arts brothers come to the town to catch the killers, but one of them is not to be trusted!",
    //       "popularity": 6.235,
    //       "poster_path": "/vr54E7RjvMLE4rFgb1NPgZdnpj6.jpg",
    //       "release_date": "1981-05-15",
    //       "title": "Masked Avengers",
    //       "video": false,
    //       "vote_average": 6.2,
    //       "vote_count": 18
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/jqFC2WjYF07hx2X7cs0XmY9jBX6.jpg",
    //       "genre_ids": [
    //         878
    //       ],
    //       "id": 1003598,
    //       "original_language": "en",
    //       "original_title": "Avengers: Secret Wars",
    //       "overview": "An upcoming film in the Marvel Cinematic Universe's sixth Phase and the finale of The Multiverse Saga. Plot unknown.",
    //       "popularity": 16.358,
    //       "poster_path": "/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg",
    //       "release_date": "2027-05-06",
    //       "title": "Avengers: Secret Wars",
    //       "video": false,
    //       "vote_average": 0,
    //       "vote_count": 0
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/8N91uYwrr1uepEKbmym1tgfXlzS.jpg",
    //       "genre_ids": [
    //         16,
    //         10751,
    //         28,
    //         12,
    //         878
    //       ],
    //       "id": 14613,
    //       "original_language": "en",
    //       "original_title": "Next Avengers: Heroes of Tomorrow",
    //       "overview": "The children of the Avengers hone their powers and go head to head with the very enemy responsible for their parents' demise.",
    //       "popularity": 16.198,
    //       "poster_path": "/fpG1NDbcLV2a7c8X7LC4FPISBT7.jpg",
    //       "release_date": "2008-09-02",
    //       "title": "Next Avengers: Heroes of Tomorrow",
    //       "video": false,
    //       "vote_average": 6.9,
    //       "vote_count": 245
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/qzzAt0GakCZzbCeCJ0sFGhMIcdv.jpg",
    //       "genre_ids": [
    //         28,
    //         14
    //       ],
    //       "id": 323660,
    //       "original_language": "en",
    //       "original_title": "Avengers Grimm",
    //       "overview": "When Rumpelstiltskin destroys the Magic Mirror and escapes to the modern world, the four princesses of \"Once Upon a Time\"-Cinderella, Sleeping Beauty, Snow White, and Rapunzel-are sucked through the portal too. Well-trained and endowed with magical powers, the four women must fight Rumpelstiltskin and his army of thralls before he enslaves everyone on Earth.",
    //       "popularity": 13.311,
    //       "poster_path": "/dNbyuop5dJiEq3nHBHIsvFCVu8R.jpg",
    //       "release_date": "2015-03-17",
    //       "title": "Avengers Grimm",
    //       "video": false,
    //       "vote_average": 3.9,
    //       "vote_count": 118
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/sORO7a1cSghfWE5GD4cSJ0qTN8O.jpg",
    //       "genre_ids": [
    //         28,
    //         12,
    //         14
    //       ],
    //       "id": 521720,
    //       "original_language": "en",
    //       "original_title": "Avengers Grimm: Time Wars",
    //       "overview": "When Rumpelstiltskin tries to take over Earth once and for all, The Avengers Grimm must track him down through time in order to defeat him.",
    //       "popularity": 13.989,
    //       "poster_path": "/xfAcu74DRQXeM9XqFcE5MrSRzYP.jpg",
    //       "release_date": "2018-05-01",
    //       "title": "Avengers Grimm: Time Wars",
    //       "video": false,
    //       "vote_average": 4.6,
    //       "vote_count": 56
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/9tjIgkkbajG2zMI4Yk21hpttXv0.jpg",
    //       "genre_ids": [
    //         28,
    //         16,
    //         10751,
    //         12,
    //         878
    //       ],
    //       "id": 14609,
    //       "original_language": "en",
    //       "original_title": "Ultimate Avengers: The Movie",
    //       "overview": "When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.",
    //       "popularity": 18.477,
    //       "poster_path": "/fKQqZEDmvKMCXEQztvMJHGou9dO.jpg",
    //       "release_date": "2006-02-21",
    //       "title": "Ultimate Avengers: The Movie",
    //       "video": false,
    //       "vote_average": 6.771,
    //       "vote_count": 326
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/ldxi7dKtud2KrStUr8V9P65ixNr.jpg",
    //       "genre_ids": [
    //         12,
    //         16,
    //         28,
    //         878
    //       ],
    //       "id": 14611,
    //       "original_language": "en",
    //       "original_title": "Ultimate Avengers 2",
    //       "overview": "Mysterious Wakanda lies in the darkest heart of Africa, unknown to most of the world. An isolated land hidden behind closed borders, fiercely protected by its young king: Black Panther. But when brutal alien invaders attack, the threat leaves Black Panther with no option but to go against the sacred decrees of his people and ask for help from outsiders.",
    //       "popularity": 21.99,
    //       "poster_path": "/h1PKqtjuTifmTU0EqM4W0Br2pHX.jpg",
    //       "release_date": "2006-08-08",
    //       "title": "Ultimate Avengers 2",
    //       "video": false,
    //       "vote_average": 6.7,
    //       "vote_count": 266
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/rGGRv7XXpDBVGD2BtbKWENfZOkf.jpg",
    //       "genre_ids": [
    //         10751,
    //         16
    //       ],
    //       "id": 368304,
    //       "original_language": "en",
    //       "original_title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
    //       "overview": "The Avengers are forced to “party” with Ultron when he seeks to disassemble the team by taking control of Iron Man’s armor and enact a nefarious scheme to take over the world.",
    //       "popularity": 11.226,
    //       "poster_path": "/xUBZNoY7idPfqKZepnDEv7Qc8GC.jpg",
    //       "release_date": "2015-11-16",
    //       "title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
    //       "video": false,
    //       "vote_average": 6.504,
    //       "vote_count": 127
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/mqdEyktOIfw2JnIWQLEI3SyvmFj.jpg",
    //       "genre_ids": [
    //         28,
    //         12
    //       ],
    //       "id": 296491,
    //       "original_language": "it",
    //       "original_title": "Gli invincibili tre",
    //       "overview": "Ursus and his sword-wielding companions run head-on against a usurper of a throne.",
    //       "popularity": 3.217,
    //       "poster_path": "/skGMVZ41KWezqKa29g8bqpXfLlV.jpg",
    //       "release_date": "1964-11-26",
    //       "title": "3 Avengers",
    //       "video": false,
    //       "vote_average": 5.1,
    //       "vote_count": 5
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/bsm7vCzMtE1aA1WDLoi310aY1oe.jpg",
    //       "genre_ids": [
    //         10751,
    //         35
    //       ],
    //       "id": 516339,
    //       "original_language": "ru",
    //       "original_title": "СуперБобровы. Народные мстители",
    //       "overview": "The continuations of the adventures of Bobrov family all members of which suddenly became superheroes...",
    //       "popularity": 3.167,
    //       "poster_path": "/6iN2NxsyNf3WEQwDSWaYaGTVQ60.jpg",
    //       "release_date": "2017-12-25",
    //       "title": "Super Family. Better Than Avengers",
    //       "video": false,
    //       "vote_average": 5.9,
    //       "vote_count": 13
    //     },
    //     {
    //       "adult": false,
    //       "backdrop_path": "/r5uAQQahZzcTYyPdlomDggyxHkV.jpg",
    //       "genre_ids": [
    //         35,
    //         14,
    //         28
    //       ],
    //       "id": 538153,
    //       "original_language": "en",
    //       "original_title": "Avengers of Justice: Farce Wars",
    //       "overview": "While trying to remain a good husband and father, Superbat recruits the Avengers of Justice out of retirement to stop Dark Jokester and Lisp Luthor from freezing the planet.",
    //       "popularity": 7.24,
    //       "poster_path": "/yymsCwKPbJIF1xcl2ih8fl7OxAa.jpg",
    //       "release_date": "2018-07-20",
    //       "title": "Avengers of Justice: Farce Wars",
    //       "video": false,
    //       "vote_average": 4.133,
    //       "vote_count": 15
    //     }
    //   ]
    if(results.length===0) return 
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            results.map((movie)=>{
                return <MovieCard  key={movie.id} movie={movie} />
            })
        }
    </div>
  )
}

export default DisplayResults