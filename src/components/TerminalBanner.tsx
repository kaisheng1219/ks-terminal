const TerminalBanner = () => {
  const banner = [
    ".   '     .   .'     .           .",
    "            _.---._   .     .     *",
    "*   .     .'       '.",
    "      _.-~===========~-._",
    "  .  (___________________)    .   *",
    "           \\_______/   ",
  ];

  const banner2 = [
    ".     .       .  .   . .   .   . .    +  .",
    "  .     .  :     .    .. :. .___---------___.",
    '      .  .   .    .  :.:. _".^ .^ ^.  \'.. :"-_. .',
    "    .  :       .  .  .:../:            . .^  :.:\\.",
    "        .   . :: +. :.:/: .   .    .        . . .:\\",
    ".  :    .     . _ :::/:               .  ^ .  . .:\\",
    "  .. . .   . - : :.:./.                        .  .:\\",
    "  .      .     . :..|:                    .  .  ^. .:|",
    "    .       . : : ..||        .                . . !:|",
    "  .     . . . ::. ::\\(                           . :)/",
    ".   .     : . : .:.|. ######              .#######::|",
    "  :.. .  :-  : .:  ::|.#######           ..########:|",
    ".  .  .  ..  .  .. :\\ ########          :######## :/",
    "  .        .+ :: : -.:\\ ########       . ########.:/",
    "    .  .+   . . . . :.:\\. #######       #######..:/",
    "      :: . . . . ::.:..:.\\           .   .   ..:/",
    "  .   .   .  .. :  -::::.\\.       | |     . .:/",
    '      .  :  .  .  .-:.":.::.\\             ..:/',
    ".      -.   . . . .: .:::.:.\\.           .:/",
    ".   .   .  :      : ....::_:..:\\   ___.  :/",
    "  .   .  .   .:. .. .  .: :.:.:\\       :/",
    "    +   .   .   : . ::. :.:. .:.|\\  .:/|",
    "    .         +   .  .  ...:: ..|  --.:|",
    '.      . . .   .  .  . ... :..:.."(  ..)"',
    ".   .       .      :  .   .: ::/  .  .::\\",
  ];

  return (
    <div class="mb-2">
      {banner.map((line, index) => {
        var temp = "";
        for (let i = 0; i < line.length; i++) {
          if (line.charAt(i) === " " && line.charAt(i + 1) === " ") {
            temp += "&nbsp;&nbsp;";
            i++;
          } else temp += line.charAt(i);
        }
        return (
          <p
            class="animate-typing overflow-hidden whitespace-nowrap text-skin-text"
            innerHTML={temp}
          ></p>
        );
      })}
      <p class="w-0 animate-typing overflow-hidden whitespace-nowrap text-skin-text fill-mode-forwards animation-delay-500">
        <span>Welcome to my terminal!</span>
      </p>
      <p class="w-0 animate-typing overflow-hidden whitespace-nowrap text-skin-text fill-mode-forwards animation-delay-[800ms]">
        <span>
          Type{" "}
          <span class="text-skin-command shadow-skin-command drop-shadow-[0_0_5px]">
            help
          </span>{" "}
          for a list of available commands.
        </span>
      </p>
    </div>
  );
};

export default TerminalBanner;
