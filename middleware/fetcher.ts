import Config from "../config/Faker";

export async function forceFetch(path: string, init: RequestInit) {
    for (let i = 0; i < 6; i++) {
        try {
            const fetch = await filterFetch(path,{
                ...init,
                headers: Object.fromEntries((
                     Object.entries(init.headers ?? {})
                          ?.map(([k,v]) => {
                              if (k.toLowerCase() === "connection") v = "keep-alive"
                              v = (v+"").replaceAll("\n","");
                              return ([
                                   k,
                                   v
                              ])
                          })
                ))
            });
            if (!fetch.ok) {
                throw(`${init.method} ${fetch.url} ${fetch.status}  REQUEST NOT COMPLETED`);
            }
            console.log("FINISHED");
            return fetch;
        } catch (e) {
            console.error(e);
            console.error(echoRequest(path,init,e))
            break;
        }
    }
}


function echoRequest(path: string, init: RequestInit, e: any) {
    return `${init.method} ${path}: ${e?.message ?? e}`
}

function filterFetch(path: string, init: RequestInit){
    if (!path.startsWith("http")) {
        path = Config.url + path;
    }
    console.log(echoRequest(path,init, "fetch"))
    //@ts-ignore
    return fetch(path, init);
}
