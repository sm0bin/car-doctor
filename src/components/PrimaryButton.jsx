import PropTypes from 'prop-types';

const PrimaryButton = ({ btnText }) => {
    return (
        <button className='btn font-semibold text-lg text-white normal-case border-none rounded-md bg-brandRed-500 hover:bg-brandRed-600'>{btnText}</button>
    );
};

PrimaryButton.propTypes = {
    btnText: PropTypes.string.isRequired,
};

export default PrimaryButton;