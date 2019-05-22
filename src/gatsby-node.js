const {
    flattenArray,
    getCurrentTimestamp,
    isArray,
    isObject,
    isObjEmpty,
} = require('./utils/helpers')

// Set the current active enviroment
let activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// If we are in dev, ignore the fact that we may be using a fake SSL certificate
if (activeEnv == 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

exports.sourceNodes = async (
    { actions: { createNode }, createContentDigest, createNodeId },
    { plugins }
) => {
    // Do your stuff!
}
