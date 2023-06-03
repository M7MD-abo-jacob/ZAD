export default function getAgentsData(query) {
  const gov = query?.gov || "";
  const area = query?.area || "";

  // fetch data depending on query
  // const {data: agents} = axios.get(`/agents?gov=${gov}&area=${area}`);

  // TODO: static data, change later
  const agents = gov && area ? require("../data/agents.json") : [];
  const governates = ["damascus", "latakia", "tartus", "homs", "aleppo"];
  return { agents, governates };
}
