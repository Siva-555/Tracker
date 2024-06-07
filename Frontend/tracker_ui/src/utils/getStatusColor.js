const StatusFields = [
  { label: "Unread", value: "unread", color: "#808080" },
  { label: "Read", value: "read", color: "#6f99e4" },
  { label: "Reading", value: "reading", color: "#8DEA43" },
  { label: "Want To Read", value: "want-to-read", color: "#FCFC3C" },
  { label: "Stalled", value: "stalled", color: "#FC9F3C" },
  { label: "Dropped", value: "dropped", color: "#d93d48" },
  { label: "Won't Read", value: "wont-read", color: "#9942E9" },
];

const getStatusColor = (statusValue) => {
  let temp = {};
  StatusFields.forEach((ele) => {
    if (ele.value === statusValue) {
      temp = { label: ele.label, color: ele.color };
      return;
    }
  });
  return temp;
};

export { getStatusColor };
