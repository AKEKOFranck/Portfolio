export default function Screen({ title, subtitle, children }) {
  return (
    <>
      <div className="head">
        <h2 className="title">{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      <div className="body">
        <div className="in">{children}</div>
      </div>
    </>
  );
}