const getTypeBasedColor = (type) => {
  if (type === "Delete") {
    return "red";
  } else if (type === "Update") {
    return "green";
  }
};

export { getTypeBasedColor };
