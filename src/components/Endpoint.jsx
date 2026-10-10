import MethodBadge from "./MethodBadge";

/**
 * Endpoint — one documented section: plain-language docs on the left,
 * the example request or response in a dark panel on the right.
 *
 *  method, path   shown in the badge line
 *  panelLabel     small caption above the panel content, e.g. "Response"
 *  panelStatus    optional status after the caption, e.g. "200 OK"
 *  panel          the panel content, usually <JsonCode />
 */
const Endpoint = ({ id, method, path, panelLabel = "Response", panelStatus, panel, children }) => {
  return (
    <section
      id={id}
      className="grid scroll-mt-28 grid-cols-[minmax(0,1fr)] border-b border-line lg:scroll-mt-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,27rem)]"
    >
      <div className="min-w-0 px-5 py-12 md:px-12 md:py-14">
        <MethodBadge method={method} path={path} />
        {children}
      </div>
      <div className="min-w-0 bg-panel text-panel-text [color-scheme:dark]">
        <div className="px-5 py-10 md:px-10 xl:sticky xl:top-[61px] xl:py-14">
          <p className="mb-4 font-mono text-[13px] text-panel-muted">
            {panelLabel}
            {panelStatus && <span className="ml-2 font-bold text-panel-number">{panelStatus}</span>}
          </p>
          {panel}
        </div>
      </div>
    </section>
  );
};

export default Endpoint;
