import { createSignal, onCleanup, onMount } from "solid-js";

interface Props {
  onEnterPressed: (command: string) => void;
}

const TerminalInputArea = (props: Props) => {  
  const [input, setInput] = createSignal("");

  function keyHandler(event: KeyboardEvent) {
    const key = event.key;
    const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const isValidChar =
      (key >= "a" && key <= "z") ||
      (key >= "A" && key <= "Z") ||
      (key >= "0" && key <= "9") ||
      format.test(key);

    if (key.length === 1 && isValidChar) setInput((prev) => prev + event.key);
    else if (key === "Enter" && input().trim().length > 0) {      
      props.onEnterPressed(input());
      setInput("");
    } else if (key === "Backspace")
      setInput((prev) => prev.slice(0, prev.length - 1));
  }

  onMount(() => {
    window.addEventListener("keydown", keyHandler);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", keyHandler);
  });

  return <span class="text-skin-caret whitespace-pre">{input()}</span>;
};

export default TerminalInputArea;
