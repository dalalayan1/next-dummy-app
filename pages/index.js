// SSR

import fetch from "isomorphic-unfetch";

function HomePage({ stars }) {
  return <div>Next stars: {stars}</div>;
}

HomePage.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default HomePage;
