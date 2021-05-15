import { FormatOrders } from "../store/types/stateTypes";

export default function sortArr(arr: FormatOrders[], id: string) {
  const copy = [...arr];
  return copy.sort((a: FormatOrders, b: FormatOrders) => {
    let textA: any;
    let textB: any;
    if (id === "date") {
      textA = new Date(`${a[id].day} ${a[id].time}`);
      textB = new Date(`${b[id].day} ${b[id].time}`);
    } else if (id === "subject") {
      textA = a.subject.title?.toLowerCase();
      textB = b.subject.title?.toLowerCase();
    } else if (id === "order_id") {
      textA = a[id];
      textB = b[id];
    } else {
      textA = a[id].toLowerCase();
      textB = b[id].toLowerCase();
    }
    return textA > textB ? 1 : textB > textA ? -1 : 0;
  });
}
