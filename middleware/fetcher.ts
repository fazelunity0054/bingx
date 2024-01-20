import Config from "../config/Faker";


export async function forceFetch(path: string, init: RequestInit) {
    for (let i = 0; i < 6; i++) {
        try {
            const fetch = await filterFetch(path, init);
            if (!fetch.ok) {
                console.error(fetch.status, await fetch.text())
                throw("REQUEST NOT COMPLETED");
            }
            console.log("FINISHED");
            return fetch;
        } catch (e) {
            console.error("error")
            console.log(echoRequest(path,init,e))
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
    return fetch(path, init);
}
