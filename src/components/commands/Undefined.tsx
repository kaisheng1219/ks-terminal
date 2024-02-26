const Undefined = ({ command = "" }) => {
  return (
    <span class="text-skin-text">
      Unable to find command: <span class="text-skin-command">{command}</span>
    </span>
  );
};

export default Undefined;
