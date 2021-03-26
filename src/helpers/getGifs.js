    export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=obyx6QvsErKuCg7QKYgNKA2eBmjt0LG9`;

        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
        }
        )

        return gifs; //REGREA UNA PROMESA QUE DEVUELME LAS IAMGENES

    }