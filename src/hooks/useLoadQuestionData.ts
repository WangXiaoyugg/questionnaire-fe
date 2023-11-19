import { useParams } from 'react-router-dom'
import { getQuestionService } from '../services/question'
import { useRequest } from 'ahooks'

function useLoadQuestionData() {
  const { id = '' } = useParams()

  const { loading, data, error } = useRequest(getQuestionService)
  return { loading, data, error }
}

export default useLoadQuestionData
