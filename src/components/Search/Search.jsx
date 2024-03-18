import Select from '../Select/Select';
import UiButton from '../UiButtons/UiButtons';
import styles from './Search.module.css';
export default function Search() {
  return (
      <section className={styles.search}>
          <ion-icon name="search-outline" />
          <input
            type="search"
            placeholder="Search the website..."
          />          
          <Select label='sort by' options={['default','topic']} className='sort'/>
          <Select label='filter by' options={['default','topic']}  className='filter'/>
        </section>
  );
}
