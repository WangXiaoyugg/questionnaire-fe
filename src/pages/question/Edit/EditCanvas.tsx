import React, { FC, MouseEvent } from 'react'
import { Spin } from 'antd'
import styles from './EditCanvas.module.scss'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { getComponentConfigByType } from '../../../components/Question'
import { ComponentInfoType } from '../../../store/componentsReducer'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { changeSelectId } from '../../../store/componentsReducer'

type PropsType = {
  loading: boolean
}

function genComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo

  const componentConfig = getComponentConfigByType(type)
  if (componentConfig == null) return null

  const { Component } = componentConfig
  return <Component {...props} />
}

const EditCanvas: FC<PropsType> = props => {
  const { loading } = props
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <Spin />
      </div>
    )
  }

  function handleSelected(e: MouseEvent, id: string) {
    e.stopPropagation()
    console.log('id: ', id)
    dispatch(changeSelectId(id))
  }

  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c

        const wrapperDefaultClassName = styles['component-wrapper']
        const selectedClassName = styles['component-selected']
        const wrapperClassName = clsx({
          [wrapperDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })

        return (
          <div key={fe_id} className={wrapperClassName} onClick={e => handleSelected(e, fe_id)}>
            <div className={styles.component}>{genComponent(c)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas
