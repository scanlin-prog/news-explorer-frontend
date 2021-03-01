
function handleResponce(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log('_handleResponse rejection')
        return Promise.reject(response.statusText)
    }
}

export function getNews(userText) {

    const date = new Date()
    date.setDate(date.getDate()-7)
    const sevenDaysBefore = date.toISOString().slice(0, 10)
    
    return fetch(`https://nomoreparties.co/news/v2/everything?q=${userText}&from=${sevenDaysBefore}&to=today&pageSize=100&apiKey=3499f694da38414787974a57d6033945`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponce)
}