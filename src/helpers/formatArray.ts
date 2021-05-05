import moment from "moment";

export default function formatArr(arr: any) {
  return arr.map((val: any) => {
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
