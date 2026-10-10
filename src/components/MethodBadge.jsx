/**
 * MethodBadge — the "GET /projects" line that opens every section.
 */
const MethodBadge = ({ method = "GET", path }) => {
  return (
    <p className="font-mono text-sm">
      <span
        className={`inline-block rounded-md px-2.5 py-0.5 font-bold text-white ${
          method === "POST" ? "bg-post" : "bg-get"
        }`}
      >
        {method}
      </span>
      <span className="ml-2 break-all">{path}</span>
    </p>
  );
};

export default MethodBadge;
