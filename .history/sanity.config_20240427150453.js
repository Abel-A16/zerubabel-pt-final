// sanity.config.js
import { defineCliConfig } from 'sanity/cli'

const projectId = "h6tts3bj"
const dataset = "production"

export default defineCliConfig({ api: { projectId, dataset } })