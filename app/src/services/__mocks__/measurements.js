
const measurements = [
    {
        name: "Hemoglobiini",
        unit: "g/l",
        refLow: "134",
        refHigh: "160",
        id: 1
    },
    {
        name: "LDL-kolesteroli",
        unit: "mmol/l",
        refLow: "0",
        refHigh: "3",
        id: 2
    },
    {
        name: "Natrium (P-Na)",
        unit: "mmol/l",
        refLow: "137",
        refHigh: "145",
        id: 3
    },
    {
        name: "Kalium (P-K)",
        unit: "mmol/l",
        refLow: "3,3",
        refHigh: "4,9",
        id: 4
    }
]

const getAll = () => {
    return Promise.resolve(measurements)
}

export default { getAll, measurements }