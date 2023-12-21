import Image from "next/image";

export default function () {
  return (
    <div>
      <Image src="/logo.png" alt="Logo" width={300} height={300} />
    </div>
  );
}
