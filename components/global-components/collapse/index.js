export default function Collapse({ title, children }) {
  return (
    <div className="collapse m-0 p-0">
      <input type="checkbox" className="m-0 p-0" />
      <div className="collapse-title text-base">{title}</div>
      <div className="collapse-content w-full">{children}</div>
    </div>
  );
}
