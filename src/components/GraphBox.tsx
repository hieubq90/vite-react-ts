import graphImage from '~/assets/main_graph-min.png'
import styles from '~/components/GraphBox.module.scss'

export default function GraphBox() {
  return (
    <div className={styles.graphBox}>
      <img src={graphImage} width={589} height={294} alt="fake-graph" />
    </div>
  )
}
