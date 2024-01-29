import React from 'react'
import { motion } from 'framer-motion'

type ModelProps = {
  onClose: () => void
  modalData: string[] | null
}

const Modal = ({ onClose, modalData }: ModelProps) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 25 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 h-screen ml-20 w-60 flex flex-col bg-white text-black items-center border-r border-black gap-5 pt-5`}
      onClick={onClose}
    >
      <div>
        {modalData?.map((data, index) => (
          <div key={`model-${index}`}>{data}</div>
        ))}
      </div>
    </motion.div>
  )
}

export default Modal
