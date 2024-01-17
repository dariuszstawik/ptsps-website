import Image from "next/image";

export default function Logo({ hasWhiteBackground }) {
  return (
    <div className={hasWhiteBackground && "bg-white rounded"}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={200}
        className="w-96"
      />
    </div>
  );
}
