import PropTypes from 'prop-types';
import css from "./FormFind.module.css"

const FormFind = ({ value, handleChange }) => {
    return <form className={css.form} >
        <label className={css.label}>Find contacts by name</label>
        <input
            type="text"
            name="filter"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={value}
            onChange={handleChange}
        />
    </form>
}

FormFind.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string,

}

export default FormFind;