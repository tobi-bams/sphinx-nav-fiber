import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useEffect, useState } from 'react'
import { usePrevious } from '~/hooks/usePrevious'
import { SchemaLink } from '~/network/fetchSourcesData'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { SchemaExtended } from '../../../types'
import { Lines } from '../Links'
import { Nodes } from '../Nodes'
import { NODE_RADIUS } from '../constants'

type Props = {
  selectedSchemaId: string
  setSelectedSchemaId: (id: string) => void
  schemasWithPositions: SchemaExtended[]
  filteredLinks: SchemaLink[]
  setIsAddEdgeNode: (b: boolean) => void
  onEdgeClick: (refId: string, edgeType: string, source: string, target: string) => void
}

export const ForceGraph = ({
  schemasWithPositions,
  filteredLinks,
  setSelectedSchemaId,
  selectedSchemaId,
  setIsAddEdgeNode,
  onEdgeClick,
}: Props) => {
  const [simulation2d, setSimulation2d] = useState<ForceSimulation | null>(null)

  const prevSchemas = usePrevious<SchemaExtended[]>(schemasWithPositions)
  const prevLinks = usePrevious<SchemaLink[]>(filteredLinks)

  useEffect(() => {
    if (!schemasWithPositions.length || !filteredLinks.length) {
      return
    }

    const nodes = structuredClone(schemasWithPositions)
    const links = structuredClone(filteredLinks)

    if (simulation2d) {
      if (
        prevSchemas &&
        prevSchemas.length !== schemasWithPositions.length &&
        prevLinks &&
        prevLinks.length !== filteredLinks.length
      ) {
        simulation2d
          .nodes(nodes)
          .force(
            'link',
            forceLink(links)
              .id((d: SchemaExtended) => d.ref_id)
              .distance(100),
          )
          .force('charge', forceManyBody())
          .force('center', forceCenter())
          .force('collide', forceCollide(NODE_RADIUS + 5))
          .alpha(0.5)
          .restart()

        setSimulation2d({ ...simulation2d })
      }

      return
    }

    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink(links)
          .id((d: SchemaExtended) => d.ref_id)
          .distance(120),
      )
      .force('charge', forceManyBody().strength(-100))
      .force('center', forceCenter())
      .force('collide', forceCollide(NODE_RADIUS + 5))

    setSimulation2d(simulation)
  }, [schemasWithPositions, simulation2d, filteredLinks, prevSchemas, prevLinks])

  useFrame(() => {
    if (simulation2d) {
      // simulation2d.tick()
      // setUpdate(!update)
    }
  })

  return simulation2d ? (
    <>
      <Lines links={filteredLinks} nodes={simulation2d.nodes()} onEdgeClick={onEdgeClick} />
      <Nodes
        selectedId={selectedSchemaId}
        setIsAddEdgeNode={setIsAddEdgeNode}
        setSelectedSchemaId={setSelectedSchemaId}
        simulation={simulation2d}
      />
    </>
  ) : null
}
