
const fetchContent = async () => {
    const url = "https://letele.github.io/content.json"

    const content =  await fetch(url).then(async res => await res.json())

    return content
}

export default fetchContent