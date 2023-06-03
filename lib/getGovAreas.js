// fetch areas for the selected governate every time the user changes the governate

export default function getGovAreas(gov) {
  // const {data: areas} = gov ? axios.get(`/areas?gov=${gov}`) : [];
  // TODO: change static data to dynamic
  const areas = ["latakia", "jableh", "anything", "any"];
  return areas;
}
