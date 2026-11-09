import { roles } from "./roles.js?v=1";

const list = document.querySelector("#roles");

roles.forEach((role) => {
  const saved = localStorage.getItem(`lovejoy-application:${role.id}`);
  const link = document.createElement("a");
  link.href = `apply.html?role=${role.id}`;
  const title = document.createElement("strong");
  title.textContent = role.title;
  const note = document.createElement("small");
  note.textContent = saved ? "CONTINUE APPLICATION" : "APPLY";
  link.append(title, note);
  list.append(link);
});
