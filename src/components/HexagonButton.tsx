import React from 'react'
import styles from './HexagonButton.module.scss'

interface ButtonProps {
  children?: React.ReactNode
}

const HexagonButton = ({ ...props }: ButtonProps) => (
  <button className={styles.hexButton}>{props.children}</button>
)

export default HexagonButton
