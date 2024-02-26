import { For } from "solid-js";

const Help = () => {
  const commands = [
    { cmd: "about", desc: "about myself" },
    { cmd: "banner", desc: "view banner" },
    { cmd: "clear", desc: "clear the terminal" },
    { cmd: "contacts", desc: "get in touch with me" },
    { cmd: "education", desc: "my education background" },
    { cmd: "help", desc: "view available commands" },
    { cmd: "history", desc: "view command history" },
    { cmd: "projects", desc: "view my projects" },
    { cmd: "themes", desc: "view available themes" },
    // { cmd: "whatisthis", desc: "about this project" },
  ];

  const guides = [
    { key: "up arrow key", desc: "go to previous command" },
    { key: "down arrow key", desc: "go to next command" },
  ];

  return (
    <div class="flex animate-fade-in flex-col">
      <For each={commands}>
        {(command) => (
          <div class="flex flex-row">
            <span class="w-1/4 text-skin-command">{command.cmd}</span>
            <span class="text-skin-text-second">- {command.desc}</span>
          </div>
        )}
      </For>
      <div class="mt-4"></div>
      <For each={guides}>
        {(guide) => (
          <div class="flex animate-fade-in flex-row text-skin-text">
            <span class="w-1/4">{guide.key}</span>
            <span>= {guide.desc}</span>
          </div>
        )}
      </For>
    </div>
  );
};

export default Help;
