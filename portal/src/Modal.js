import React from 'react'
import ModalTrigger from './ModalTrigger'
import ModalContent from './ModalContent'

class Modal extends React.Component {
  render() {
    const { triggerText } = this.props
    return (
      <>
        <ModalTrigger text={triggerText} />
        <ModalContent />
      </>
    )
  }
}

export default Modal
