import { FormatOrders } from "../store/types/stateTypes";

export default function sortArr(arr: FormatOrders[], id: string) {
  const copy = [...arr];
  copy.sort((a: FormatOrders, b: FormatOrders) => {
    let textA: any;
    let textB: any;
    if (id === "date") {
      textA = new Date(`${a[id].day} ${a[id].time}`);
      textB = new Date(`${b[id].day} ${b[id].time}`);
      return textB - textA;
    }
    if (id === "subject") {
      textA = a.subject.title;
      textB = b.subject.title;
      return textB.toLowerCase().localeCompare(textA.toLowerCase());
    }
    if (id === "order_id") {
      textA = a[id];
      textB = b[id];
      return textB === textA ? 0 : textB > textA ? 1 : -1;
    }
    textA = a[id];
    textB = b[id];
    return textB.toLowerCase().localeCompare(textA.toLowerCase());
  });
  return copy;
}
