import Link from "next/link";
import Line from "./line";
const ContactSection = () => {
  return (
    <>
      <Line text="Contact" />

      <div className="text-center pb-20 pt-14">
        <p className="font-medium text-3xl mb-10">Let's Get In Touch!</p>

        <Link
          href="/"
          className="bg-[#323443] px-10 py-5 text-white"
        >
          Contact Me
        </Link>
      </div>
    </>
  );
};

export default ContactSection;
