import moment from "moment";
import { OrderDetails } from "../store/types/stateTypes";

export default function formatArr(arr: []) {
  return arr.map((val: OrderDetails) => {
    return {
      "Date & Time": {
        day: moment(val.sent_dt).format("ddd, MMM DD"),
        time: moment(val.sent_tm, ["HH:mm:ss"]).format("h:mm A"),
      },
      Subject: val.subject,
      "Communication Type": val.type,
      "Order#": val.order_id,
    };
  });
}
