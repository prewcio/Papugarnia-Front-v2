// To create a mobile version of HeaderList that slides down/up instead of right/left, you can modify the HeaderList component as follows:

import { ReactNode, useRef, useState } from "react";

type HeaderListProps = {
    className?: string;
    label?: string;
    children?: ReactNode;
};

export default function HeaderListMobile({ className, label, children }: HeaderListProps) {
    const headerRef = useRef<HTMLButtonElement>(null);
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        let isVisible = isListVisible;
        setIsListVisible(!isListVisible);
        if(isVisible) {
            setTimeout(() => {

            },300)    
        }
        
    }

    return (
        <>
            {label && 
                <button ref={headerRef} className='react-wavy-transitions__wavy-link' style={{ textAlign: 'center', paddingBottom: '0px', borderBottom: isListVisible ? '2px solid rgba(0,0,0,0.4)' : 'solid 2px rgba(128, 128, 128,0.3)', transition: 'border 0.3s ease' }} onClick={toggleListVisibility}>
                    {label}
                </button> 
            }

            <div className={`list-content-mobile ${isListVisible ? "visible" : ""}`} style={{ maxHeight: isListVisible ? '175px' : '0px', transition: 'max-height 1s ease' }}>
                {children}
            </div>
        </>
    )
}