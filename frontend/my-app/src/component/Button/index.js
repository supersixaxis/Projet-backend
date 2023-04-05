import  "./styles.module.css";

function Button({ children, color, clickAction, type, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={clickAction && clickAction}
      className={`button_${color} button`}
    >
      {children}
    </button>
  );
}

export default Button;