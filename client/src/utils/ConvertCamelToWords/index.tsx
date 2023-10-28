function ConvertCamelToWords (word: string): string {
    return word.replace(/([a-z])([A-Z])/g, '$1 $2')
}



export default ConvertCamelToWords
