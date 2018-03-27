const musicians = []

fetch('https://reqres.in/api/users')
  .then(response => {
    return response.json()
  })
  .then(users => {
    users.data.map(createUser).forEach($user => {
      musicians.push($user)
    })
  })

function createUser(user) {
  const $user = {
    firstName: user.first_name,
    lastName: user.last_name,
    photo: user.avatar,
    id: user.id
  }
  return $user
}
