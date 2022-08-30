# extend default request with prefix `https://proxy.cors.sh/`

This is not assigned to axiosWithProxy, the deafult setting for hoppscotch on this project is `PROXY_ENABLED = false`, but we add `proxy.cors.sh` prefix on all default requets.

See - `axiosWithoutProxy` in `AxiosStrategy.ts`

```ts
const axiosWithoutProxy: NetworkStrategy = (req) =>
  pipe(
    TE.tryCatch(
      () =>
        axios({
          ...req,
          // HERE
          url: "https://proxy.cors.sh/" + req.url,
          cancelToken: (cancelSource && cancelSource.token) || "",
          responseType: "arraybuffer",
        }),
      (e) => (axios.isCancel(e) ? "cancellation" : (e as any))
    ),

    TE.orElse((e) =>
      e !== "cancellation" && e.response
        ? TE.right(e.response as NetworkResponse)
        : TE.left(e)
    )
  )
```
