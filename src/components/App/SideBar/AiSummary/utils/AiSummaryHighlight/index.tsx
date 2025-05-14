import Tooltip from '@mui/material/Tooltip'
import styled, { keyframes } from 'styled-components'
import { ExtractedEntity } from '~/types'
import { colors } from '~/utils'

// Define a keyframe animation for highlighting from top-left to bottom-right
const highlightAnimation = keyframes`
  0% {
    background-color: ${colors.SECONDARY_BLUE};
    color: white;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  100% {
    background-color: transparent;
    color: ${colors.SECONDARY_BLUE};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`

const Highlight = styled.span<{ animate: boolean }>`
  padding: 0;
  margin: 0;
  color: ${colors.SECONDARY_BLUE};
  background-color: transparent;
  animation: ${({ animate }) => (animate ? highlightAnimation : 'none')} 0.5s ease-in-out forwards;
  animation-play-state: ${({ animate }) => (animate ? 'running' : 'paused')};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    animation: none;
  }

  &:active {
    background-color: ${colors.AI_HIGHLIGHT};
    border-radius: 4px;
    text-decoration: none;
  }
`

export function highlightAiSummary(
  sDescription: string,
  handleSubmit: (search: string) => void,
  entities?: ExtractedEntity[],
  isDescriptionComplete?: boolean,
) {
  if (!entities || entities.length === 0) {
    return sDescription
  }

  const sortedEntities = entities
    .map((entity) => entity.entity)
    .filter((entity) => typeof entity === 'string')
    .sort((a, b) => b.length - a.length)

  const escapedTerms = sortedEntities.map((entity) => escapeRegExp(entity))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  const parts = sDescription.split(regex)

  return (
    <>
      {parts.map((part, index) => {
        const entity = entities.find((e) => e.entity.toLowerCase() === part.toLowerCase())

        if (entity) {
          const uniqueKey = `${entity.entity}-${index}`

          return (
            <StyledTooltip key={uniqueKey} title={entity.description}>
              <Highlight animate={!!isDescriptionComplete} onClick={() => handleSubmit(part)}>
                {part}
              </Highlight>
            </StyledTooltip>
          )
        }

        return part
      })}
    </>
  )
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const StyledTooltip = styled((props) => <Tooltip classes={{ popper: props.className }} {...props} />)`
  & .MuiTooltip-tooltip {
    background-color: ${colors.BG4};
    color: white;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
    max-width: 180px;
    padding: 10px;
    transition: opacity 0.3s;
    text-align: start;
    white-space: normal;
  }
`
