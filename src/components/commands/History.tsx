import { For } from "solid-js"

interface Props {
  commands: string[]
}

const History = ({ commands }: Props) => {
  return (
    <div class="text-skin-command shadow-skin-command drop-shadow-[0_0_5px]">
      <For each={commands}>
        {command => <p class="ml-4">{ command }</p>}
      </For>
    </div>
  );
}

export default History