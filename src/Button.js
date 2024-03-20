import Proptypes from "prop-types";

function Button({ text }) {
    return (
        <button
            style={{
                color: "white",
                backgroundColor: "tomato",
                fontSize: "2rem",
            }}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: Proptypes.string.isRequired,
};

export default Button;
