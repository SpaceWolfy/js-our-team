function createMember(MemberImage, MemberName, MemberRole) {
  let teamCard = `
      <div class="team-card">
        <div class="card-image">
          <img src="img/${MemberImage.image}" />
        </div>
        <div class="card-text">
          <h3>${MemberName.name}</h3>
          <p>${MemberRole.role}</p>
        </div>
      </div>
      `;
  document.querySelector(".team-container").innerHTML += teamCard;
}

/* Array di oggetti: */
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 1; i < team.length; i++) {
  createMember(team[i], team[i], team[i]);
}
/* -------------------------------------------------------------------- */

/* Bonus */
/* Aggiungere immagini dal folder img */
let addMember = document.getElementById("addMemberButton");
addMember.addEventListener("click", function () {
  let valName = document.getElementById("name").value;
  let valRole = document.getElementById("role").value;
  let valImage = document.getElementById("image").value;
  team.push({
    name: valName,
    role: valRole,
    image: valImage,
  });
  const lastMember = team.pop();
  createMember(lastMember, lastMember, lastMember);

  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("image").value = "";
});
