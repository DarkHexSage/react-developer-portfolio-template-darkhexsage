import React from "react";
import { techStackDetails } from "./Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    python,
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
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-6 pt-6">
        <img src={eccpt} title="eccpt" alt="eccpt" className="h-40 w-40 object-contain" />
        <img src={ewptx} title="ewptx" alt="ewptx" className="h-40 w-40 object-contain" />
        <img src={cka} title="cka" alt="cka" className="h-40 w-40 object-contain" />
        <img src={ckad} title="ckad" alt="ckad" className="h-40 w-40 object-contain" />
        <img src={cks} title="cks" alt="cks" className="h-40 w-40 object-contain" />
        <img src={rhce} title="rhce" alt="rhce" className="h-40 w-40 object-contain" />
        <img src={ex280} title="ex280" alt="ex280" className="h-40 w-40 object-contain" />
        <img src={ta003} title="ta003" alt="ta003" className="h-40 w-40 object-contain" />
        <img src={lfcs} title="lfcs" alt="lfcs" className="h-40 w-40 object-contain" />
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-6 pt-6">
        <img src={html} title="html" alt="" className="h-32 w-32 object-contain" />
        <img src={css} title="CSS" alt="" className="h-32 w-32 object-contain" />
        <img src={js} title="JavaScript" alt="" className="h-32 w-32 object-contain" />
        <img src={react} title="React" alt="" className="h-32 w-32 object-contain" />
        <img src={python} title="Python" alt="" className="h-32 w-32 object-contain" />
        <img src={docker} title="Docker" alt="" className="h-32 w-32 object-contain" />    
        <img src={azure} title="Azure" alt="" className="h-32 w-32 object-contain" />
        <img src={prometheus} title="Prometheus" alt="" className="h-32 w-32 object-contain" />
        <img src={k8s} title="Kubernetes" alt="" className="h-32 w-32 object-contain" />
        <img src={linux} title="Linux" alt="" className="h-32 w-32 object-contain" />
        <img src={jenkins} title="Jenkins" alt="" className="h-32 w-32 object-contain" />
        <img src={ansible} title="Ansible" alt="" className="h-32 w-32 object-contain" />
        <img src={terraform} title="Terraform" alt="" className="h-32 w-32 object-contain" />
        <img src={aws} title="AWS" alt="" className="h-32 w-32 object-contain" />
        <img src={grafana} title="Grafana" alt="" className="h-32 w-32 object-contain" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center gap-6 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" className="h-32 w-32 object-contain" />
        <img src={git} title="Git" alt="Git" className="h-32 w-32 object-contain" />
        <img src={github} title="Github" alt="Github" className="h-32 w-32 object-contain" />
        <img src={kali} title="Kali Linux" alt="kali" className="h-32 w-32 object-contain" />
        <img src={npm} title="NPM" alt="NPM" className="h-32 w-32 object-contain" />
        <img src={postman} title="Postman" alt="Postman" className="h-32 w-32 object-contain" />
      </section>
    </main>
  );
}

export default Technologies;
