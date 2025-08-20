import { BsCartPlus} from "react-icons/bs"

export function Home(){
    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <section className="w-full ">
                        <img 
                        src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0U2VDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1dyYTFZWlpPczBocnFKR3FYSlo5L1FXZEdHNUFPR0hYUU12cjI0VlFzM1A" 
                        alt="fones de ouvido"
                        className="w-full rounded-lg max-h-70 mb-2" />
                        <p className="font-medium mt-2 mb-2">AirPods Pro</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">R$ 10,00</strong>
                            <button className="bg-zinc-900 p-1 rounded ">
                                <BsCartPlus size={20} color="#FFF"/>
                            </button>
                        </div>
                    </section>

                     <section className="w-full ">
                        <img 
                        src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0U2VDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1dyYTFZWlpPczBocnFKR3FYSlo5L1FXZEdHNUFPR0hYUU12cjI0VlFzM1A" 
                        alt="fones de ouvido"
                        className="w-full rounded-lg max-h-70 mb-2" />
                        <p className="font-medium mt-2 mb-2">AirPods Pro</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">R$ 10,00</strong>
                            <button className="bg-zinc-900 p-1 rounded ">
                                <BsCartPlus size={20} color="#FFF"/>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}