import Image from "next/image";

export default function Logo({ hasWhiteBackground }) {
  return (
    <div className={hasWhiteBackground && "bg-white p-4 rounded"}>
      <Image src="/logo.png" alt="Logo" width={300} height={300} />
    </div>
  );
}
