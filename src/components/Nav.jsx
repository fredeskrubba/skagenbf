import React from 'react'
import { Switch, Route, Link, useRoute } from "wouter";
import Home from '../pages/Home';


const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
  };


const Nav = () => {
  return (
    <nav>
        <ActiveLink href="/">Hjem</ActiveLink>
        <section className="nav-right-section">
          <ActiveLink href="/Om">Om</ActiveLink>
          <ActiveLink href="/Afdelinger">Afdelinger</ActiveLink>
          <ActiveLink href="/Kontakt">Kontakt</ActiveLink>
        </section>
    </nav>
  )
}

export default Nav