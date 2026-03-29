function transform(date) {
  date = new Date(date);
  return date.toISOString().slice(0, 19).replace('T', ' ');
}
export { transform };
