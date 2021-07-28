/* export const BASE_URL = 'https://west.students.nomoredomains.icu'; */
export const BASE_URL = 'http://localhost:3001';


function handleResponce(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log('_handleResponse rejection')
        return Promise.reject(response.statusText)
    }
}

export function getArticlesData() {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(handleResponce)
}

export function sendArticleData(data) {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })
    .then(handleResponce)
}

export function deleteArticle(id) {
    return fetch(`${BASE_URL}/articles/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(handleResponce)
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
        .then(handleResponce)
}

export function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(handleResponce)
}

export function checkToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(handleResponce)
}