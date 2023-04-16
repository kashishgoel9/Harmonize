
export const example_json_obj = {
    "first_name": "Aryan",
    "last_name": "Jalali",
    "email": "aryanjalali1234@gmail.com",
    "dob": "12/28/1998",
    "phone": "+16466832431",
    "gender": "Male",
    "sexual_orientations": ["straight", "gay", "lesbian", "bisexual", "asexual", "demisexual", "pansexual", "queer", "questioning"],
    "artists": [{
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wUjUUtkb5lvLKcGKsKqsR"
        },
        "followers": {
            "href": null,
            "total": 0
        },
        "genres": [
            "canadian contemporary r&b",
            "canadian pop",
            "dance pop",
            "electropop",
            "pop",
            "post-teen pop"
        ],
        "href": "https://api.spotify.com/v1/artists/2wUjUUtkb5lvLKcGKsKqsR",
        "id": "2wUjUUtkb5lvLKcGKsKqsR",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebe74b7398634a741f74858dc7",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174e74b7398634a741f74858dc7",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178e74b7398634a741f74858dc7",
                "width": 160
            }
        ],
        "name": "Alessia Cara",
        "popularity": 75,
        "type": "artist",
        "uri": "spotify:artist:2wUjUUtkb5lvLKcGKsKqsR"
    }],
    "tracks": [{
        "album": {
            "album_type": "SINGLE",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7i3eGEz3HNFnPOCdc7mqoq"
                    },
                    "href": "https://api.spotify.com/v1/artists/7i3eGEz3HNFnPOCdc7mqoq",
                    "id": "7i3eGEz3HNFnPOCdc7mqoq",
                    "name": "Akano",
                    "type": "artist",
                    "uri": "spotify:artist:7i3eGEz3HNFnPOCdc7mqoq"
                }
            ],
            "available_markets": [],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/1O5nqluvqOUXZN9DeoHUp7"
            },
            "href": "https://api.spotify.com/v1/albums/1O5nqluvqOUXZN9DeoHUp7",
            "id": "1O5nqluvqOUXZN9DeoHUp7",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27341a5d85e3faace60bb9e8200",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0241a5d85e3faace60bb9e8200",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485141a5d85e3faace60bb9e8200",
                    "width": 64
                }
            ],
            "name": "Gurenge (From \"Demon Slayer: Kimetsu no Yaiba\")",
            "release_date": "2019-05-10",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1O5nqluvqOUXZN9DeoHUp7"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7i3eGEz3HNFnPOCdc7mqoq"
                },
                "href": "https://api.spotify.com/v1/artists/7i3eGEz3HNFnPOCdc7mqoq",
                "id": "7i3eGEz3HNFnPOCdc7mqoq",
                "name": "Akano",
                "type": "artist",
                "uri": "spotify:artist:7i3eGEz3HNFnPOCdc7mqoq"
            }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 89783,
        "explicit": false,
        "external_ids": {
            "isrc": "QZGWW1904526"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/19Qu5BOV1Y8nDrzgYavYdB"
        },
        "href": "https://api.spotify.com/v1/tracks/19Qu5BOV1Y8nDrzgYavYdB",
        "id": "19Qu5BOV1Y8nDrzgYavYdB",
        "is_local": false,
        "name": "Gurenge (From \"Demon Slayer: Kimetsu no Yaiba\")",
        "popularity": 0,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:19Qu5BOV1Y8nDrzgYavYdB"
    }]
};

export const createUser = async (userId, userData) => {
    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Api-Key", process.env.REACT_APP_API_GATEWAY_KEY);

    let requestOptions = {
        crossDomain: true,
        method: 'POST',
        headers: myHeaders,
        body: userData
    };

    let getUrl = process.env.REACT_APP_API_GATEWAY_URL + "/users/" + userId
    console.log(getUrl)

    return await fetch(getUrl, requestOptions)
        .then(data => {
            console.log("-----", data)
            return data;
        });
};

export const getCandidates = async (userId) => {
    try {
        let myHeaders = new Headers();

        myHeaders.append("X-Api-Key", process.env.REACT_APP_API_GATEWAY_KEY);

        let requestOptions = {
            crossDomain: true,
            method: 'GET',
            headers: myHeaders,
        };

        console.log("userId: ", userId)
        let getUrl = process.env.REACT_APP_API_GATEWAY_URL + "/candidates?id=" + userId
        console.log(getUrl);

        let res = await fetch(getUrl, requestOptions)
        return res.json();
    }
    catch (e) {
        throw e;
    }
};