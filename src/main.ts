import createMonsterCard from "./components/MonsterCard/MonsterCard";

const app = document.getElementById("app") as HTMLDivElement;

const title = "First Monster Card";
app.appendChild(createMonsterCard(title));
