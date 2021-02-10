import axios from "axios"
import { decodeB64StringToArrayBuffer } from "../utils/b64"

let cancelSource = axios.CancelToken.source()

export const cancelRunningAxiosRequest = () => {
    cancelSource.cancel()

    // Create a new cancel token
    cancelSource = axios.CancelToken.source()
}

const axiosWithProxy = async(req, { state }) => {
    try {
        const res = await axios(
            "https://cors.bridged.cc/" + req.url, {
                ...req,
                cancelToken: (cancelSource && cancelSource.token) || "",
                responseType: "arraybuffer",
            }
        )

        return res
    } catch (e) {
        // Check if the throw is due to a cancellation
        if (axios.isCancel(e)) {
            throw "cancellation"
        } else {
            throw e
        }
    }
}

const axiosWithoutProxy = async(req, _store) => {
    try {
        const res = await axios({
            ...req,
            cancelToken: (cancelSource && cancelSource.token) || "",
            responseType: "arraybuffer",
        })

        return res
    } catch (e) {
        if (axios.isCancel(e)) {
            throw "cancellation"
        } else {
            throw e
        }
    }
}

const axiosStrategy = (req, store) => {
    return axiosWithProxy(req, store)
}

export const testables = {
    cancelSource,
}

export default axiosStrategy