import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { GithubIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-20">
      <div className="text-center max-w-2xl">
        <h1>
          <span className={title()}>Hi, I’m&nbsp;</span>
          <span className={title({ color: "violet" })}>Chris Holt</span>
          <br />
          <span className={title()}>
            A software engineer building useful tools & beautiful UIs.
          </span>
        </h1>
        <p className={subtitle({ class: "mt-6" })}>
          I specialize in full-stack development, Web3 apps, and crafting elegant user experiences with modern tools.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-4">
        <Link
          href="/projects"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          View Projects
        </Link>

        <Link
          isExternal
          href={siteConfig.links.github}
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-10">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Working w/&nbsp;
            <Code color="primary">VetsNow – OOH Pet Emergency Care.</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
