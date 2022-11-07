import React, { CSSProperties, forwardRef } from 'react'
import {
  NavLink as BaseNavLink,
  NavLinkProps as BaseNavLinkProps,
} from 'react-router-dom'

import styles from './NavBar.module.scss'

interface NavLinkProps extends BaseNavLinkProps {
  activeClassName?: string
  activeStyle?: CSSProperties
  children?: React.ReactNode
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { activeClassName = styles.active, activeStyle, ...props }: NavLinkProps,
    ref
  ) => (
    <BaseNavLink
      ref={ref}
      {...props}
      className={({ isActive }) =>
        [props.className, styles.navLink, isActive ? activeClassName : null]
          .filter(Boolean)
          .join(' ')
      }
      style={({ isActive }) => ({
        ...props.style,
        ...(isActive ? activeStyle : null),
      })}
    >
      {props.children}
    </BaseNavLink>
  )
)

export default NavLink
