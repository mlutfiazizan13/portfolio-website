import Endpoint from "./Endpoint";
import JsonCode from "./JsonCode";

const email = "mlutfiazizan@gmail.com";

const socials = [
  { label: "GitHub", url: "https://github.com/mlutfiazizan13" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/muhamad-lutfi-azizan/" },
  { label: "Instagram", url: "https://www.instagram.com/lutf_azn/" },
];

const Footer = () => {
  return (
    <Endpoint
      id="contact"
      method="POST"
      path="/contact"
      panelLabel="Request body"
      panel={
        <>
          <JsonCode value={{ to: email, subject: "We need a backend" }} />
          <p className="mt-7 font-mono text-[13px] text-panel-muted">
            Response<span className="ml-2 font-bold text-panel-number">202 Accepted</span>
          </p>
        </>
      }
    >
      <h2 className="title mb-3 mt-4 text-4xl md:text-[44px]">Start a conversation</h2>
      <p className="mb-6 max-w-[30em] text-soft">No API key needed. Email is the fastest way to reach me.</p>
      <a
        href={`mailto:${email}`}
        className="inline-block max-w-full break-all rounded-[10px] border-2 border-ink px-5 py-3.5 font-mono text-lg font-bold hover:border-post hover:text-post md:text-2xl"
      >
        {email}
      </a>

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2">
        {socials.map(({ label, url }) => (
          <a key={label} href={url} target="_blank" rel="noreferrer" className="py-2 font-semibold hover:text-post">
            {label}
          </a>
        ))}
        <span className="py-2 text-muted">© {new Date().getFullYear()} Muhamad Lutfi Azizan</span>
      </div>
    </Endpoint>
  );
};

export default Footer;
