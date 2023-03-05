let url = 'http://localhost:8080'
const signin = async (user) => {
  try {
    let response = await fetch(`${url}/auth/signin/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch(err) {
    console.log(err.message)
  }
}

const signout = async () => {
  try {
    let response = await fetch(`${url}/auth/signout/`, { method: 'GET' })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  signin,
  signout
}