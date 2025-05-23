import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import {
  FetchDataResponse,
  FetchEdgesResponse,
  FetchEdgeTypesResponse,
  FetchRadarResponse,
  FetchTopicResponse,
  NodeEditRequest,
  NodeExtended,
  NodeRequest,
  RadarRequest,
  SubmitErrRes,
} from '~/types'
import { api } from '../api'

type TradarParams = {
  skip?: string
  limit?: string
  approved?: string
  sort_by?: string
}

export type TAboutParams = {
  /* eslint-disable camelcase */
  title?: string
  description?: string
  mission_statement?: string
  search_term?: string
  seed_questions?: string[]
}

export type TStatParams = {
  [type: string]: number
}

export type TPriceParams = {
  success: string
  message: string
  data: {
    price: number
    endpoint: string
    method: string
  }
}

export type TMergeTopicsParams = {
  from?: string | string[]
  to?: string
}

export type TAddEdgeParams = {
  from: string
  to: string
  relationship: string
}

type TGetEdges = {
  [key: string]: string
}

export type TtopicsParams = {
  muted?: string
  skip?: string
  limit?: string
  sort_by?: string
  search?: string
  node_type?: string
}

type createCustonNode = {
  type: string
  parent: string
  name: string
  age: number
}

export type TNodeSchemaTypes = {
  type: string
} & { [k: string]: string | number }

const defaultParams = {
  skip: '0',
  limit: '500',
}

interface NodeContentResponse {
  nodes: Node[]
}

export interface ProcessingResponse {
  nodes: Node[]
  totalCount: number
  totalProcessing: number
}

type ViewContentParams = {
  limit?: string
  sort_by?: string
}

