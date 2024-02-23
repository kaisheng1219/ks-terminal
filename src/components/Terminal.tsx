import TerminalBody from "./TerminalBody";
import TerminalFrame from "./TerminalFrame";
import { theme, themesDict } from "../hooks/themeHook";
import { createEffect } from "solid-js";

const Terminal = () => {
  createEffect(() => {
    if (theme()) {
      const body = document.body;
      for (const className of body.classList) {
        if (className.startsWith("theme-")) {
          body.classList.remove(className);
          body.classList.add(
            `${themesDict[theme() as keyof typeof themesDict]}`,
          );
          break;
        }
      }
    }
  });

  return (
    <div class="flex w-screen grow overscroll-none bg-transparent">
      <TerminalFrame title="ks-terminal">
        <TerminalBody />
      </TerminalFrame>
    </div>
  );
};

export default Terminal;
