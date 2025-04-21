export async function getServerSideProps() {
    const data = { message: "This is SSR content." };
    return { props: { data } };
  }
  
  export default function SSRPage({ data }) {
    return <h1>{data.message}</h1>;
  }
  