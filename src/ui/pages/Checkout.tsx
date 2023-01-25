import { ClientOnly } from '@crystallize/reactjs-hooks';
import { useState } from 'react';
import { AddressForm } from '../components/checkout-forms/address';
import { CheckoutCart } from '../components/checkout-forms/cart';
import { MagickLoginForm } from '../components/checkout-forms/magicklogin';
import { Payments } from '../components/payments';
import { useAuth } from '../hooks/useAuth';



export default ({ isServerSideAuthenticated }: { isServerSideAuthenticated: boolean }) => {
    const { isAuthenticated } = useAuth();
    const [isGuestCheckout, setIsGuestCheckout] = useState(false);
    const [showPayments, setShowPayments] = useState(false);
    return (
        <div className="2xl lg:container lg:px-6 px-2 mx-auto min-h-[100vh]">
            <div className="flex gap-20 lg:flex-row flex-col">
                {/* <CheckoutCart /> */}
                <div className="rounded pt-5 lg:px-10 lg:w-3/5 w-full px-3">
                    <ClientOnly>
                        {(() => {
                            if (!isServerSideAuthenticated || !isAuthenticated) {
                                return isGuestCheckout ? (
                                    <>
                                        <AddressForm
                                            title="Guest Checkout"
                                            onValidSubmit={() => setShowPayments(true)}
                                        />
                                        {showPayments && <Payments />}
                                    </>
                                ) : (
                                    <MagickLoginForm
                                        enabledGuest={() => setIsGuestCheckout(true)}
                                        actionTitle="Register"
                                        title="Register or continue as guest?"
                                    />
                                );
                            }   
                            return (
                                <>
                                    <AddressForm title="Address" onValidSubmit={() => setShowPayments(true)} />
                                    {showPayments && <Payments />}
                                </>
                            );
                        })()}
                    </ClientOnly>
                     {/* <h1 className='font-bold text-2xl mt-5 mb-3'>Inquiry form</h1>
                        <div className='flex '>

                        <div className='m-2'>
                        <label className='text-sm font-semibold' htmlFor="phonenumber">Phone Number</label><input onChange={()=>{console.log("hello")}} value={number} className=' w-[400px] p-4 rounded-sm block bg-grey h-[50px] ' type="number" placeholder='+91 9022xxxxxx' />
                        </div>

                        <div className='m-2 '>
                        <label  htmlFor="location" className='text-sm font-semibold'>Location</label> <input type="text" className="w-[400px] p-4 rounded-sm block bg-grey h-[50px] w-fulll"  placeholder='Jaipur' />
                        </div>

                        </div>
                        <button type='submit' onClick={()=>{console.log('hello')}} className="bg-black text-white rounded-md px-6 py-3 mt-5 float-right">Inquire</button> */}
                </div>
            </div>
        </div>
    );
};
