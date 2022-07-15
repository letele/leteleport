import fetchContent from "./fetchContent"

const fetchData = async name => await fetchContent().then(
    async res => await fetch(res[name].url).then(res=>res.json())
)


export default fetchData