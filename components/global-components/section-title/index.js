export default function SectionTitle({ children, isWhite, isAlignedLeft }) {
  return (
    <div
      className={` mb-6 flex flex-col ${
        !isAlignedLeft && "justify-center items-center"
      } gap-2`}
    >
      {/* <p
        className={`${
          isWhite ? "text-white" : "text-primaryBlue"
        } text-lg my-0`}
      >
        PTSPS
      </p> */}
      <h2
        className={`uppercase font-semibold ${
          isAlignedLeft ? "text-left" : "text-center"
        } ${isWhite && "text-white"}`}
      >
        {" "}
        {children}
      </h2>
      <div
        className={`mt-4 w-20 h-1 rounded-sm ${
          isWhite ? "bg-primaryGreen" : "bg-primaryBlue"
        }`}
      />
    </div>
  );
}
