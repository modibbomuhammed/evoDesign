import moment from "moment";
import { OrderDetails } from "../store/types/stateTypes";

export default function formatArr(arr: []) {
  return arr.map((val: OrderDetails) => {
    return {
      date: {
        day: moment(val.sent_dt).format("ddd, MMM DD"),
        time: moment(val.sent_tm, ["HH:mm:ss"]).format("h:mm A"),
      },
      subject: val.subject,
      type: val.type,
      order_id: val.order_id,
    };
  });
}
