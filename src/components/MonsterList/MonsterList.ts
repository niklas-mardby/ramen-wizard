import "./MonsterList.scss";

const createMonsterList = (monsters: string[]) => {
	const m = document.createElement("div");

	const ul = document.createElement("ul");
	m.appendChild(ul);

	monsters.forEach((monster) => {
		const li = document.createElement("li");
		li.textContent = monster;
		ul.appendChild(li);
	});
	m.classList.add("MonsterList");
	return m;
};

export default createMonsterList;
