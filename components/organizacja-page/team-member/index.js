export default function TeamMember({ name, role, children, img }) {
  return (
    <div>
      <img
        className="object-cover w-24 h-24 rounded-full shadow"
        src={img}
        alt="Person"
      />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-4 text-xs text-primaryBlue">{role}</p>
        <p className="text-sm tracking-wide text-gray-800">{children}</p>
      </div>
    </div>
  );
}
