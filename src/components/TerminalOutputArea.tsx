import { For, Match, Switch, createSignal, createEffect } from "solid-js";
import TerminalCL from "./TerminalCL";
import History from "./commands/History";

interface OutputProps {
  commands: string[];
  scrollIntoView: () => void;
}

const TerminalOutputArea = (props: OutputProps) => {
  function renderOutput() {
    if (props.commands[props.commands.length - 1] === "clear") {
      return <></>;
    }
    return (
      <For each={props.commands}>
        {(command) => {
          return (
            <>
              <TerminalCL animate={false}>
                <span class="text-skin-command">
                  {command === "clear" ? "" : command}
                </span>
              </TerminalCL>

              <Switch fallback={<></>}>
                <Match when={command === "history"}>
                  <History commands={props.commands} />
                </Match>
                <Match when={command === "clear"}>
                  {(props.commands.length = 0)}
                </Match>
              </Switch>
            </>
          );
        }}
      </For>
    );
  }

  return (
    <>
      <div id="output" class="flex flex-col">
        {
          renderOutput()
          // props.commands[props.commands.length-1] === "clear" ?
          //   (<></>) :
          //   <For each={props.commands}>
          //     {
          //       (command) => {
          //         return (
          //           <>
          //             <TerminalCL animate={false}>
          //               <span class="text-skin-command">{command === "clear" ? "" : command}</span>
          //             </TerminalCL>

          //             <Switch fallback={<></>}>
          //               <Match when={command === "history"}>
          //                 <History commands={props.commands}/>
          //               </Match>
          //               <Match when={command === "clear"}>
          //                 {props.commands.length = 0}
          //               </Match>
          //             </Switch>
          //           </>
          //         );
          //       }
          //     }
          //   </For>
        }
      </div>
      {props.scrollIntoView()}
    </>
  );
};

export default TerminalOutputArea;
