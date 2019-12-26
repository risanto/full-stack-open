import React from 'react'

const Notification = ({ message }) => {

  if (!message.content) return null

  return (
    <section
      className={
        message.type === 'success'
          ? 'message-success' : 'message-error'
      }
    >
      {message.content}
    </section>
  )
}

export default Notification