import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
// import React, { useState } from "react";

const Batman = props => {
  // const [show, setShow] = useState("batman");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const handleOnChange = e => {
    console.log(e.target.value);
  };
  return (
    <Layout>
      <h2>Search For TV Shows</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange}></input>
      </form>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Batman.getInitialProps = async function(props) {
  const res = await fetch(
    // `https://api.tvmaze.com/search/shows?q=${props.show}`
    `https://api.tvmaze.com/search/shows?q=batman`
  );
  console.log(res);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Batman;
