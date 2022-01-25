import Swal from "sweetalert2";

const SuccessAlert = (theme, error) => {
  Swal.fire({
    icon: "error",
    title: `ERROR ${error}`,
    showConfirmButton: false,
    color: theme.textColor,
    background: theme.backgroundColor,
    timer: 1500,
  });
};

export default SuccessAlert;
