const skills = [
  {
    id: 1,
    name: "Html",
    des: "HTML is the standard markup language for creating Web pages.",
  },
  {
    id: 2,
    name: "CSS",
    des: "HTML is the standard markup language for creating Web pages.",
  },
  {
    id: 3,
    name: "JavaScript",
    des: "HTML is the standard markup language for creating Web pages.",
  },
];
function update(idSkill, values) {
  const skill = skills.find((skill) => skill.id == idSkill);
  skill.name = values.name;
  skill.des = values.des;
}
function selectedSkill(idSkill) {
  return skills.find((skill) => skill.id == idSkill);
}


function deleteSkill(idSkill) {
  const idx = skills.findIndex((skill) => skill.id == idSkill);

  console.log(idx);
  skills.splice(idx, 1);
}
function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}



module.exports = { skills, selectedSkill, update, create, deleteSkill };
