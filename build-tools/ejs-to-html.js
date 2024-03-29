/* eslint-disable no-console */

import { resolve } from 'path'
import fs from 'fs'
import {
    Dir,
    PP,
    DEV_PATH,
    SITE_TITLE,
    SITE_URL,
    SITE_IMAGE,
    DESCRIPTION,
    DEVELOPER_NAME,
    DEVELOPER_URL,
    GOOGLE_ANALYTICS_ID,
} from '../config.js'
import transformFiles from './transform-files.js'
import ejs from 'ejs'

// filenameMap used in views/partials with if statements to check if it exists
let filenameMap = null
if(fs.existsSync(resolve(DEV_PATH, 'filename-map.json'))) {
    const fileContents = fs.readFileSync(resolve(DEV_PATH, 'filename-map.json'), 'utf-8')
    filenameMap = JSON.parse(fileContents)
}

function transformer({ filename, sourcePath, destinationPath }) {
    const filePath = resolve(sourcePath, filename)
    const ejsTemplate = fs.readFileSync(filePath, 'utf-8')
    const html = ejs.render(ejsTemplate, {
        delimiter: '%',
        filename: filePath,
        partials: Dir.partials,
        PP,
        SITE_TITLE,
        SITE_URL,
        SITE_IMAGE,
        DESCRIPTION,
        DEVELOPER_NAME,
        DEVELOPER_URL,
        GOOGLE_ANALYTICS_ID,
        NODE_ENV: process.env.NODE_ENV,
        filenameMap,
    })
    const filenamePlain = filename.split('.ejs')[0]
    const newFilePath = resolve(destinationPath, `${filenamePlain}.html`)

    fs.writeFile(newFilePath, html, err => {
        if(err) return console.log(err)
    })
}

// transform only the pages, not the partials
transformFiles(Dir.pages, { destination: Dir.dist }, transformer)

// watch ejs changes
const args = process.argv

for (let i = 0; i < args.length; i++) {
    if(args[i] === '--watch') {
        // watch the entire views folder, including pages and partials
        fs.watch(Dir.views, { recursive: true }, function() {
            transformFiles(Dir.pages, { destination: Dir.dist }, transformer)
            console.log('Compiled EJS to HTML')
        })
        break
    }
}
