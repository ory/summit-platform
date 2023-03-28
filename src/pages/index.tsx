import useToSession from "@/hooks/useToSession";
import Link from "next/link";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const title = "Ory Showcase - Landing Page";

export default function Home() {
  const user = useToSession();
  return (
    <>
      <Header title={title} />
      <Layout>
        <Navigation session={user.session} logoutUrl={user.logoutUrl} />
        <Hero session={user.session} />
        <div className="grid gap-8 max-w-5xl grid-cols-[repeat(auto-fill,minmax(300px,350px))] justify-between items-center">
          <div className="p-2 md:p-4">
            <h3 className="font-medium mb-3">Disclaimer</h3>
            <p className="m-0 opacity-60 text-sm leading-6 max-w-prose">
              This is a demo application, do not enter sensitive information.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
