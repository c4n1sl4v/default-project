import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Image
    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    src="/default-project/0_dCkBR3Q3lkGMKeAh.png"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
  <h1>Hello!</h1>
    </div>

  );
}
