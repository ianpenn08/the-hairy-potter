export const Pottery = (potteryObject) => {
    return `
    <fieldset>
        <section class="pottery">
            <p>Shape:   ${potteryObject.shape}<p>
            <p>Weight: ${potteryObject.weight}</p>
            <a>Height: ${potteryObject.height}</a>
           
        </section>
        </fieldset>
    `
}