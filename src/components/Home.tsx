import React from 'react'

import { QRCode } from "react-qr-svg";

export const Home = () => {
  return (
    <div>
      <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="Q"
        style={{ width: 150, height: 150 }}
        value="some texthhhhhhhhhhhhhh"
      />
    </div>
  )
}
