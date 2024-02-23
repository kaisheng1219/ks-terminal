import TerminalBanner from "./TerminalBanner";
import TerminalContent from "./TerminalContent";

const TerminalBody = () => {
  let bodyRef: HTMLDivElement | undefined;

  function scrollIntoView() {
    bodyRef?.scroll({
      top: bodyRef.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div
      ref={bodyRef}
      class="flex grow flex-col overflow-scroll rounded-b-lg bg-skin-background/25 p-4 backdrop-blur-3xl"
    >
      <TerminalBanner />
      <TerminalContent scrollIntoView={scrollIntoView} />
    </div>
  );
};

export default TerminalBody;
