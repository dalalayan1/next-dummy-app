// CSR

const API_URL = "https://api.github.com";

import fetch from "unfetch";
import useSWR from "swr";

async function fetcher(path) {
  const res = await fetch(API_URL + path);
  const json = await res.json();
  return json;
}

function AboutPage() {
  const { data, error } = useSWR("/repos/zeit/next.js", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>Next stars: {data.stargazers_count}</div>;
}

export default AboutPage;
