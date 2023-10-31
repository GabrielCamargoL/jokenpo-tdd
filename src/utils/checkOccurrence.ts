export default function checkOccurrence(array: string[], item: string) {
  return array.filter((currentItem) => currentItem == item).length;
}