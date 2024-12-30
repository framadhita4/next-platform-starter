'use client'

import { use } from "react"

const Page = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);

  const {slug} = params;

  return (
    <div>
      <h1>Page {slug}</h1>
    </div>
  )
}

export default Page