import { FormatOrders } from "../store/types/stateTypes";

export default function sortArr(arr: FormatOrders[], key: string) {
  const copy = [...arr];
  return copy.sort((a: FormatOrders, b: FormatOrders) => {
    let textA: any;
    let textB: any;
    if (key === "Date & Time") {
      textA = new Date(`${a[key].day} ${a[key].time}`);
      textB = new Date(`${b[key].day} ${b[key].time}`);
    } else if (key === "Subject") {
      textA = a.Subject.title?.toLowerCase();
      textB = b.Subject.title?.toLowerCase();
    } else if (key === "Order#") {
      textA = a[key];
      textB = b[key];
    } else {
      textA = a[key].toLowerCase();
      textB = b[key].toLowerCase();
    }
    return textA > textB ? 1 : textB > textA ? -1 : 0;
  });
}
