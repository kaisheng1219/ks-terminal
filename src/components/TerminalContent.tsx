import {
  createSignal,
  For,
  type JSXElement,
  getOwner,
  runWithOwner,
  createEffect,
  on,
} from "solid-js";
import TerminalInputArea from "./TerminalInputArea";
import TerminalCL from "./TerminalCL";
import History from "./commands/History";
import { setTheme, themes, themesDict } from "../hooks/themeHook";

interface Props {
  scrollIntoView: () => void;
}

const TerminalContent = (props: Props) => {
  const [elems, setElems] = createSignal<JSXElement[]>([]);
  const commandList: string[] = [];
  const owner = getOwner();

  createEffect(on(elems, () => props.scrollIntoView()));

  function onEnterPressed(input: string) {
    const tokens = input.split(" ");
    const command = tokens[0]; // first token is command
    commandList.push(input);
    if (command === "clear" && tokens.length === 1) setElems([]);
    else if (command === "theme") {
      if (
        tokens.length === 2 &&
        themesDict[tokens[1] as keyof typeof themesDict]
      ) {
        setTheme(tokens[1]);
      } else setElems([...elems(), runWithOwner(owner, () => getElem(input))]);
    } else setElems([...elems(), runWithOwner(owner, () => getElem(input))]);
  }

  function getElem(command: string) {
    const cl = (
      <TerminalCL animate={false}>
        <span class="text-skin-command">{command}</span>
      </TerminalCL>
    );

    switch (command) {
      case "history":
        return (
          <>
            {cl}
            <History commands={commandList}></History>
          </>
        );
      default:
        return (
          <>
            {cl}
            <span class="mb-4 text-skin-text">
              Unable to find command:{" "}
              <span class="text-skin-command">{command}</span>
            </span>
          </>
        );
    }
  }

  return (
    <>
      <div id="output" class="flex flex-col">
        <For each={elems()}>{(elem) => elem}</For>
      </div>
      <TerminalCL animate={true}>
        <TerminalInputArea onEnterPressed={onEnterPressed} />
        <span class="top-0 w-[0.625rem] animate-blink border border-skin-caret bg-skin-caret text-skin-caret">
          .
        </span>
      </TerminalCL>
    </>
  );
};

export default TerminalContent;
