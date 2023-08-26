import { Transition, Dialog } from "@headlessui/react"
import { useState, Fragment } from "react"

const Modal = () => {
   const [isOpen, setIsOpen] = useState(true)

   const closeModal = () => {
      setIsOpen(false)
   }
   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={'relative z-50'} onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className=""/>
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto backdrop-blur-sm">
                  <div className="flex items-center min-h-full justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                           <Dialog.Title as="h3" className="text-lg font-medium leading-6 font-poppins text-gray-600">
                              Error: 429
                           </Dialog.Title>
                           <div className="mt-2">
                              <p className="text-sm text-gray-500 font-outfit">
                                 Yah, Kuota untuk cek tagihan di web ini sudah habis, kamu coba lagi besok sore yaa!
                              </p>
                           </div>

                           <div className="mt-4">
                              <button
                                 type="button"
                                 onClick={closeModal}
                                 className="inline-flex justify-center rounded-md border border-transparent bg-[#FF2E63] hover:bg-[#ad2346] px-4 py-2 text-sm font-medium font-paytone text-white w-[100px]"
                              >
                                 Ok
                              </button>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   )
}

export default Modal