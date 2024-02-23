import { onCleanup, type Component, type JSXElement } from "solid-js";

const TerminalCL: Component<{ children: JSXElement; animate?: boolean }> = (
  props,
) => {
  return (
    <div
      class="mb-2 flex h-fit flex-row"
      classList={{
        "animate-fade-in animation-delay-[1200ms] opacity-0 fill-mode-forwards":
          props.animate,
      }}
    >
      <span class="h-fit bg-skin-cl-user px-2 text-skin-cl">guest@mars</span>
      <span class="h-0 w-0 border-b-[.75rem] border-l-[.75rem] border-t-[.75rem] border-b-skin-cl-path border-l-skin-cl-user border-t-skin-cl-path"></span>
      <span class="h-fit bg-skin-cl-path px-3 text-skin-cl">~</span>
      <span class="mr-2 h-0 w-0 border-b-[.75rem] border-l-[.75rem] border-t-[.75rem] border-b-transparent border-l-skin-cl-path border-t-transparent"></span>
      {props.children}
    </div>
  );
};

export default TerminalCL;
