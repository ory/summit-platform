import Image from "next/image";

const Hero = ({ session = null }) => {
  return (
    <div className="flex items-center p-16">
      <Image
        className="filter invert"
        src="/logo.png"
        alt="Next.js Logo"
        width={125}
        height={125}
        priority
      />
      <h2 className="p-4 md:p-4">
        Welcome to Ory {session?.identity.traits.name || "friend"} 👋
      </h2>
    </div>
  );
};

export default Hero;
