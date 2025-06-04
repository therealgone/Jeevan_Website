// Stack.jsx
import * as simpleIcons from "simple-icons";

const backendTech = [
  { key: "nextdotjs", name: "Next.js" },
  { key: "tailwindcss", name: "Tailwind CSS" },
  { key: "framer", name: "Framer" },
  { key: "python", name: "Python" },
  { key: "typescript", name: "TypeScript" },
  { key: "mysql", name: "MySQL" },
  { key: "mariadb", name: "MariaDB" },
  { key: "linux", name: "Linux" },
  { key: "git", name: "Git" },
  { key: "podman", name: "Podman" },
  { key: "nvidia", name: "NVIDIA" },
  { key: "intel", name: "Intel" },
  { key: "postgresql", name: "PostgreSQL" },
];

function Stack() {
  return (
    <div className="min-h-screen tracking-wide">
      <div className="items-center flex flex-col p-10">
        <h1 className="text-4xl text-white font-bold">Technology Stack</h1>
      </div>

      <div className="px-20 mt-10 tracking-wide">
        <h1 className="pl-5 text-glow-white font-mono text-2xl">Backend</h1>
        <div className="grid grid-cols-5 gap-6 mt-5 p-5 max-w-6xl w-full">
          {backendTech.map(({ key, name }) => {
            const icon = simpleIcons.get(key);
            if (!icon) return null;

            return (
              <div
                key={key}
                className="border w-40 h-48 flex flex-col items-center justify-center rounded-2xl bg-animated-gradient opacity-90 shadow-md hover:scale-105 transition-all duration-300"
              >
                <svg
                  role="img"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill={`#${icon.hex}`}
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2"
                >
                  <title>{icon.title}</title>
                  <path d={icon.path} />
                </svg>
                <p className="text-white text-sm font-semibold">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stack;
