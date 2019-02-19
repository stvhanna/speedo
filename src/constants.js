export const USAGE = `
Speedo CLI runner

Usage: speedo run [options]`

export const EPILOG = 'Copyright 2019 © Sauce Labs'

export const CLI_PARAMS = [{
    alias: 'h',
    name: 'help',
    description: 'prints speedo help menu'
}, {
    alias: 'u',
    name: 'user',
    description: 'your Sauce Labs username'
}, {
    alias: 'k',
    name: 'key',
    description: 'your Sauce Labs user key'
}, {
    alias: 'n',
    name: 'name',
    description: 'name of your performance test'
}, {
    alias: 's',
    name: 'site',
    description: 'url of webpage you want to test'
}]

export const ERROR_MISSING_CREDENTIALS = `
Your Sauce credentials are missing!
Either set 'SAUCE_USERNAME' and 'SAUCE_ACCESS_KEY' in your environment or
provide them as parameter`