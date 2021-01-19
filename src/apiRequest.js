useEffect(() => {
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(response => {
        console.log(response.data.items);
    }) 
    .catch(error => {
        console.log(error);
    })
}, [])