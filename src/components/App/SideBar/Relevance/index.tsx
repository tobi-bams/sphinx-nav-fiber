import { Button } from '@mui/material'
import { memo, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { formatDescription } from '~/utils/formatDescription'
import { saveConsumedContent } from '~/utils/relayHelper'
import { adaptTweetNode } from '~/utils/twitterAdapter'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import { Episode } from './Episode'

type Props = {
  isSearchResult: boolean
}

// eslint-disable-next-line no-underscore-dangle
const _Relevance = ({ isSearchResult }: Props) => {
  const pageSize = !isSearchResult ? 10 : 80

  const { setSelectedTimestamp, nextPage } = useDataStore((s) => s)
  const { navigateToNode } = useNodeNavigation()

  const { currentSearch, setSidebarOpen, setRelevanceSelected } = useAppStore((s) => s)

  const [currentPage, setCurrentPage] = useState(0)
  const [buttonKey, setButtonKey] = useState(0)

  const filteredNodes = useFilteredNodes()

  const startSlice = currentPage * pageSize
  const endSlice = startSlice + pageSize

  const hasNext = filteredNodes && filteredNodes.length > 0 ? filteredNodes.length - 1 > endSlice : false

  const isMobile = useIsMatchBreakpoint('sm', 'down')

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      saveConsumedContent(node)
      setSelectedTimestamp(node)
      setRelevanceSelected(true)
      navigateToNode(node.ref_id)
      isMobile && setSidebarOpen(false)
    },
    [setSelectedTimestamp, setRelevanceSelected, navigateToNode, isMobile, setSidebarOpen],
  )

  const handleLoadMoreClick = () => {
    nextPage()

    if (hasNext) {
      setCurrentPage(currentPage + 1)
      setButtonKey((prevKey) => prevKey + 1)
    }
  }

  const currentNodes = useMemo(() => {
    if (filteredNodes) {
      const nodes = [...filteredNodes].sort((a, b) => (b.date || 0) - (a.date || 0))

      if (currentSearch) {
        nodes.sort((a, b) => {
          const aValue = a.node_type === 'topic' && a.name.toLowerCase() === currentSearch.toLowerCase() ? 1 : 0
          const bValue = b.node_type === 'topic' && b.name.toLowerCase() === currentSearch.toLowerCase() ? 1 : 0

          return bValue - aValue
        })
      }

      return nodes.slice(0, endSlice)
    }

    return []
  }, [filteredNodes, currentSearch, endSlice])

  return (
    <>
      {(currentNodes ?? []).map((n) => {
        const adaptedNode = adaptTweetNode(n)

        const {
          image_url: imageUrl,
          date,
          boost,
          show_title: showTitle,
          node_type: nodeType,
          text,
          source_link: sourceLink,
          name,
          verified = false,
          twitter_handle: twitterHandle,
        } = adaptedNode || {}

        return nodeType ? (
          <Episode
            key={adaptedNode.ref_id}
            boostCount={boost || 0}
            date={date || 0}
            imageUrl={imageUrl || ''}
            name={name || ''}
            node={n}
            onClick={() => {
              handleNodeClick(n)
            }}
            showTitle={formatDescription(showTitle)}
            sourceLink={sourceLink}
            text={text || ''}
            twitterHandle={twitterHandle}
            type={nodeType}
            verified={verified}
          />
        ) : null
      })}

      <LoadMoreWrapper align="center" background="BG1" direction="row" justify="center">
        {hasNext && (
          <Button key={buttonKey} onClick={handleLoadMoreClick} size="medium">
            Load More
          </Button>
        )}
      </LoadMoreWrapper>
    </>
  )
}

export const Relevance = memo(_Relevance)

const LoadMoreWrapper = styled(Flex)`
  flex: 0 0 86px;
`
