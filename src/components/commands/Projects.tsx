import { For } from "solid-js";
import { projects } from "./Commands";

interface ProjectsProps {
  projectIndex?: string;
}

const Projects = (props: ProjectsProps) => {
  if (props.projectIndex) {
    const isNumber = props.projectIndex >= "1" && props.projectIndex <= "9";
    const isValidArg =
      isNumber && Number.parseInt(props.projectIndex) <= projects.length;
    if (isValidArg) {
      window.open(
        projects[Number.parseInt(props.projectIndex) - 1].url,
        "_blank",
      );
      return <></>;
    } else {
      return <span class="text-skin-text">No such project number!</span>;
    }
  } else {
    return (
      <div class="flex flex-col text-skin-text">
        <div class="mb-4 flex flex-col space-y-2">
          {
            <For each={projects}>
              {(project, index) => (
                <div class="flex flex-col">
                  <span class="font-bold text-skin-text">
                    {index() + 1}. {project.name}
                  </span>
                  <p class="max-w-lg whitespace-pre text-wrap text-skin-text-second">
                    {project.desc}
                  </p>
                </div>
              )}
            </For>
          }
        </div>
        <span class="whitespace-pre">{`  Usage: projects [project number]`}</span>
        <span>Example: projects 1</span>
      </div>
    );
  }
};

export default Projects;
