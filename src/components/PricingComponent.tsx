import Image from "next/image"
import ModalForm from "./ModalForm"
export default function PricingComponent (){
    return(
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" id="planes">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">Un plan simple</h2>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-2 xl:gap-6 lg:space-y-0 max-w-2xl m-auto">
                <div className="flex flex-col p-6 mx-auto max-w-xs text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-bold text-left">Gratis</h3>
                    <div className="flex justify-left items-baseline my-8">
                        <span className="mr-2 text-5xl font-bold">$0</span>
                        <span className="text-gray-500 dark:text-gray-400">/mes</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Configuración individual</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Image
                                width={20}
                                height={20}
                                src="/icons8-warning-48.png" alt=""
                            />                            
                            <span>Datos de solo la última semana (7 días)</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Image
                                width={20}
                                height={20}
                                src="/icons8-warning-48.png" alt=""
                            />
                            <span>Empresas identificadas: <span className="font-semibold">20</span></span>
                        </li>
                    </ul>
                    <ModalForm/>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-xs text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold text-left">Pago</h3>
                    <div className="flex justify-left items-baseline my-8">
                        <span className="mr-2 text-5xl font-bold">$150</span>
                        <span className="text-gray-500 dark:text-gray-400">/mes</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Configuración individual</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Datos ilimitados (almacenamiento)</span>
                        </li>
                
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Empresas identificadas: <span className="font-semibold">ilimitadas</span></span>
                        </li>
                    </ul>
                    <ModalForm/>                
                    </div>
            </div>
        </div>
        </section>
    )
}
