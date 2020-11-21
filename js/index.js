let layout = 0;

const duration = 2 * 1000;
const branches = ["content", "programming", "designer", "marketing"];
const timer = {
  content: null,
  programming: null,
  designer: null,
  marketing: null,
};

const changePage = (branch) => {
  console.log(firebase.auth().currentUser);

  if (firebase.auth().currentUser) {
    window.location = `./admin.html?branch=${branch}`;
  }
};

const toggleLayout = () => {
  switch (++layout % 3) {
    case 0:
      // big spon
      document.querySelector(".body-container").classList.add("sponsor-layout");

      // hide video spon
      document.querySelector("#spon-section-video").style.display = "none";
      // show big spon
      document.querySelector("#spon-section-spon").style.display = "flex";
      break;
    case 1:
      // smol spon
      document
        .querySelector(".body-container")
        .classList.remove("sponsor-layout");
      break;
    case 2:
      // video spon
      const videos = [
        "3R6jqXkdpcU",
        "pCJzZooWw2E",
        "uzSdUeywgfQ",
        "0A9-hexonlw",
      ];

      // big spon
      document.querySelector(".body-container").classList.add("sponsor-layout");

      // show big spon
      document.querySelector("#spon-section-video").style.display = "flex";
      // hide video spon
      document.querySelector("#spon-section-spon").style.display = "none";

      // inject
      document.querySelector(
        "#spon-section-video"
      ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${
        videos[Math.floor(Math.random() * 100000) % videos.length]
      }?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;"></iframe>`;
      break;
    default:
      break;
  }
};

const animate = (branch) => {
  const textId = `${branch}-queue`;
  const cardId = `${branch}-card`;
  const alertName = `${branch}-alert`;

  document.getElementById(textId).classList.add("tada");
  document.getElementById(cardId).classList.add(alertName);

  clearTimeout(timer[branch]);

  timer[branch] = setTimeout(() => {
    document.getElementById(textId).classList.remove("tada");
    document.getElementById(cardId).classList.remove(alertName);
  }, duration);
};

branches.forEach((branch) => {
  firebase
    .database()
    .ref(`ywc-queue/${branch}`)
    .on("value", (snapshot) => {
      const value = snapshot.val();
      const text =
        value.custom !== "" ? value.custom : getPrefix(branch) + value.current;
      document.getElementById(`${branch}-queue`).innerText = text;
      animate(branch);
    });
});

// setInterval(() => {
//   toggleLayout()
// }, 5 * 60 * 1000)

firebase
  .database()
  .ref(`ywc-queue/announcement`)
  .on("value", (snapshot) => {
    const value = snapshot.val();
    document.getElementById(`announcement`).innerHTML = value;
  });