export interface Node {
  node_type: string
  properties: {
    [key: string]: never
  }
  ref_id: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultViewContentParams = {
  only_content: 'true',
  sort_by: 'date',
  limit: '10',
}

export interface Schema {
  name?: string
  ref_id?: string
  type: string
  age?: number
  parent?: string
  link?: string
  icon?: string
  title?: string
  app_version?: string
  description?: string
  mission_statement?: string
  namespace?: string
  search_term?: string
  is_deleted?: boolean
  children?: string[]
  primary_color?: string
  secondary_color?: string
  node_key?: string
  index?: string
  media_url?: string
  image_url?: string
  source_link?: string
  type_description?: string
  attributes?: { [key: string]: string | boolean }
  action?: string[]
}

export interface SchemaLink {
  edge_type: string
  ref_id: string
  source: string
  target: string
}

interface SchemaAllResponse {
  schemas: SchemaExtended[]
  edges: SchemaLink[]
}

interface FullTranscriptResponse {
  data: {
    text: string
  }
}

export interface ChangeNodeType {
  [index: string]: unknown
}

interface EdgeData {
  source: string
  target: string
  edge_type: string
}

interface UpdateEdgeData {
  ref_id?: string
  edge_type: string
}

export interface UpdateSchemaParams {
  type: string
  parent: string
  primary_color?: string
  icon?: string
  attributes: {
    [key: string | number]: string
  }
}

export const postFeedback = async (data: { answer: string; chain: string; feedback_type: 'helpful' | 'unhelpful' }) => {
  const response = await api.post('/answer/feedback', JSON.stringify(data))

  return response
}

export const editNodeSchemaUpdate = async (ref_id: string, data: UpdateSchemaParams) => {
  const response = await api.put(`/schema/${ref_id}`, JSON.stringify(data))

  return response
}

export const changeNodeType = async (ref_id: string, data: ChangeNodeType) =>
  api.put(`/node`, JSON.stringify({ ...data, ref_id }))

export const getFullTranscript = async (refId: string | undefined) => {
  const url = `/node/text/${refId}`
  const response = await api.get<FullTranscriptResponse>(url)

  return response
}

export const getSchemaAll = async () => {
  const url = '/schema/all'
  const response = await api.get<SchemaAllResponse>(url)

  return response
}

export const getNodeContent = async (queryParams: ViewContentParams) => {
  const queryString = new URLSearchParams({ ...queryParams }).toString()

  const url = `/node/content?${queryString}`
  const response = await api.get<NodeContentResponse>(url)

  return response
}

export const getTotalProcessing = async () => {
  const url = `/node/content`
  const response = await api.get<ProcessingResponse>(url)

  return response
}

export const getRadarData = async (queryParams: TradarParams = defaultParams) => {
  const response = await api.get<FetchRadarResponse>(
    `/radar?${new URLSearchParams({ ...defaultParams, ...queryParams }).toString()}`,
  )

  return response
}

export const getTopicsData = async (queryParams: TtopicsParams = defaultParams, signal?: AbortSignal) => {
  const response = await api.get<FetchTopicResponse>(
    `/nodes/info?${new URLSearchParams({ ...defaultParams, ...queryParams }).toString()}`,
    undefined,
    signal,
  )

  return response
}

export const getAboutData = async () => {
  const response = await api.get<TAboutParams>('/about')

  return response
}

export const getStats = async () => {
  const response = await api.get<TStatParams>('/stats')

  return response
}

export const getEdgeTypes = async () => {
  const response = await api.get<FetchEdgeTypesResponse>(`/curation/edge/type`)

  return response
}

export const getEdges = async (term: string, queryParams?: TGetEdges) => {
  const response = await api.get<FetchEdgesResponse>(
    `/curation/search/${term}?${new URLSearchParams({
      exact_match: 'false',
      ...queryParams,
    }).toString()}`,
  )

  return response
}

export const postEdgeType = async (data: TAddEdgeParams) => {
  const response = await api.post(`/curation/edge`, JSON.stringify(data))

  return response
}

export const postAboutData = async (data: TAboutParams) => {
  const response = await api.post(`/about`, JSON.stringify(data))

  return response
}

export const postMergeTopics = async (data: TMergeTopicsParams) => {
  const response = await api.post(`/curation/merge`, JSON.stringify(data))

  return response
}

export const triggerRadarJob = async () => api.get<SubmitErrRes>(`/radar/trigger-job`)

export const putRadarData = async (id: string, data: RadarRequest) => {
  const response = await api.put(`/radar/${id}`, JSON.stringify(data))

  return response
}

export const putNodeData = async (ref_id: string, data: NodeRequest) => {
  const response = await api.put(`/node?ref_id=${ref_id}`, JSON.stringify(data))

  return response
}

export const editNodeData = async (ref_id: string, data: NodeEditRequest) => {
  const response = await api.put(`/node?ref_id=${ref_id}`, JSON.stringify(data))

  return response
}

export const approveRadarData = async (id: string, pubkey: string) => {
  const response = await api.put(`/radar/${id}/approve`, JSON.stringify({ approve: 'True', pubkey }))

  return response
}

export const deleteRadarData = async (id: string) => {
  const response = await api.delete(`/radar/${id}`)

  return response
}

export const deleteNode = async (id: string) => {
  const response = await api.delete(`/node/?ref_id=${id}`)

  return response
}

export const getNode = async (id: string) => {
  const response = await api.get<NodeExtended>(`/node/${id}`)

  return response
}

export const getPathway = async (
  id: string,
  nodeTypes: string[] = ['Tweet', 'Person', 'User'],
  edgeTypes: string[] = ['HAS_REPLY>', 'HAS_QUOTE>', 'RETWEETED_BY>', 'THREAD_NEXT>', '<POSTED'],
  sortBy = '',
  includeProperties = true,
  minDepth = 0,
  depth = 10,
  limit = 800,
) => {
  const nodeTypeParam = JSON.stringify(nodeTypes)
  const edgeTypeParam = JSON.stringify(edgeTypes)
  const sortByParam = sortBy ? `&sort_by=${sortBy}` : ''

  const response = await api.get<FetchDataResponse>(
    `/graph/subgraph?node_type=${encodeURIComponent(nodeTypeParam)}&edge_type=${encodeURIComponent(
      edgeTypeParam,
    )}&include_properties=${includeProperties}&start_node=${id}&depth=${depth}&min_depth=${minDepth}&limit=${limit}${sortByParam}`,
  )

  return response
}

export const getPriceData = async (endpoint: string) => {
  const response = await api.get<TPriceParams>(`/getprice?endpoint=${endpoint}&method=post`)

  return response
}

export const getNodeSchemaTypes = async () => {
  const response = await api.get<{ schemas: TNodeSchemaTypes[] }>(`/schema/all`)

  return response
}

export const getNodeType = async (parent: string) => {
  const response = await api.get<{ [k: string]: string }>(`/schema/${parent}`)

  return response
}

export const postCustomType = async (data: createCustonNode) => {
  const response = await api.post('/schema', JSON.stringify(data))

  return response
}

export const postBluePrintType = async (data: EdgeData) => {
  const response = await api.post('/schema/edge', JSON.stringify(data))

  return response
}

export const updateEdgeType = async (data: UpdateEdgeData) => {
  const response = await api.put(`/schema/edge/${data.ref_id}`, JSON.stringify({ edge_type: data.edge_type }))

  return response
}

export const deleteEdgeType = async (ref_id: string) => {
  const response = await api.delete(`/schema/edge/${ref_id}`)

  return response
}
