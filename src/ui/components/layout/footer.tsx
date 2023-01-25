import { ContentTransformer, Image } from '@crystallize/reactjs-components';
import CrystallizeLogo from '~/assets/crystallizeLogo.svg';
import { TenantLogo } from '../../lib/tenant-logo';
import { useAppContext } from '../../app-context/provider';
import { Footer as FooterType } from '~/use-cases/contracts/Footer';

export const Footer: React.FC<{
    footer: FooterType;
}> = ({ footer }) => {
    const { state: appContextState } = useAppContext();

    return (
        <footer className="2xl w-full mx-auto">
            
                <div className="px-6">
                    
                    <div className="mx-auto flex items-center  mb-5 border-t border-grey pt-3 justify-between items-center">
                        <div className="flex items-center">
                            <img src={`${CrystallizeLogo}`} alt="Crystallize logo" width="38" height="31" />
                            <p>
                                Powered by{' '}
                                <a href="https://crystallize.com" className="underline">
                                    Crystallize
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                
        
        </footer>
    );
};
