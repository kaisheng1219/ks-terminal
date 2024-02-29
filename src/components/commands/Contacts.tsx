import { For } from "solid-js";
import { platforms } from "./Commands";

interface ContactsProps {
  platform?: string;
}

const Contacts = (props: ContactsProps) => {
  if (props.platform) {
    const fPlatform = platforms.filter((obj) => obj.name === props.platform);
    if (platforms.filter((obj) => obj.name === props.platform)) {
      window.open(fPlatform[0].url, "_blank");
      return <></>;
    } else {
      return (
        <span class="text-skin-text">No such platform: {props.platform}!</span>
      );
    }
  } else
    return (
      <div class="flex flex-col text-skin-text">
        <div class="mb-4 flex flex-col">
          {
            <For each={platforms}>
              {(platform) => (
                <div class="flex flex-row">
                  <span class="w-1/6 text-skin-command">{platform.name}</span>
                  <span class="whitespace-pre text-skin-text-second">
                    {"- "}
                  </span>
                  <a
                    class="text-skin-text-second underline"
                    href={platform.url}
                  >
                    {platform.url.startsWith("mailto")
                      ? platform.url.substring(7)
                      : platform.url}
                  </a>
                </div>
              )}
            </For>
          }
        </div>
        <span class="whitespace-pre">{`  Usage: contacts [platform]`}</span>
        <span>Example: contacts linkedin</span>
      </div>
    );
};

export default Contacts;
