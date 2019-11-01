const branch = window.location.search.split('branch=')[1]

const setup = () => {
  if (!(branch && getPrefix(branch))) {
    window.location = `./index.html`
  }

  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      window.location = './index.html'
    }
  })

  document.getElementById('branch').innerText = `Web ${capitalize(branch)}`
}

const capitalize = (text) => text.substring(0, 1).toUpperCase() + text.substring(1)

const modifyQueue = amount => {
  const queue = parseInt(document.getElementById('current-queue').value) + amount
  document.getElementById('current-queue').value = queue.toString().padStart(2, '0')
}

const publishQueue = () => {
  firebase.database().ref(`ywc-queue/${branch}`).set({
    current: document.getElementById('current-queue').value,
    custom: ''
  })
  .catch(err => alert(err))
}

const publishCustomText = () => {
  firebase.database().ref(`ywc-queue/${branch}`).update({
    custom: document.getElementById('custom-queue').value
  })
  .catch(err => alert(err))
}

setup()

firebase.database().ref(`ywc-queue/${branch}`).once('value').then(snapshot => {
  document.getElementById('current-queue').value = snapshot.val().current.padStart(2, '0')
})

firebase.database().ref(`ywc-queue/${branch}`).on('value', snapshot => {
  const value = snapshot.val()
  document.getElementById('on-screen').innerText =
    value.custom !== '' ? value.custom : getPrefix(branch) + value.current
})
