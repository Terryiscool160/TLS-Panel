import { Database } from "@/deps.ts"

let Database: Database

function GetDatabase() {
    if (!Database) {
        Database = new Database("TLS.db")

        const [version] = Database.prepare("select sqlite_version()").value<[string]>()!
        console.log(version)
    }

    return Database
}

export default GetDatabase();