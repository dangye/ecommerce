export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu Carinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img 
                    src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0U2VDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1dyYTFZWlpPczBocnFKR3FYSlo5L1FXZEdHNUFPR0hYUU12cjI0VlFzM1A" 
                    alt="fones de ouvido"
                    className="w-28" />

                <strong>Preço: R$ 10,00</strong>
                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center active:bg-slate-400"> - </button>
                    2
                    <button className="bg-slate-600 px-2  rounded text-white font-medium flex items-center justify-center active:bg-slate-400"> + </button>
                </div>

                <strong className="mr-4">
                    Subtotal: R$1.000,00
                </strong>
            </section>

            <p className="font-bold mt-4  mx-4 flex justify-end">Total: R$1.000,00</p>
        </div>
    )
}