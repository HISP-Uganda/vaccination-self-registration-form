import React from 'react'
import { QRCode } from "react-qr-svg";

export const Barcode = () => {
  return (
    <div>
      <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="Q"
        style={{ width: 150, height: 150 }}
        value="some text"
      />
    </div>
  )
}
