let potteries = []


export const usePotteries = () => potteries.slice()

export const getPotteries = () => {
    return fetch('http://localhost:8088/potteries')
        .then(response => response.json())
        .then(parsedPotteries => {
            potteries = parsedPotteries
        })
}