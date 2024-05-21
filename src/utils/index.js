
export const currencyFormat = (price) => {
    const dollarAmout = new Intl.NumberFormat('en-US', {
        currency: "USD",
        style: "currency"
    }).format((price / 100).toFixed())

    return dollarAmout
}