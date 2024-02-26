import { type Component, type JSXElement } from "solid-js";

interface CliProps {
  children: JSXElement;
  animate?: boolean;
  customClass?: string;
}

const TerminalCli: Component<CliProps> = ({
  children,
  animate = false,
  customClass = "",
}) => {
  const divClass = `${customClass} flex h-fit flex-row`;
  return (
    <div
      class={divClass}
      classList={{
        "animate-fade-in animation-delay-[1200ms] opacity-0 fill-mode-forwards":
          animate,
      }}
    >
      <span class="h-fit bg-skin-cl-user px-2 text-skin-cl">guest@mars</span>
      <span class="h-0 w-0 border-b-[.75rem] border-l-[.75rem] border-t-[.75rem] border-b-skin-cl-path border-l-skin-cl-user border-t-skin-cl-path"></span>
      <span class="h-fit bg-skin-cl-path px-3 text-skin-cl">~</span>
      <span class="mr-2 h-0 w-0 border-b-[.75rem] border-l-[.75rem] border-t-[.75rem] border-b-transparent border-l-skin-cl-path border-t-transparent"></span>
      {children}
    </div>
  );
};

export default TerminalCli;
