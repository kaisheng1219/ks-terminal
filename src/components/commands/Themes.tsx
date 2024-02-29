import { For } from "solid-js";
import { setTheme } from "../../hooks/themeHook";
import { themesDict } from "./Commands";

interface ThemeProps {
  theme?: string;
}

const Themes = (props: ThemeProps) => {
  if (props.theme) {
    if (themesDict[props.theme as keyof typeof themesDict]) {
      setTheme(props.theme);
      return <></>;
    } else {
      return <span class="text-skin-text">No such theme: {props.theme}!</span>;
    }
  } else {
    return (
      <div class="flex flex-col text-skin-text">
        <div class="mb-2 flex flex-row">
          [
          <div class="flex flex-row gap-4">
            {
              <For each={Object.keys(themesDict)}>
                {(theme) => <span>{theme}</span>}
              </For>
            }
          </div>
          ]
        </div>
        <span class="whitespace-pre">{`  Usage: themes [theme]`}</span>
        <span>Example: themes alien</span>
      </div>
    );
  }
};

export default Themes;
