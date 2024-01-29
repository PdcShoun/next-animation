'use client'

import React, { useState } from 'react'
import Modal from './Modal'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<string[] | null>(null)

  const menuArray = [
    {
      name: 'Menu1',
      subMenu: ['SubMenu1', 'SubMenu2', 'SubMenu3'],
    },
    {
      name: 'Menu2',
      subMenu: ['SubMenu1', 'SubMenu2', 'SubMenu3'],
    },
    {
      name: 'Menu3',
      subMenu: ['SubMenu1', 'SubMenu2', 'SubMenu3'],
    },
  ]

  const setOpenHandler = (index: number) => {
    setIsOpen(!isOpen)
    const selectedMenu = menuArray[index]
    setModalData(selectedMenu.subMenu)
  }

  const setCloseHandler = () => {
    setIsOpen(false)
  }
  return (
    <div className="fixed z-0 top-0 left-0 h-screen w-20 flex flex-col bg-black text-white items-center gap-5 pt-5">
      {menuArray.map((menu, index) => (
        <ul key={index}>
          <button onClick={() => setOpenHandler(index)}>{menu.name}</button>
        </ul>
      ))}

      {isOpen && <Modal onClose={setCloseHandler} modalData={modalData} />}
    </div>
  )
}
