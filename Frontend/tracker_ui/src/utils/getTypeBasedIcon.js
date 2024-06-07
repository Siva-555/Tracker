import {
  //   StarFilled,
  //   EditOutlined,
  //   CloseOutlined,
  //   CheckOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const getTypeBasedIcon = (type) => {
  if (type === "Delete") {
    return <DeleteOutlined />;
  } else if (type === "Update") {
    return <UploadOutlined />;
  }
};

export { getTypeBasedIcon };
