import styles from './Filter.module.scss'

interface FilterProps {
  filteredNumber: number
  inputText: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Filter: React.FC<FilterProps> = ({inputText, onChange, filteredNumber }) => {
  return (
    <div className={styles.filter_container}>
    <div className={styles.filter_number}>{filteredNumber}</div>
    <input className={styles.filter_input} 
      onChange={onChange} 
      type='text' 
      value={inputText} 
      placeholder='Filter podcasts...'>
    </input>
  </div>
  )
}

export default Filter
