import process from "process"

process.report.reportOnFatalError = true
process.report.reportOnSignal = true
process.report.reportOnUncaughtException = true
process.report.filename = "report.json"

function sampelError(){
    throw new Error("Upsss")
}

sampelError()