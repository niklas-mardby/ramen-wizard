import "./main.scss";
import createMonsterCard from "./components/MonsterCard/MonsterCard";
import createMonsterList from "./components/MonsterList/MonsterList";

const app = document.getElementById("app") as HTMLDivElement;

app.appendChild(createMonsterCard("First Monster Card"));
app.appendChild(createMonsterCard("Second Monster Card"));

app.appendChild(createMonsterList(["Bob", "Susan", "Benny", "Steve"]));
