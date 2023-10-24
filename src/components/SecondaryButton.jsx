import PropTypes from 'prop-types';

const SecondaryButton = ({ btnText }) => {
    return (
        <button className='btn btn-outline border-brandRed-500 font-semibold text-lg text-brandRed-500  normal-case rounded-md  hover:bg-brandRed-500 hover:text-white'>{btnText}</button>
    );
};

SecondaryButton.propTypes = {
    btnText: PropTypes.string.isRequired,
};

export default SecondaryButton;