import Swal from "sweetalert2";

const SuccessAlert = (theme) => {
  Swal.fire({
    icon: "success",
    title: "Message sent",
    showConfirmButton: false,
    color: theme.textColor,
    background: theme.backgroundColor,
    timer: 1500,
  });
};

export default SuccessAlert;
