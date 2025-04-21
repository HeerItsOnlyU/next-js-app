import Head from "next/head";
import dynamic from "next/dynamic";
import AnimatedButton from "@/components/AnimatedButton";

const LazyComponent = dynamic(() => import("../components/LazyMessage"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Optimized App</title>
        <meta name="description" content="A fast, accessible, SEO-friendly app" />
        <meta name="keywords" content="nextjs, performance, seo, accessibility" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-10">
        <h1 className="text-3xl font-bold">Hello Kriti 🚀</h1>
        <AnimatedButton>Click Me</AnimatedButton>
        <LazyComponent />
      </main>
    </>
  );
}
