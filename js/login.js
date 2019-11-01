const login = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut().then(() => alert('Logged out'))
  } else {
    const password = prompt('Enter password')
    firebase.auth().signInWithEmailAndPassword('supawit.ruen@mail.kmutt.ac.th', password)
      .then(() => alert('Welcome Admin!'))
      .catch(() => alert('Incorrect Password'))
  }
}

const logo = new Hammer.Manager(document.getElementById('ywc-logo'))
logo.add(new Hammer.Press({ time: 2000 }))
logo.on('press', login)

const queueText = new Hammer.Manager(document.getElementById('footer'))
queueText.add(new Hammer.Press({ time: 2000 }))
queueText.on('press', login)
