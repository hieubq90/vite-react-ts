import logo from '@/assets/logo.svg'
import styles from './NavBar.module.scss'
import NavLink from './NavLink'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        <img src={logo} className="logo" alt="logo" />
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink to="/">
          <MyIconsMemo />
          自分の記録
        </NavLink>
        <NavLink to="challenge">
          <MyIconsChallenge />
          チャレンジ
        </NavLink>
        <NavLink to="news">
          <MyIconsInfo />
          お知らせ
        </NavLink>
        <button className={styles.button}>
          <MyIconsMenu />
        </button>
      </div>
    </div>
  )
}
