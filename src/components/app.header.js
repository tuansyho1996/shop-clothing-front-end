import { Fragment } from "react"
import AppBar from "./header/header.app_bar"

export default function Header() {
  return (
    <Fragment>
      <div className="h-12 font-semibold bg-gray-200 text-lime-600 flex justify-center items-center">Enjoy free shipping on all orders over $100!</div>
      <AppBar />
    </Fragment>
  )
}