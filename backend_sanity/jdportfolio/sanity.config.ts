import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'jd_portfolio',

  projectId: 'khctvjnp',
  dataset: 'jd_portfolio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
