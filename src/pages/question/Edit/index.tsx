import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import { useDispatch } from 'react-redux'
import { changeSelectId } from '../../../store/componentsReducer'

const Edit: FC = () => {
  const { loading } = useLoadQuestionData()
  const dispatch = useDispatch()

  function clearSelectedId() {
    dispatch(changeSelectId(''))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <div className={styles.main} onClick={() => clearSelectedId()}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
