const duration = 10 * 1000
const branches = ['content', 'programming', 'designer', 'marketing']
const timer = {
  content: null,
  programming: null,
  designer: null,
  marketing: null
}

const changePage = branch => {
  if (firebase.auth().currentUser) {
    window.location = `./admin.html?branch=${branch}`
  }
}

const animate = branch => {
  const textId = `${branch}-queue`
  const cardId = `${branch}-card`
  const alertName = `${branch}-alert`

  document.getElementById(textId).classList.add('tada')
  document.getElementById(cardId).classList.add(alertName)

  clearTimeout(timer[branch])

  timer[branch] = setTimeout(() => {
    document.getElementById(textId).classList.remove('tada')
    document.getElementById(cardId).classList.remove(alertName)
  }, duration)
}

branches.forEach(branch => {
  firebase.database().ref(`ywc-queue/${branch}`).on('value', snapshot => {
    const value = snapshot.val()
    const text = value.custom !== '' ? value.custom : getPrefix(branch) + value.current
    document.getElementById(`${branch}-queue`).innerText = text
    animate(branch)
  })
})

firebase.database().ref(`ywc-queue/announcement`).on('value', snapshot => {
  const value = snapshot.val()
  document.getElementById(`announcement`).innerHTML = value
})
