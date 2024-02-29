import { For } from "solid-js";
import { commands } from "./Commands";

const Help = () => {
  const guides = [
    { key: "up arrow key", desc: "go to previous command" },
    { key: "down arrow key", desc: "go to next command" },
  ];

  return (
    <div class="flex animate-fade-in flex-col">
      <For each={commands}>
        {(command) => (
          <div class="flex flex-row">
            <span class="w-1/6 text-skin-command">{command.cmd}</span>
            <span class="text-skin-text-second">- {command.desc}</span>
          </div>
        )}
      </For>
      <div class="mt-4"></div>
      <For each={guides}>
        {(guide) => (
          <div class="flex animate-fade-in flex-row text-skin-text">
            <span class="w-1/6">{guide.key}</span>
            <span>= {guide.desc}</span>
          </div>
        )}
      </For>
    </div>
  );
};

export default Help;
