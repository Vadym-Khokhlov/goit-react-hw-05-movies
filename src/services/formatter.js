const RateMovie = vote => {
  return Math.round(vote * 10);
};

function FormatDateRelease(date) {
  if (!date) {
    return;
  }
  const parsedDate = Date.parse(date);
  return new Date(parsedDate).getFullYear();
}

const formatter = { RateMovie, FormatDateRelease };

export default formatter;
