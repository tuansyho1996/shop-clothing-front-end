import { Fragment } from "react"
import AppBar from "./header.app_bar"

export default function Header() {
  return (
    <Fragment>
      <div className="h-12 font-semibold bg-lime-100 text-lime-600 flex justify-center items-center">Enjoy free shipping on all orders over $100!</div>
      <AppBar />
    </Fragment>
  )
}