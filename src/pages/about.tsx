import Image from "next/image";

export default function Home(): React.JSX.Element {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="http://www.w3.org/2000/svg"
        alt="Logo"
      />
    </div>
  );
}
