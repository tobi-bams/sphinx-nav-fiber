import clsx from 'clsx'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { useShallow } from 'zustand/react/shallow'
import BubbleChartIcon from '~/components/Icons/BubbleChartIcon'
import CommunitiesIcon from '~/components/Icons/CommunitiesIcon'
import GrainIcon from '~/components/Icons/GrainIcon'
import PublicIcon from '~/components/Icons/PublicIcon'
import { Flex } from '~/components/common/Flex'
import { GraphStyle, graphStyles, useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'

interface IconsMapper {
  split: ReactElement
  force: ReactElement
  sphere: ReactElement
  earth: ReactElement
}

const IconsMapper = {
  split: <GrainIcon />,
  force: <CommunitiesIcon />,
  sphere: <BubbleChartIcon />,
  earth: <PublicIcon />,
}

export const GraphViewControl = () => {
  const [graphStyle, setGraphStyle] = useGraphStore(useShallow((s) => [s.graphStyle, s.setGraphStyle]))

  const changeGraphType = (val: GraphStyle) => {
    setGraphStyle(val)
  }

  return false ? (
    <Wrapper direction="column">
      {graphStyles.map((i) => (
        <Flex key={i} className={clsx('icon', { active: graphStyle === i })} onClick={() => changeGraphType(i)}>
          {IconsMapper[i]}
        </Flex>
      ))}
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  width: 447px;
  height: 48px;
  background: ${colors.appearanceBg};
  border-radius: 6px;
  .icon {
    color: ${colors.GRAY6};
    font-size: 20px;
    cursor: pointer;
    padding: 12px 20px;

    &:hover {
      color: ${colors.GRAY3};
    }

    &:active {
      color: ${colors.white};
    }

    &.active {
      color: ${colors.white};
      background: ${colors.primaryBlue};
      padding: 12px 20px;
      border-radius: 6px;
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`
