import createMonsterCard from "./components/MonsterCard/MonsterCard";

const app = document.getElementById("app") as HTMLDivElement;

app.appendChild(createMonsterCard("First Monster Card"));
app.appendChild(createMonsterCard("Second Monster Card"));
