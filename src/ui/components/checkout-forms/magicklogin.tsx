import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppContext } from '../../app-context/provider';
import { useAuth } from '../../hooks/useAuth';
import { ServiceAPI } from '~/use-cases/service-api';
import { Input } from '../input';
import axios from 'axios';

export const MagickLoginForm: React.FC<{
    enabledGuest?: Function;
    title: string;
    actionTitle: string;
    onlyLogin?: boolean;
}> = ({ enabledGuest, title, actionTitle, onlyLogin = false }) => {
    const { state: appContextState, path, _t } = useAppContext();
    const { isAuthenticated, userInfos, logout } = useAuth();
    const [formData, updateFormData] = useState({
        firstname: userInfos?.firstname || '',
        lastname: userInfos?.lastname || '',
        email: userInfos?.email || '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value.trim(),
        });
    };
    const displayOnlyLogin = onlyLogin || isAuthenticated;
    console.log("check1")
    const [number,setNumber]=useState('');
    const [location,setLocation]=useState('');
    const [load,setLoad]=useState(false);

    const handleNumber=(e:any)=>{
        setNumber(e.target.value);
        setLoad(!load)
    }
    const handlelocation=(e:any)=>{
          setLocation(e.target.value)
          setLoad(!load)
    }
    const submit=()=>{
        console.log(number,location);
        const  data={
            Number:number,
            Location:location
        }
        axios.post('https://sheet.best/api/sheets/0f279ea2-12b0-483a-b42e-14190f671b7f',data).then((response)=>{
            console.log(response)
            setNumber('')
            setLocation('')
            setLoad('')
        })
    }
     
    return (
        <div className="flex flex-col mt-5 gap-2 w-full sm:min-w-[400px]">
            {/* {userInfos?.email && (

                <div>
                    <div className="bg-grey2 px-4 py-2 rounded">
                        <button
                            className="float-right bg-[#000] text-[#fff] px-4 py-2 rounded mt-2"
                            onClick={() => logout()}
                        >
                            {_t('logout')}
                        </button>
                        <p className="clear">
                            <em>
                                {_t('hello')} {userInfos?.firstname} {userInfos?.lastname} ({userInfos?.email})
                            </em>
                            <br />
                            {_t('stillYourSession')}
                        </p>
                    </div>
                </div>
            )}
            <h1 className="font-bold text-2xl">
                {title.replace('Register', isAuthenticated ? _t('login') : _t('register'))}
            </h1>
            <p className="mb-5  text-lg">{_t('willSendYouMagickLink')}</p>
            <form
                onSubmit={async (event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const api = ServiceAPI({
                        language: appContextState.language,
                        serviceApiUrl: appContextState.serviceApiUrl,
                    });
                    if (onlyLogin) {
                        await api.sendMagickLink(formData.email, path('/orders'));
                    } else {
                        await api.registerAndSendMagickLink(formData);
                    }
                    alert('We sent you a magick link, check your email.');
                }}
            >
                {!displayOnlyLogin && (
                    <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-2">
                        <Input
                            defaultValue={formData.firstname || userInfos?.firstname}
                            label={_t('address.firstname')}
                            placeholder="Luke"
                            name="firstname"
                            required
                            onChange={handleChange}
                        />

                        <Input
                            defaultValue={formData.lastname || userInfos?.lastname}
                            placeholder="Skywalker"
                            label={_t('address.lastname')}
                            name="lastname"
                            required
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="mt-2">
                    <Input
                        defaultValue={formData.email || userInfos?.email}
                        placeholder="luke.skywalker@rebellion.inc"
                        label={_t('address.email')}
                        name="email"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-start">
                    {enabledGuest && (
                        <button
                            type="button"
                            className="underline px-5 py-2 ml-2 rounded mt-5 w-full"
                            onClick={() => {
                                if (enabledGuest) {
                                    enabledGuest();
                                }
                            }}
                        >
                            {_t('guestCheckout')}
                        </button>
                    )}
                    <button type="submit" className="bg-[#000] text-[#fff] px-8 py-4 rounded mt-5 w-full">
                        {actionTitle.replace('Register', isAuthenticated ? _t('login') : _t('register'))}
                    </button>
                </div>
            </form> */}
             
             <h1 className='font-bold text-2xl mt-5 mb-3'>Inquiry form</h1>
                        <div className='flex '>

                        <div className='m-2'>
                        <label className='text-sm font-semibold' htmlFor="phonenumber">Phone Number</label><input value={number} onChange={handleNumber}  className=' w-[400px] p-4 rounded-sm block bg-grey h-[50px] ' type="text" placeholder='+91 9022xxxxxx' />
                        </div>

                        <div className='m-2 '>
                        <label  htmlFor="location" className='text-sm font-semibold'>Location</label> <input type="text" value={location} onChange={handlelocation} className="w-[400px] p-4 rounded-sm block bg-grey h-[50px] w-fulll"  placeholder='Jaipur' />
                        </div>

                        </div>
                        <button type='submit' onClick={submit} className="bg-black text-white rounded-md px-6 py-3 mt-5 float-right w-1/4">Inquire</button> 
        </div>
    );
};
