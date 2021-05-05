export default function sortArr(arr: any[], e?: any): any {
  const copy = [...arr];
  copy.sort((a: any, b: any): any => {
    let textA: any;
    let textB: any;
    if (e.target.id === "date") {
      textA = new Date(`${a[e.target.id].day} ${a[e.target.id].time}`);
      textB = new Date(`${b[e.target.id].day} ${b[e.target.id].time}`);
      return textB - textA;
    }
    if (e.target.id === "subject") {
      textA = a.subject.title;
      textB = b.subject.title;
      return textB.toLowerCase().localeCompare(textA.toLowerCase());
    }
    if (e.target.id === "order_id") {
      textA = a[e.target.id];
      textB = b[e.target.id];
      return textB === textA ? 0 : textB > textA ? 1 : -1;
    }
    textA = a[e.target.id];
    textB = b[e.target.id];
    return textB.toLowerCase().localeCompare(textA.toLowerCase());
  });
  return copy;
}
