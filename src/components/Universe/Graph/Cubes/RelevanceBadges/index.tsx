import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import clsx from 'clsx'
import { Fragment, memo, useEffect, useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'
import { useShallow } from 'zustand/react/shallow'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { maxChildrenDisplayed, nodesAreRelatives } from '~/components/Universe/constants'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { Avatar } from '~/components/common/Avatar'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useGraphStore, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { truncateText } from '~/utils/truncateText'
import { Tag, TagWrapper } from './styles'
import { BadgeProps } from './types'

const variableVector3 = new Vector3()

const NodeBadge = ({ position, userData, color }: BadgeProps) => {
  const ref = useRef<Group | null>(null)

  const { selectedNode, showSelectionGraph, hoveredNode, setHoveredNode } = useGraphStore(useShallow((s) => s))
  const { navigateToNode } = useNodeNavigation()

  const isTopic = (userData?.node_type || '') === 'Topic' || !!userData.name
  const isPerson = (userData?.node_type || '') === 'Guest' || (userData?.node_type || '') === 'Person'

  useFrame(() => {
    if (showSelectionGraph && ref.current) {
      const newPosition = variableVector3.set(userData?.x || 0, userData?.y || 0, userData?.z || 0)

      ref.current.position.copy(newPosition)
    }
  })

  useEffect(
    () =>
      function cleanup() {
        if (ref.current) {
          ref.current.clear()
        }
      },
    [ref],
  )

  const isHovered = useMemo(() => hoveredNode?.ref_id === userData?.ref_id, [hoveredNode?.ref_id, userData?.ref_id])
  const isSelected = selectedNode?.ref_id === userData?.ref_id

  return isTopic || (isSelected && showSelectionGraph) || !isSelected ? (
    <group ref={ref} position={position}>
      <Html center sprite zIndexRange={[0, 0]}>
        {isTopic ? (
          <TagWrapper
            direction="column"
            onClick={(e) => {
              e.stopPropagation()

              if (userData) {
                navigateToNode(userData.ref_id)
              }
            }}
            onPointerOut={(e) => {
              e.stopPropagation()

              return
              setHoveredNode(null)
            }}
            onPointerOver={(e) => {
              e.stopPropagation()

              return
              setHoveredNode(userData || null)
            }}
          >
            <div className="badge-wrapper">
              <TypeBadge type={userData?.node_type || ''} />
            </div>
            {userData?.name ? <span>{truncateText(userData?.name, 20)}</span> : null}
          </TagWrapper>
        ) : (
          <Tag
            className={clsx(userData?.node_type, { selected: isSelected })}
            color={color}
            fontColor={colors.white}
            fontSize={isTopic ? 64 : 20}
            onClick={(e) => {
              e.stopPropagation()

              if (userData) {
                navigateToNode(userData.ref_id)
              }
            }}
            onPointerOut={(e) => {
              e.stopPropagation()

              return
              setHoveredNode(null)
            }}
            onPointerOver={(e) => {
              e.stopPropagation()

              return
              setHoveredNode(userData || null)
            }}
            scale={isHovered ? 1.05 : 1}
            selected={false}
            size={isSelected ? 68 : 40}
            type={userData?.node_type || ''}
          >
            {!isPerson && !isTopic ? (
              <div className="badge-wrapper">
                <TypeBadge type={userData?.node_type || ''} />
              </div>
            ) : null}
            {userData?.name ? (
              userData?.name
            ) : (
              <Avatar
                rounded={isPerson}
                size={isSelected ? 60 : 52}
                src={userData?.image_url || 'audio_default.svg'}
                type={userData?.node_type}
              />
            )}
          </Tag>
        )}
      </Html>
    </group>
  ) : null
}

export const RelevanceBadges = memo(() => {
  const { showSelectionGraph, selectedNode, selectionGraphData } = useGraphStore(useShallow((s) => s))
  const simulation = useSimulationStore((s) => s.simulation)

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()

  const nodeBadges = useMemo(() => {
    const nodesData = simulation?.nodes() || []
    const nodes = showSelectionGraph ? selectionGraphData.nodes : nodesData

    const childIds = nodes
      .filter(
        (f: NodeExtended) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id,
      )
      .slice(0, maxChildrenDisplayed)

    const badgesToRender = childIds.map((n: NodeExtended) => {
      const color = getNodeColorByType(n.node_type || '', true) as string
      const position = new Vector3(n?.x || 0, n?.y || 0, n?.z || 0)

      const relativeIds =
        nodesData
          .filter((f: NodeExtended) => f.ref_id && nodesAreRelatives(f, n))
          .map((nd: NodeExtended) => nd?.ref_id || '') || []

      return (
        <NodeBadge
          key={`node-badge-${n.ref_id}`}
          color={color}
          position={position}
          relativeIds={relativeIds}
          userData={n}
        />
      )
    })

    return badgesToRender
  }, [simulation, showSelectionGraph, selectionGraphData.nodes, selectedNodeRelativeIds, selectedNode?.ref_id])

  return <Fragment key="node-badges">{nodeBadges.length ? nodeBadges : null}</Fragment>
})

RelevanceBadges.displayName = 'RelevanceBadges'
