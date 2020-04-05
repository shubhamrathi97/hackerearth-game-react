export const fetchRecord = () => {
  fetch("http://starlord.hackerearth.com/TopSellingGames")
    .then(res => res.text())
    .catch(err => {
      console.log(err);
    });
};
