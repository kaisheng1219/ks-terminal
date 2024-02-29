import {
  createSignal,
  For,
  type JSXElement,
  getOwner,
  runWithOwner,
  createEffect,
  on,
  onMount,
  onCleanup,
} from "solid-js";
import TerminalCli from "./TerminalCli";
import History from "./commands/History";
import Undefined from "./commands/Undefined";
import Themes from "./commands/Themes";
import Help from "./commands/Help";
import TerminalBanner from "./TerminalBanner";
import About from "./commands/About";
import Contacts from "./commands/Contacts";
import Projects from "./commands/Projects";

interface Props {
  scrollIntoView: () => void;
}

const TerminalContent = (props: Props) => {
  const [input, setInput] = createSignal("");
  const [pointer, setPointer] = createSignal(0);
  const [elems, setElems] = createSignal<JSXElement[]>([]);

  const inputList: string[] = [];
  const owner = getOwner();

  onMount(() => {
    window.addEventListener("keydown", keyHandler);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", keyHandler);
  });

  createEffect(on(elems, () => props.scrollIntoView()));

  function onEnterPressed(input: string) {
    inputList.push(input);
    setPointer(inputList.length);
    setInput("");

    const tokens = input.split(" "); // split input into tokens (format: <command> <args>)
    const command = tokens[0]; // first token is command
    const args = tokens.slice(1);

    if (command === "clear" && args.length === 0) setElems([]);
    else
      setElems([...elems(), runWithOwner(owner, () => getElem(command, args))]);
  }

  function keyHandler(event: KeyboardEvent) {
    event.preventDefault();
    const key = event.key;
    const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const isValidChar =
      (key >= "a" && key <= "z") ||
      (key >= "A" && key <= "Z") ||
      (key >= "0" && key <= "9") ||
      format.test(key);

    if (key.length === 1 && isValidChar) setInput((prev) => prev + event.key);
    else if (key === "Enter" && input().trim().length > 0)
      onEnterPressed(input());
    else if (key === "Backspace")
      setInput((prev) => prev.slice(0, prev.length - 1));
    else if (key === "ArrowUp") {
      if (pointer() > 0) {
        setPointer(pointer() - 1);
        setInput(inputList[pointer()]);
      }
    } else if (key === "ArrowDown") {
      if (pointer() === inputList.length) setInput("");
      else if (pointer() < inputList.length) {
        setPointer(pointer() + 1);
        setInput(pointer() < inputList.length ? inputList[pointer()] : "");
      }
    }
  }

  function getElem(command: string, args: string[]) {
    const cl = (
      <TerminalCli>
        <span class="text-skin-command">
          {command} {args}
        </span>
      </TerminalCli>
    );

    let outElem;

    switch (command) {
      case "about":
        outElem = <About></About>;
        break;
      case "banner":
        outElem = <TerminalBanner></TerminalBanner>;
        break;
      case "contacts":
        outElem = <Contacts platform={args[0]}></Contacts>;
        break;
      case "help":
        outElem = <Help></Help>;
        break;
      case "history":
        outElem = <History commands={inputList}></History>;
        break;
      case "projects":
        outElem = <Projects projectIndex={args[0]}></Projects>;
        break;
      case "themes":
        outElem = <Themes theme={args[0]}></Themes>;
        break;
      default:
        outElem = <Undefined command={command}></Undefined>;
        break;
    }

    return (
      <>
        {cl}
        {outElem}
      </>
    );
  }

  return (
    <>
      <div
        id="output"
        class="flex flex-col space-y-4"
        classList={{ "mb-4": elems().length > 0 }}
      >
        <For each={elems()}>{(elem) => elem}</For>
      </div>
      <TerminalCli animate={true}>
        <span class="whitespace-pre text-skin-caret">{input()}</span>
        <span class="animate-blink border border-skin-caret bg-skin-caret text-skin-caret">
          .
        </span>
      </TerminalCli>
    </>
  );
};

export default TerminalContent;
