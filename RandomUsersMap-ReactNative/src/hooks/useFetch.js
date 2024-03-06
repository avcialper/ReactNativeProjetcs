import React from "react"
import axios from "axios"

export default (url) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    const fetch = async () => {
        try {
            const { data: response } = await axios.get(url)
            setData(response)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        fetch()
    }, [url])

    return { data, loading, error }
}