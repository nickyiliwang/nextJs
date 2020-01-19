import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/b/[id]" as={`/b/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

export default function Index() {
  return (
    <Layout>
      <h1>Blogger</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
        {/* <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" /> */}
      </ul>
    </Layout>
  );
}
