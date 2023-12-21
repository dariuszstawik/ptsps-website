export default function SectionTitle({ children, isWhite, isAlignedLeft }) {
  return (
    <div
      className={`mt-6 mb-16 flex flex-col ${
        !isAlignedLeft && "justify-center items-center"
      } gap-2`}
    >
      <p
        className={`${
          isWhite ? "text-white" : "text-primaryBlue"
        } text-lg my-0`}
      >
        PTSPS
      </p>
      <h2
        className={`${isAlignedLeft ? "text-left" : "text-center"} ${
          isWhite && "text-white"
        }`}
      >
        {" "}
        {children}
      </h2>
      <div
        className={`mt-4 w-28 h-1 rounded-sm ${
          isWhite ? "bg-primaryGreen" : "bg-primaryBlue"
        }`}
      />
    </div>
  );
}
