import { type Component, type JSXElement } from "solid-js";

const TerminalFrame: Component<{ title: string; children: JSXElement }> = (
  props,
) => {
  // bg-skin-background
  return (
    <div class="mx-20 my-10 flex grow flex-col rounded-lg border border-skin-solid bg-transparent font-[Menlo] shadow-2xl">
      {/* top bar */}
      <div class="flex h-7 min-h-7 items-center rounded-t-lg bg-skin-background px-4">
        <div class="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
        <div class="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
        <div class="h-3 w-3 rounded-full bg-green-500"></div>
        <div class="absolute left-1/2 -translate-x-1/2">
          <p class="font-light text-skin-text">{props.title}</p>
        </div>
      </div>
      {/* body */}
      {props.children}
    </div>
  );
};

export default TerminalFrame;
