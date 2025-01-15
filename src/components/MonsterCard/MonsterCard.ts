import "./MonsterCard.scss";

const createMonsterCard = (title: string) => {
	const m = document.createElement("div");
	m.innerHTML = title;
	m.classList.add("MonsterCard");
	return m;
};

export default createMonsterCard;
