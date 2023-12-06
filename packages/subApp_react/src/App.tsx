import { useState } from 'react'
import style from './App.module.scss'
import { Button, Modal } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div>
        <Button type="primary" onClick={showModal} className={style.btn}>
          Hello, Ant Design!
        </Button>
      </div>
      <h1 className={style.title}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className={style.modal}>
        <p className={style.tt}>Hello style</p>
      </div>
      <div id="container" />
      <Modal
        className={style.only}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default App
