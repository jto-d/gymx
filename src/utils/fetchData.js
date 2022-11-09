export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '83243f0bbcmsh008e045d347b49fp1e0a42jsnba1efd1e8e60',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}