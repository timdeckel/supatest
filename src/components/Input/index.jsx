import styles from "./Input.module.css";
import Button from "../Button";

const Input = () => {

  async function writeData() {
      const { data, error } = await supabase
    .from('countries')
    .insert([
      { some_column: 'someValue', other_column: 'otherValue' },
    ])
    .select()
  }

  return (
    <div className={styles.input__wrapper}>
      <input type="text" />
      <Button/>
    </div>
  )
};

export default Input;
