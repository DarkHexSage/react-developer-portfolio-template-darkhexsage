import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    python,
    tailwind,
    azure,
    prometheus,
    vscode,
    git,
    github,
    npm,
    postman,
    kali,
    cka,
    ckad,
    cks,
    eccpt,
    ewptx,
    rhce,
    ta003,
    ex280,
    lfcs,
    k8s,
    linux,
    jenkins,
    docker,
    ansible,
    terraform,
    aws,
    grafana,

  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certifications
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Some of the certifications I have achieved over time to enhance my skills
          and knowledge in various domains.
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={eccpt} title="eccpt" alt="eccpt" />
        <img src={ewptx} title="ewptx" alt="ewptx" />
        <img src={cka} title="cka" alt="cka" />
        <img src={ckad} title="ckad" alt="ckad" />
        <img src={cks} title="cks" alt="cks" />
        <img src={rhce} title="rhce" alt="rhce" />
        <img src={ex280} title="ex280" alt="ex280" />
        <img src={ta003} title="ta003" alt="ta003" />
        <img src={lfcs} title="lfcs" alt="lfcs" />
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={azure} title="Azure" alt="" />
        <img src={prometheus} title="Prometheus" alt="" />
        <img src={k8s} title="Kubernetes" alt="" />
        <img src={linux} title="Linux" alt="" />
        <img src={jenkins} title="Jenkins" alt="" />
        <img src={ansible} title="Ansible" alt="" />
        <img src={terraform} title="Terraform" alt="" />
        <img src={aws} title="AWS" alt="" />
        <img src={grafana} title="Grafana" alt="" />
        <img src={docker} title="Docker" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={kali} title="Kali Linux" alt="kali" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
