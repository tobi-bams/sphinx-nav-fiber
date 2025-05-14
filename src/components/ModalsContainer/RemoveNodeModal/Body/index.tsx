import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { deleteNode, getTopicsData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { NodeExtended, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  name: string
}

export const Body = () => {
  const { close } = useModal('removeNode')
  const { close: closeEditNodeModal } = useModal('editNodeName')

  const [loading, setLoading] = useState(false)
  const { navigateToNode } = useNodeNavigation()
  const [removeNode] = useDataStore((s) => [s.removeNode])

  const [topicIsLoading, setTopicIsLoading] = useState(false)

  const [actualNode, setActualNode] = useState<null | NodeExtended>()
  const [actualTopicNode, setActualTopicNode] = useState<null | Topic>()

  const selectedNode = useSelectedNode()

  const closeHandler = () => {
    close()
  }

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        if (selectedNode.type === 'topic') {
          const { data } = await getTopicsData({ search: selectedNode?.name })

          const node = data.find((i: Topic) => i.name === selectedNode.name)

          setActualTopicNode(node)
        } else {
          setActualNode(selectedNode)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const handleTopicRemove = async () => {
    setLoading(true)

    try {
      navigateToNode(null)
      closeHandler()
      closeEditNodeModal()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = async () => {
    let refId = ''
    const node = actualNode || actualTopicNode

    if (!node) {
      return
    }

    if (node?.ref_id) {
      refId = node.ref_id
    }

    setLoading(true)

    const selectedNodeId = selectedNode?.ref_id as string

    try {
      await deleteNode(refId)

      removeNode(selectedNodeId)
      navigateToNode(null)

      closeHandler()
      closeEditNodeModal()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      <TitleEditor nodeName={actualNode?.name || actualTopicNode?.name || ''} />
      {topicIsLoading ? (
        <Skeleton />
      ) : (
        <Flex direction="row" mt={34}>
          <CancelButton
            color="secondary"
            onClick={closeHandler}
            size="large"
            style={{ flex: 1, marginRight: 20 }}
            variant="contained"
          >
            Cancel
          </CancelButton>
          <DeleteButton
            color="secondary"
            disabled={loading || (!actualNode && !actualTopicNode)}
            onClick={actualNode || actualTopicNode ? handleRemove : handleTopicRemove}
            size="large"
            style={{ flex: 1 }}
            variant="contained"
          >
            Delete
            {loading && (
              <ClipLoaderWrapper>
                <ClipLoader color={colors.lightGray} size={12} />
              </ClipLoaderWrapper>
            )}
          </DeleteButton>
        </Flex>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  padding: 4px 12px 16px;
`

const CancelButton = styled(Button)`
  && {
    background: ${colors.white};
    color: ${colors.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${colors.white};
      color: ${colors.BG2};
    }
  }
`

const DeleteButton = styled(Button)`
  && {
    color: ${colors.white};
    background-color: ${colors.primaryRed};

    &:hover,
    &:active,
    &:focus {
      color: ${colors.white};
      background-color: ${colors.primaryRed};
    }
  }
`

const ClipLoaderWrapper = styled.span`
  margin-top: 2px;
`
